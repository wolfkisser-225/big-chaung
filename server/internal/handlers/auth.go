package handlers

import (
	"encoding/base64"
	"fmt"
	"net"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"

	"ctf-platform/internal/models"
)

// RegisterRequest 注册请求结构
type RegisterRequest struct {
	Username        string           `json:"username" binding:"required,min=3,max=20"`
	Email           string           `json:"email" binding:"required,email"`
	Password        string           `json:"password" binding:"required,min=8"`
	ConfirmPassword string           `json:"confirmPassword" binding:"required"`
	Role            models.UserRole  `json:"role"`
	InviteCode      *string          `json:"inviteCode"`
	EmailVerifyID   string           `json:"emailVerifyId" binding:"required"`
	EmailCode       string           `json:"emailCode" binding:"required"`
}

// LoginRequest 登录请求结构
type LoginRequest struct {
	Username      string `json:"username" binding:"required,email"` // 现在要求必须是邮箱格式
	Password      string `json:"password" binding:"required"`
	CaptchaID     string `json:"captchaId" binding:"required"`
	CaptchaCode   string `json:"captchaCode" binding:"required"`
	EmailVerifyID string `json:"emailVerifyId" binding:"required"`
	EmailCode     string `json:"emailCode" binding:"required"`
}

// SendEmailCodeRequest 发送邮箱验证码请求
type SendEmailCodeRequest struct {
	Email   string `json:"email" binding:"required,email"`
	Purpose string `json:"purpose" binding:"required"` // "register" 或 "login"
}

// CaptchaResponse 验证码响应
type CaptchaResponse struct {
	CaptchaID    string `json:"captchaId"`
	CaptchaImage string `json:"captchaImage"` // base64编码的图片
}

// AuthResponse 认证响应结构
type AuthResponse struct {
	User  *models.User `json:"user"`
	Token string       `json:"token"`
}

// UpdateProfileRequest 更新用户资料请求结构
type UpdateProfileRequest struct {
	Avatar *string `json:"avatar"`
	Bio    *string `json:"bio"`
}



// validatePassword 验证密码复杂度
func validatePassword(password string) error {
	if len(password) < 9 || len(password) > 20 {
		return fmt.Errorf("密码长度必须在9-20个字符之间")
	}

	var hasUpper, hasLower, hasDigit, hasSymbol bool
	for _, char := range password {
		switch {
		case char >= 'A' && char <= 'Z':
			hasUpper = true
		case char >= 'a' && char <= 'z':
			hasLower = true
		case char >= '0' && char <= '9':
			hasDigit = true
		case char >= 32 && char <= 126: // 可打印ASCII字符中的符号
			if !((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
				hasSymbol = true
			}
		}
	}

	typeCount := 0
	if hasUpper { typeCount++ }
	if hasLower { typeCount++ }
	if hasDigit { typeCount++ }
	if hasSymbol { typeCount++ }

	if typeCount < 3 {
		return fmt.Errorf("密码必须至少包含大小写字母、数字、符号四种类型中的三种")
	}

	return nil
}

// Register 用户注册
func (h *Handlers) Register(c *gin.Context) {
	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 验证密码确认
	if req.Password != req.ConfirmPassword {
		c.JSON(http.StatusBadRequest, gin.H{"error": "两次输入的密码不一致"})
		return
	}

	// 验证密码复杂度
	if err := validatePassword(req.Password); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 验证邮箱验证码
	if !h.EmailService.VerifyCode(req.EmailVerifyID, req.EmailCode) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "邮箱验证码错误或已过期"})
		return
	}

	// 检查用户名是否已存在
	var existingUser models.User
	if err := h.DB.Where("username = ? OR email = ?", req.Username, req.Email).First(&existingUser).Error; err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "用户名或邮箱已存在"})
		return
	}

	// 密码加密
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "密码加密失败"})
		return
	}

	// 设置默认角色
	if req.Role == "" {
		req.Role = models.UserRoleUser
	}

	// 创建用户
	user := models.User{
		Username: req.Username,
		Email:    req.Email,
		Password: string(hashedPassword),
		Role:     req.Role,
	}

	if err := h.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "用户创建失败"})
		return
	}

	// 生成JWT token
	token, err := generateJWT(user.ID, user.Username, user.Role)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "生成token失败"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "注册成功",
		"token":   token,
		"user": gin.H{
			"id":       user.ID,
			"username": user.Username,
			"email":    user.Email,
			"role":     user.Role,
		},
	})
}

