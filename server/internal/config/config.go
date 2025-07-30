package config

import (
	"os"
	"strconv"
)

type Config struct {
	DatabaseURL  string
	JWTSecret    string
	Environment  string
	FrontendURL  string
	Port         string
	UploadDir    string
	SMTPHost     string
	SMTPPort     int
	SMTPUser     string
	SMTPPassword string
}

func Load() *Config {
	smtpPort, _ := strconv.Atoi(getEnv("SMTP_PORT", "587"))

	return &Config{
		DatabaseURL:  getEnv("DATABASE_URL", "root:@tcp(localhost:3306)/ctf_platform?charset=utf8mb4&parseTime=True&loc=Local"),
		JWTSecret:    getEnv("JWT_SECRET", "your-super-secret-jwt-key-change-this-in-production"),
		Environment:  getEnv("NODE_ENV", "development"),
		FrontendURL:  getEnv("FRONTEND_URL", "http://localhost:5173"),
		Port:         getEnv("PORT", "8080"),
		UploadDir:    getEnv("UPLOAD_DIR", "./uploads"),
		SMTPHost:     getEnv("SMTP_HOST", "smtp.gmail.com"),
		SMTPPort:     smtpPort,
		SMTPUser:     getEnv("SMTP_USER", ""),
		SMTPPassword: getEnv("SMTP_PASS", ""),
	}
}

func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}