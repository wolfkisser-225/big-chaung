package main

import (
	"crypto/tls"
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"gopkg.in/gomail.v2"
)

func main() {
	// 加载.env文件
	err := godotenv.Load("../.env")
	if err != nil {
		log.Printf("警告: 无法加载.env文件: %v", err)
	}

	// 读取SMTP配置
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")
	fromEmail := os.Getenv("SMTP_FROM")

	fmt.Printf("SMTP配置:\n")
	fmt.Printf("Host: %s\n", smtpHost)
	fmt.Printf("Port: %s\n", smtpPort)
	fmt.Printf("User: %s\n", smtpUser)
	fmt.Printf("From: %s\n", fromEmail)
	fmt.Printf("Pass: %s\n", maskPassword(smtpPass))

	// 检查必要的配置
	if smtpHost == "" || smtpPort == "" || smtpUser == "" || smtpPass == "" || fromEmail == "" {
		log.Fatal("❌ SMTP配置不完整，请检查.env文件")
	}

	// 转换端口
	port, err := strconv.Atoi(smtpPort)
	if err != nil {
		log.Fatalf("❌ 无效的端口号: %v", err)
	}

	// 目标邮箱
	toEmail := "chasemouzi@foxmail.com"
	subject := "CTF平台邮件测试 - Gomail版本"
	body := "这是一封来自CTF平台的测试邮件。\n\n如果您收到这封邮件，说明邮件服务配置成功！\n\n发送时间: " + fmt.Sprintf("%v", os.Getenv("TIMESTAMP"))

	// 创建邮件
	m := gomail.NewMessage()
	m.SetHeader("From", fromEmail)
	m.SetHeader("To", toEmail)
	m.SetHeader("Subject", subject)
	m.SetBody("text/plain", body)

	// 尝试使用465端口（SSL）
	if port == 587 {
		fmt.Println("尝试使用465端口（SSL）而不是587端口（TLS）")
		port = 465
	}

	// 创建SMTP拨号器
	d := gomail.NewDialer(smtpHost, port, smtpUser, smtpPass)
	// 对于465端口，使用SSL
	if port == 465 {
		d.SSL = true
	} else {
		// 对于587端口，禁用TLS验证
		d.TLSConfig = &tls.Config{InsecureSkipVerify: true}
	}

	// 发送邮件
	fmt.Printf("\n正在使用gomail发送测试邮件到: %s\n", toEmail)
	if err := d.DialAndSend(m); err != nil {
		log.Printf("❌ 邮件发送失败: %v", err)
		return
	}

	fmt.Printf("✅ 测试邮件发送成功！\n")
	fmt.Printf("请检查 %s 的收件箱（包括垃圾邮件文件夹）\n", toEmail)
}

func maskPassword(password string) string {
	if len(password) <= 4 {
		return "****"
	}
	return password[:2] + "****" + password[len(password)-2:]
}