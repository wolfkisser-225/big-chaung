package main

import (
	"fmt"
	"math/rand"
	"strconv"
	"strings"
	"time"
)

// 生成6位数验证码
func generateVerificationCode() string {
	rand.Seed(time.Now().UnixNano())
	code := rand.Intn(900000) + 100000
	return strconv.Itoa(code)
}

func main() {
	fmt.Println("QQ邮箱验证码发送测试")
	fmt.Println(strings.Repeat("=", 50))

	// 配置QQ邮箱
	qqConfig := NewQQEmailConfig("chasemouzi@foxmail.com", "kraycskbtdifbeje")

	// 测试连接
	fmt.Println("1. 测试SMTP连接...")
	if err := qqConfig.TestConnection(); err != nil {
		fmt.Printf("❌ 连接测试失败: %v\n", err)
		return
	}

	// 生成验证码
	verificationCode := generateVerificationCode()
	fmt.Printf("2. 生成验证码: %s\n", verificationCode)

	// 发送验证码邮件
	fmt.Println("3. 发送验证码邮件...")
	targetEmail := "ormisia1@gmail.com"

	if err := qqConfig.SendVerificationCode(targetEmail, verificationCode); err != nil {
		fmt.Printf("❌ 验证码发送失败: %v\n", err)
		return
	}

	fmt.Println("\n=== 测试完成 ===")
	fmt.Printf("✅ 验证码 %s 已成功发送到 %s\n", verificationCode, targetEmail)
	fmt.Printf("发件人: %s\n", "chasemouzi@foxmail.com")
	fmt.Printf("收件人: %s\n", targetEmail)
	fmt.Printf("发送时间: %s\n", time.Now().Format("2006-01-02 15:04:05"))
	fmt.Println("\n请检查收件箱（包括垃圾邮件文件夹）")
}