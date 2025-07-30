package main

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"ctf-platform/internal/services"
	"github.com/joho/godotenv"
)

func main() {
	// 加载环境变量
	if err := godotenv.Load("../.env"); err != nil {
		log.Println("Warning: .env file not found")
	}

	// 读取SMTP配置
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPortStr := os.Getenv("SMTP_PORT")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")

	smtpPort, _ := strconv.Atoi(smtpPortStr)
	if smtpPort == 0 {
		smtpPort = 587
	}

	fmt.Printf("SMTP配置:\n")
	fmt.Printf("Host: %s\n", smtpHost)
	fmt.Printf("Port: %d\n", smtpPort)
	fmt.Printf("User: %s\n", smtpUser)
	fmt.Printf("Pass: %s (长度: %d)\n", "***", len(smtpPass))

	// 创建邮件服务
	emailService := services.NewEmailService(smtpHost, smtpPort, smtpUser, smtpPass)

	// 测试发送验证码
	testEmail := "chasemouzi@foxmail.com"
	fmt.Printf("\n正在发送测试邮件到: %s\n", testEmail)

	verifyID, err := emailService.SendVerificationCode(testEmail, "register")
	if err != nil {
		fmt.Printf("发送失败: %v\n", err)
		return
	}

	fmt.Printf("发送成功! VerifyID: %s\n", verifyID)
	fmt.Println("请检查邮箱是否收到验证码邮件")
}