package main

import (
	"crypto/tls"
	"fmt"
	"log"
	"net"
	"net/smtp"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

func main() {
	// 加载环境变量
	err := godotenv.Load("../.env")
	if err != nil {
		log.Printf("Warning: Error loading .env file: %v", err)
	}

	// 获取邮件配置
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

	if smtpHost == "" || smtpPort == "" || smtpUser == "" || smtpPass == "" {
		log.Fatal("邮件配置不完整，请检查.env文件")
	}

	// 测试邮箱地址
	toEmail := "chasemouzi@foxmail.com"

	// 邮件内容
	subject := "CTF平台邮件服务测试"
	body := `这是一封来自CTF平台的测试邮件。

如果您收到这封邮件，说明邮件服务配置正确。

测试时间: ` + fmt.Sprintf("%v", "现在")

	// 构建邮件
	message := fmt.Sprintf("To: %s\r\nSubject: %s\r\n\r\n%s", toEmail, subject, body)

	// 发送邮件
	fmt.Printf("\n正在发送测试邮件到: %s\n", toEmail)
	err = sendMailWithTLS(smtpHost, smtpPort, smtpUser, smtpPass, fromEmail, toEmail, message)
	if err != nil {
		log.Printf("邮件发送失败: %v", err)
		return
	}

	fmt.Printf("✅ 测试邮件发送成功！\n")
	fmt.Printf("请检查 %s 的收件箱（包括垃圾邮件文件夹）\n", toEmail)
}

func sendMailWithTLS(smtpHost, smtpPort, username, password, from, to, message string) error {
	// 转换端口
	port, err := strconv.Atoi(smtpPort)
	if err != nil {
		return fmt.Errorf("invalid port: %v", err)
	}

	// 建立连接
	conn, err := net.Dial("tcp", fmt.Sprintf("%s:%d", smtpHost, port))
	if err != nil {
		return fmt.Errorf("failed to connect: %v", err)
	}
	defer conn.Close()

	// 创建SMTP客户端
	client, err := smtp.NewClient(conn, smtpHost)
	if err != nil {
		return fmt.Errorf("failed to create SMTP client: %v", err)
	}
	defer client.Quit()

	// 启动TLS
	tlsConfig := &tls.Config{
		ServerName: smtpHost,
		InsecureSkipVerify: false,
	}

	if err = client.StartTLS(tlsConfig); err != nil {
		return fmt.Errorf("failed to start TLS: %v", err)
	}

	// 认证
	auth := smtp.PlainAuth("", username, password, smtpHost)
	if err = client.Auth(auth); err != nil {
		return fmt.Errorf("authentication failed: %v", err)
	}

	// 设置发件人
	if err = client.Mail(from); err != nil {
		return fmt.Errorf("failed to set sender: %v", err)
	}

	// 设置收件人
	if err = client.Rcpt(to); err != nil {
		return fmt.Errorf("failed to set recipient: %v", err)
	}

	// 发送邮件内容
	w, err := client.Data()
	if err != nil {
		return fmt.Errorf("failed to get data writer: %v", err)
	}
	defer w.Close()

	_, err = w.Write([]byte(message))
	if err != nil {
		return fmt.Errorf("failed to write message: %v", err)
	}

	return nil
}

func maskPassword(password string) string {
	if len(password) <= 4 {
		return "****"
	}
	return password[:2] + "****" + password[len(password)-2:]
}