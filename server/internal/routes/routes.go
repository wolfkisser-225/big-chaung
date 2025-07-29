package routes

import (
	"github.com/gin-gonic/gin"

	"ctf-platform/internal/handlers"
	"ctf-platform/internal/middleware"
)

// SetupRoutes 设置所有路由
func SetupRoutes(r *gin.Engine, h *handlers.Handlers) {
	// API版本组
	api := r.Group("/api/v1")

	// 系统路由（无需认证）
	system := api.Group("/system")
	{
		system.GET("/health", h.HealthCheck)
	}

	// 认证路由（无需认证）
	auth := api.Group("/auth")
	{
		auth.POST("/register", h.Register)
		auth.POST("/login", h.Login)
		auth.GET("/captcha", h.GenerateCaptcha)
		auth.POST("/send-email-code", h.SendEmailCode)
	}

	// 用户路由（需要认证）
	user := api.Group("/user")
	user.Use(middleware.JWTAuth(h.Config.JWTSecret, h.DB))
	{
		user.GET("/me", h.GetCurrentUser)
		user.PUT("/profile", h.UpdateProfile)
	}

	// 管理员路由（需要管理员权限）
	admin := api.Group("/admin")
	admin.Use(middleware.JWTAuth(h.Config.JWTSecret, h.DB))
	admin.Use(middleware.AdminOnly())
	{
		// 这里可以添加管理员专用的路由
		// admin.GET("/users", h.GetAllUsers)
		// admin.POST("/challenges", h.CreateChallenge)
	}

	// 公开路由（可选认证）
	public := api.Group("/public")
	public.Use(middleware.OptionalJWTAuth(h.Config.JWTSecret, h.DB))
	{
		// 这里可以添加公开访问的路由
		// public.GET("/challenges", h.GetChallenges)
		// public.GET("/leaderboard", h.GetLeaderboard)
	}
}