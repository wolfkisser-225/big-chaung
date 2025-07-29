package handlers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

// HealthResponse 健康检查响应结构
type HealthResponse struct {
	Status    string    `json:"status"`
	Timestamp time.Time `json:"timestamp"`
	Version   string    `json:"version"`
	Database  string    `json:"database"`
}

// HealthCheck 健康检查
func (h *Handlers) HealthCheck(c *gin.Context) {
	// 检查数据库连接
	sqlDB, err := h.DB.DB()
	dbStatus := "connected"
	if err != nil {
		dbStatus = "disconnected"
	} else if err := sqlDB.Ping(); err != nil {
		dbStatus = "disconnected"
	}

	response := HealthResponse{
		Status:    "ok",
		Timestamp: time.Now(),
		Version:   "1.0.0",
		Database:  dbStatus,
	}

	statusCode := http.StatusOK
	if dbStatus == "disconnected" {
		response.Status = "degraded"
		statusCode = http.StatusServiceUnavailable
	}

	c.JSON(statusCode, response)
}