// Login 用户登录
func (h *Handlers) Login(c *gin.Context) {
	var req LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 验证图片验证码
	if !h.CaptchaService.VerifyCaptcha(req.CaptchaID, req.CaptchaCode) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "图片验证码错误或已过期"})
		return
	}

	// 查找用户（只通过邮箱登录）
	var user models.User
	if err := h.DB.Where("email = ?", req.Username).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "邮箱或密码错误"})
		return
	}

	// 验证邮箱验证码
	if !h.EmailService.VerifyCode(req.EmailVerifyID, req.EmailCode) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "邮箱验证码错误或已过期"})
		return
	}

	// 验证密码
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "用户名或密码错误"})
		return
	}

	// 生成JWT token
	token, err := generateJWT(user.ID, user.Username, user.Role)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Token生成失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "登录成功",
		"token":   token,
		"user": gin.H{
			"id":       user.ID,
			"username": user.Username,
			"email":    user.Email,
			"role":     user.Role,
		},
	})
}

// GetCurrentUser 获取当前用户信息
func (h *Handlers) GetCurrentUser(c *gin.Context) {
	user, exists := c.Get("user")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
		return
	}

	u, ok := user.(*models.User)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid user data"})
		return
	}

	// 清除密码字段
	u.Password = ""

	c.JSON(http.StatusOK, gin.H{"user": u})
}

// UpdateProfile 更新用户资料
func (h *Handlers) UpdateProfile(c *gin.Context) {
	user, exists := c.Get("user")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
		return
	}

	u, ok := user.(*models.User)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid user data"})
		return
	}

	var req UpdateProfileRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 更新用户资料
	updates := map[string]interface{}{}
	if req.Avatar != nil {
		updates["avatar"] = *req.Avatar
	}
	if req.Bio != nil {
		updates["bio"] = *req.Bio
	}

	if len(updates) > 0 {
		if err := h.DB.Model(u).Updates(updates).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update profile"})
			return
		}
	}

	// 重新查询用户信息
	var updatedUser models.User
	if err := h.DB.First(&updatedUser, u.ID).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch updated user"})
		return
	}

	// 清除密码字段
	updatedUser.Password = ""

	c.JSON(http.StatusOK, gin.H{"user": updatedUser})
}

// GenerateCaptcha 生成图片验证码
func (h *Handlers) GenerateCaptcha(c *gin.Context) {
	captchaID, imageData, err := h.CaptchaService.GenerateCaptcha()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "验证码生成失败"})
		return
	}
	
	// 将图片数据转换为base64
	imageBase64 := base64.StdEncoding.EncodeToString(imageData)
	
	c.JSON(http.StatusOK, CaptchaResponse{
		CaptchaID:    captchaID,
		CaptchaImage: imageBase64,
	})
}

// SendEmailCode 发送邮箱验证码
func (h *Handlers) SendEmailCode(c *gin.Context) {
	var req SendEmailCodeRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 验证邮箱域名
	if !isValidEmailDomain(req.Email) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "邮箱域名不存在或无效"})
		return
	}

	// 根据用途验证邮箱是否已注册
	var user models.User
	err := h.DB.Where("email = ?", req.Email).First(&user).Error
	
	if req.Purpose == "register" {
		// 注册时，邮箱不应该已存在
		if err == nil {
			c.JSON(http.StatusConflict, gin.H{"error": "该邮箱已被注册"})
			return
		}
	} else if req.Purpose == "login" {
		// 登录时，邮箱必须已注册
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "该邮箱尚未注册"})
			return
		}
	}
	
	verifyID, err := h.EmailService.SendVerificationCode(req.Email, req.Purpose)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "验证码发送失败: " + err.Error()})
		return
	}
	
	c.JSON(http.StatusOK, gin.H{
		"message":       "验证码已发送",
		"emailVerifyId": verifyID,
	})
}

// isValidEmailDomain 验证邮箱域名是否有效
func isValidEmailDomain(email string) bool {
	// 基本格式验证
	if !strings.Contains(email, "@") {
		return false
	}

	parts := strings.Split(email, "@")
	if len(parts) != 2 {
		return false
	}

	domain := strings.ToLower(parts[1])

	// 检查无效域名列表
	invalidDomains := []string{
		"example.com",
		"test.com",
		"localhost",
		"invalid.com",
		"fake.com",
		"dummy.com",
		"sample.com",
	}

	for _, invalidDomain := range invalidDomains {
		if domain == invalidDomain {
			return false
		}
	}

	// 检查域名是否有MX记录
	_, err := net.LookupMX(domain)
	if err != nil {
		// 如果没有MX记录，检查A记录
		_, err = net.LookupHost(domain)
		if err != nil {
			return false
		}
	}

	return true
}

// generateJWT 生成JWT token
func generateJWT(userID uint, username string, role models.UserRole) (string, error) {
	claims := jwt.MapClaims{
		"user_id":  userID,
		"username": username,
		"role":     role,
		"exp":      time.Now().Add(time.Hour * 24).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte("your-secret-key"))
}