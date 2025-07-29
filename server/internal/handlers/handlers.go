package handlers

import (
	"ctf-platform/internal/config"
	"ctf-platform/internal/services"
	"gorm.io/gorm"
)

// Handlers 处理器结构体
type Handlers struct {
	DB             *gorm.DB
	Config         *config.Config
	CaptchaService *services.CaptchaService
	EmailService   *services.EmailService
}

// New 创建新的处理器实例
func New(db *gorm.DB, cfg *config.Config) *Handlers {
	// 初始化验证码服务
	captchaService := services.NewCaptchaService()
	
	// 初始化邮件服务
	emailService := services.NewEmailService(cfg.SMTPHost, cfg.SMTPPort, cfg.SMTPUser, cfg.SMTPPassword)
	
	return &Handlers{
		DB:             db,
		Config:         cfg,
		CaptchaService: captchaService,
		EmailService:   emailService,
	}
}