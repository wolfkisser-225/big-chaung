package services

import (
	"crypto/rand"
	"crypto/tls"
	"fmt"
	"math/big"
	"sync"
	"time"

	"gopkg.in/gomail.v2"
)

// EmailVerificationData 邮箱验证数据
type EmailVerificationData struct {
	Email     string
	Code      string
	Purpose   string // "register" 或 "login"
	CreatedAt time.Time
}

// EmailService 邮件服务
type EmailService struct {
	smtpHost     string
	smtpPort     int
	smtpUser     string
	smtpPassword string
	verifications map[string]*EmailVerificationData
	mutex        sync.RWMutex
}

// NewEmailService 创建新的邮件服务
func NewEmailService(smtpHost string, smtpPort int, smtpUser, smtpPassword string) *EmailService {
	service := &EmailService{
		smtpHost:      smtpHost,
		smtpPort:      smtpPort,
		smtpUser:      smtpUser,
		smtpPassword:  smtpPassword,
		verifications: make(map[string]*EmailVerificationData),
	}
	
	// 启动清理过期验证码的goroutine
	go service.cleanupExpiredCodes()
	
	return service
}

// SendVerificationCode 发送邮箱验证码
func (s *EmailService) SendVerificationCode(email, purpose string) (string, error) {
	// 生成验证ID
	verifyID := s.generateID()
	
	// 生成6位验证码
	code := s.generateCode(6)
	
	// 存储验证码
	s.mutex.Lock()
	s.verifications[verifyID] = &EmailVerificationData{
		Email:     email,
		Code:      code,
		Purpose:   purpose,
		CreatedAt: time.Now(),
	}
	s.mutex.Unlock()
	
	// 发送邮件
	if err := s.sendEmail(email, code, purpose); err != nil {
		// 发送失败时删除验证码
		s.mutex.Lock()
		delete(s.verifications, verifyID)
		s.mutex.Unlock()
		return "", err
	}
	
	return verifyID, nil
}

// VerifyCode 验证邮箱验证码
func (s *EmailService) VerifyCode(verifyID, code string) bool {
	s.mutex.RLock()
	verificationData, exists := s.verifications[verifyID]
	s.mutex.RUnlock()
	
	if !exists {
		return false
	}
	
	// 检查是否过期（10分钟）
	if time.Since(verificationData.CreatedAt) > 10*time.Minute {
		s.mutex.Lock()
		delete(s.verifications, verifyID)
		s.mutex.Unlock()
		return false
	}
	
	isValid := verificationData.Code == code
	
	// 只有验证成功时才删除验证码（一次性使用）
	if isValid {
		s.mutex.Lock()
		delete(s.verifications, verifyID)
		s.mutex.Unlock()
	}
	
	return isValid
}

// generateID 生成随机ID
func (s *EmailService) generateID() string {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	b := make([]byte, 16)
	for i := range b {
		n, _ := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		b[i] = charset[n.Int64()]
	}
	return string(b)
}

// generateCode 生成验证码
func (s *EmailService) generateCode(length int) string {
	const charset = "0123456789"
	b := make([]byte, length)
	for i := range b {
		n, _ := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		b[i] = charset[n.Int64()]
	}
	return string(b)
}

// sendEmail 发送邮件
func (s *EmailService) sendEmail(email, code, purpose string) error {
	// 如果SMTP配置为空，跳过发送（开发环境）
	if s.smtpUser == "" || s.smtpPassword == "" {
		fmt.Printf("\n=== [开发模式] 邮件服务未配置 ===\n")
		fmt.Printf("收件人: %s\n", email)
		fmt.Printf("验证码: %s\n", code)
		fmt.Printf("用途: %s\n", purpose)
		fmt.Printf("提示: 请查看 EMAIL_SETUP.md 文件了解如何配置邮件服务\n")
		fmt.Printf("================================\n\n")
		return nil
	}
	
	m := gomail.NewMessage()
	m.SetHeader("From", s.smtpUser)
	m.SetHeader("To", email)
	
	var subject, body string
	switch purpose {
	case "register":
		subject = "CTF平台 - 注册验证码"
		body = s.getRegisterEmailTemplate(code)
	case "login":
		subject = "CTF平台 - 登录验证码"
		body = s.getLoginEmailTemplate(code)
	default:
		subject = "CTF平台 - 验证码"
		body = s.getDefaultEmailTemplate(code)
	}
	
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", body)
	
	d := gomail.NewDialer(s.smtpHost, s.smtpPort, s.smtpUser, s.smtpPassword)
	// 配置TLS加密
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	fmt.Printf("[邮件服务] 正在发送邮件到: %s\n", email)
	if err := d.DialAndSend(m); err != nil {
		fmt.Printf("[邮件服务] 发送失败: %v\n", err)
		return fmt.Errorf("failed to send email: %v", err)
	}
	fmt.Printf("[邮件服务] 邮件发送成功到: %s\n", email)
	
	return nil
}

// getRegisterEmailTemplate 获取注册邮件模板
func (s *EmailService) getRegisterEmailTemplate(code string) string {
	return fmt.Sprintf(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CTF平台注册验证</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2c3e50;">CTF平台注册验证</h2>
        <p>您好！</p>
        <p>感谢您注册CTF平台，您的验证码是：</p>
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; margin: 20px 0; border-radius: 5px;">
            <span style="font-size: 24px; font-weight: bold; color: #e74c3c; letter-spacing: 3px;">%s</span>
        </div>
        <p>验证码有效期为10分钟，请及时使用。</p>
        <p>如果这不是您的操作，请忽略此邮件。</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">此邮件由CTF平台系统自动发送，请勿回复。</p>
    </div>
</body>
</html>
`, code)
}

// getLoginEmailTemplate 获取登录邮件模板
func (s *EmailService) getLoginEmailTemplate(code string) string {
	return fmt.Sprintf(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CTF平台登录验证</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2c3e50;">CTF平台登录验证</h2>
        <p>您好！</p>
        <p>您正在尝试登录CTF平台，您的验证码是：</p>
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; margin: 20px 0; border-radius: 5px;">
            <span style="font-size: 24px; font-weight: bold; color: #3498db; letter-spacing: 3px;">%s</span>
        </div>
        <p>验证码有效期为10分钟，请及时使用。</p>
        <p>如果这不是您的操作，请立即修改密码并联系管理员。</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">此邮件由CTF平台系统自动发送，请勿回复。</p>
    </div>
</body>
</html>
`, code)
}

// getDefaultEmailTemplate 获取默认邮件模板
func (s *EmailService) getDefaultEmailTemplate(code string) string {
	return fmt.Sprintf(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CTF平台验证码</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2c3e50;">CTF平台验证码</h2>
        <p>您好！</p>
        <p>您的验证码是：</p>
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; margin: 20px 0; border-radius: 5px;">
            <span style="font-size: 24px; font-weight: bold; color: #27ae60; letter-spacing: 3px;">%s</span>
        </div>
        <p>验证码有效期为10分钟，请及时使用。</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">此邮件由CTF平台系统自动发送，请勿回复。</p>
    </div>
</body>
</html>
`, code)
}

// cleanupExpiredCodes 清理过期验证码
func (s *EmailService) cleanupExpiredCodes() {
	ticker := time.NewTicker(1 * time.Minute)
	defer ticker.Stop()
	
	for range ticker.C {
		s.mutex.Lock()
		for id, data := range s.verifications {
			if time.Since(data.CreatedAt) > 10*time.Minute {
				delete(s.verifications, id)
			}
		}
		s.mutex.Unlock()
	}
}