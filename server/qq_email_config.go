package main

import (
	"crypto/tls"
	"fmt"
	"net/smtp"
	"time"
)

// QQEmailConfig QQ邮箱配置结构
type QQEmailConfig struct {
	SMTPHost string
	SMTPPort string
	Email    string
	Password string
}

// NewQQEmailConfig 创建QQ邮箱配置
func NewQQEmailConfig(email, password string) *QQEmailConfig {
	return &QQEmailConfig{
		SMTPHost: "smtp.qq.com",
		SMTPPort: "587",
		Email:    email,
		Password: password,
	}
}

// SendEmail 发送邮件
func (config *QQEmailConfig) SendEmail(to, subject, body string) error {
	fmt.Printf("正在发送邮件到: %s\n", to)

	// 构建邮件内容
	msg := []byte("From: " + config.Email + "\r\n" +
		"To: " + to + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"Content-Type: text/plain; charset=UTF-8\r\n" +
		"\r\n" +
		body + "\r\n")

	// SMTP认证
	auth := smtp.PlainAuth("", config.Email, config.Password, config.SMTPHost)

	// 连接SMTP服务器
	addr := config.SMTPHost + ":" + config.SMTPPort
	c, err := smtp.Dial(addr)
	if err != nil {
		return fmt.Errorf("连接SMTP服务器失败: %v", err)
	}
	defer c.Quit()

	// 启用STARTTLS
	tlsConfig := &tls.Config{
		InsecureSkipVerify: false,
		ServerName:         config.SMTPHost,
	}

	if err = c.StartTLS(tlsConfig); err != nil {
		return fmt.Errorf("启用STARTTLS失败: %v", err)
	}

	// 认证
	if err = c.Auth(auth); err != nil {
		return fmt.Errorf("SMTP认证失败: %v", err)
	}

	// 设置发件人
	if err = c.Mail(config.Email); err != nil {
		return fmt.Errorf("设置发件人失败: %v", err)
	}

	// 设置收件人
	if err = c.Rcpt(to); err != nil {
		return fmt.Errorf("设置收件人失败: %v", err)
	}

	// 发送邮件内容
	w, err := c.Data()
	if err != nil {
		return fmt.Errorf("准备发送邮件内容失败: %v", err)
	}

	_, err = w.Write(msg)
	if err != nil {
		return fmt.Errorf("写入邮件内容失败: %v", err)
	}

	err = w.Close()
	if err != nil {
		return fmt.Errorf("完成邮件发送失败: %v", err)
	}

	fmt.Printf("✅ 邮件发送成功！发件人: %s, 收件人: %s\n", config.Email, to)
	return nil
}

// SendVerificationCode 发送验证码邮件
func (config *QQEmailConfig) SendVerificationCode(to, code string) error {
	subject := "CTF平台验证码"
	body := fmt.Sprintf(`亲爱的用户：

您的验证码是：%s

该验证码将在10分钟内有效，请及时使用。
如果您没有请求此验证码，请忽略此邮件。

此邮件由系统自动发送，请勿回复。

CTF平台团队
%s`,
		code, time.Now().Format("2006-01-02 15:04:05"))

	return config.SendEmail(to, subject, body)
}

// TestConnection 测试连接
func (config *QQEmailConfig) TestConnection() error {
	fmt.Println("测试QQ邮箱SMTP连接...")

	auth := smtp.PlainAuth("", config.Email, config.Password, config.SMTPHost)
	addr := config.SMTPHost + ":" + config.SMTPPort

	c, err := smtp.Dial(addr)
	if err != nil {
		return fmt.Errorf("连接失败: %v", err)
	}
	defer c.Quit()

	tlsConfig := &tls.Config{
		InsecureSkipVerify: false,
		ServerName:         config.SMTPHost,
	}

	if err = c.StartTLS(tlsConfig); err != nil {
		return fmt.Errorf("STARTTLS失败: %v", err)
	}

	if err = c.Auth(auth); err != nil {
		return fmt.Errorf("认证失败: %v", err)
	}

	fmt.Println("✅ QQ邮箱连接测试成功")
	return nil
}