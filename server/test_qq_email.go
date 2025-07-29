package main

import (
	"crypto/tls"
	"fmt"
	"net/smtp"
	"strings"
)

// QQ邮箱SMTP配置
const (
	QQ_SMTP_HOST = "smtp.qq.com"
	QQ_SMTP_PORT = "587"
	QQ_EMAIL    = "your-email@foxmail.com"    // 请替换为您的QQ邮箱
	QQ_PASSWORD = "your-authorization-code"   // 请替换为您的QQ邮箱授权码
	TO_EMAIL    = "test-recipient@example.com" // 请替换为测试收件人邮箱
)

func testQQEmail() {
	fmt.Println("=== QQ邮箱SMTP测试开始 ===")
	
	// 邮件内容
	subject := "QQ邮箱测试邮件"
	body := "这是一封来自QQ邮箱的测试邮件，用于验证SMTP功能是否正常。\n\n发送时间: " + fmt.Sprintf("%v", "现在")
	
	// 构建邮件
	msg := []byte("From: " + QQ_EMAIL + "\r\n" +
		"To: " + TO_EMAIL + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"Content-Type: text/plain; charset=UTF-8\r\n" +
		"\r\n" +
		body + "\r\n")
	
	// SMTP认证
	auth := smtp.PlainAuth("", QQ_EMAIL, QQ_PASSWORD, QQ_SMTP_HOST)
	
	// 连接SMTP服务器
	addr := QQ_SMTP_HOST + ":" + QQ_SMTP_PORT
	fmt.Printf("连接到SMTP服务器: %s\n", addr)
	
	// 建立普通连接，然后使用STARTTLS
	c, err := smtp.Dial(addr)
	if err != nil {
		fmt.Printf("连接SMTP服务器失败: %v\n", err)
		return
	}
	defer c.Quit()
	
	// 启用STARTTLS
	tlsConfig := &tls.Config{
		InsecureSkipVerify: false,
		ServerName:         QQ_SMTP_HOST,
	}
	
	if err = c.StartTLS(tlsConfig); err != nil {
		fmt.Printf("启用STARTTLS失败: %v\n", err)
		return
	}
	fmt.Println("STARTTLS启用成功")
	
	// 认证
	if err = c.Auth(auth); err != nil {
		fmt.Printf("SMTP认证失败: %v\n", err)
		return
	}
	fmt.Println("SMTP认证成功")
	
	// 设置发件人
	if err = c.Mail(QQ_EMAIL); err != nil {
		fmt.Printf("设置发件人失败: %v\n", err)
		return
	}
	
	// 设置收件人
	if err = c.Rcpt(TO_EMAIL); err != nil {
		fmt.Printf("设置收件人失败: %v\n", err)
		return
	}
	
	// 发送邮件内容
	w, err := c.Data()
	if err != nil {
		fmt.Printf("准备发送邮件内容失败: %v\n", err)
		return
	}
	
	_, err = w.Write(msg)
	if err != nil {
		fmt.Printf("写入邮件内容失败: %v\n", err)
		return
	}
	
	err = w.Close()
	if err != nil {
		fmt.Printf("完成邮件发送失败: %v\n", err)
		return
	}
	
	fmt.Printf("✅ 邮件发送成功！\n")
	fmt.Printf("发件人: %s\n", QQ_EMAIL)
	fmt.Printf("收件人: %s\n", TO_EMAIL)
	fmt.Printf("主题: %s\n", subject)
	fmt.Println("=== QQ邮箱SMTP测试完成 ===")
}

// 简化版本的QQ邮箱测试
func testQQEmailSimple() {
	fmt.Println("\n=== QQ邮箱简化测试开始 ===")
	
	// 使用标准库的SendMail函数
	auth := smtp.PlainAuth("", QQ_EMAIL, QQ_PASSWORD, QQ_SMTP_HOST)
	
	to := []string{TO_EMAIL}
	msg := []byte("From: " + QQ_EMAIL + "\r\n" +
		"To: " + TO_EMAIL + "\r\n" +
		"Subject: QQ邮箱简化测试\r\n" +
		"Content-Type: text/plain; charset=UTF-8\r\n" +
		"\r\n" +
		"这是QQ邮箱的简化测试邮件。\r\n")
	
	err := smtp.SendMail(QQ_SMTP_HOST+":"+QQ_SMTP_PORT, auth, QQ_EMAIL, to, msg)
	if err != nil {
		fmt.Printf("❌ 简化测试失败: %v\n", err)
		return
	}
	
	fmt.Println("✅ 简化测试成功！")
	fmt.Println("=== QQ邮箱简化测试完成 ===")
}

func main() {
	fmt.Println("QQ邮箱SMTP功能测试")
	fmt.Println(strings.Repeat("=", 50))
	
	// 测试详细版本
	testQQEmail()
	
	// 测试简化版本
	testQQEmailSimple()
}