package services

import (
	"bytes"
	"crypto/rand"
	"fmt"
	"image/color"
	"image/png"
	"math"
	"math/big"
	"sync"
	"time"

	"github.com/fogleman/gg"
	"github.com/golang/freetype/truetype"
	"golang.org/x/image/font/gofont/goregular"
)

// CaptchaData 验证码数据
type CaptchaData struct {
	Code      string
	CreatedAt time.Time
}

// CaptchaService 验证码服务
type CaptchaService struct {
	captchas map[string]*CaptchaData
	mutex    sync.RWMutex
}

// NewCaptchaService 创建新的验证码服务
func NewCaptchaService() *CaptchaService {
	service := &CaptchaService{
		captchas: make(map[string]*CaptchaData),
	}
	
	// 启动清理过期验证码的goroutine
	go service.cleanupExpiredCaptchas()
	
	return service
}

// GenerateCaptcha 生成验证码
func (s *CaptchaService) GenerateCaptcha() (string, []byte, error) {
	// 生成验证码ID
	captchaID := s.generateID()
	
	// 生成验证码文本
	code := s.generateCode(4)
	
	// 存储验证码
	s.mutex.Lock()
	s.captchas[captchaID] = &CaptchaData{
		Code:      code,
		CreatedAt: time.Now(),
	}
	s.mutex.Unlock()
	
	// 生成验证码图片
	imageData, err := s.generateImage(code)
	if err != nil {
		return "", nil, err
	}
	
	return captchaID, imageData, nil
}

// VerifyCaptcha 验证验证码
func (s *CaptchaService) VerifyCaptcha(captchaID, code string) bool {
	s.mutex.RLock()
	captchaData, exists := s.captchas[captchaID]
	s.mutex.RUnlock()
	
	if !exists {
		return false
	}
	
	// 检查是否过期（5分钟）
	if time.Since(captchaData.CreatedAt) > 5*time.Minute {
		s.mutex.Lock()
		delete(s.captchas, captchaID)
		s.mutex.Unlock()
		return false
	}
	
	// 验证码验证后删除（一次性使用）
	s.mutex.Lock()
	delete(s.captchas, captchaID)
	s.mutex.Unlock()
	
	return captchaData.Code == code
}

// generateID 生成随机ID
func (s *CaptchaService) generateID() string {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	b := make([]byte, 16)
	for i := range b {
		n, _ := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		b[i] = charset[n.Int64()]
	}
	return string(b)
}

// generateCode 生成验证码文本
func (s *CaptchaService) generateCode(length int) string {
	const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	b := make([]byte, length)
	for i := range b {
		n, _ := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		b[i] = charset[n.Int64()]
	}
	return string(b)
}

// generateImage 生成验证码图片
func (s *CaptchaService) generateImage(code string) ([]byte, error) {
	const width, height = 120, 40
	
	// 创建画布
	dc := gg.NewContext(width, height)
	
	// 设置背景色
	dc.SetColor(color.RGBA{240, 240, 240, 255})
	dc.Clear()
	
	// 加载字体
	font, err := truetype.Parse(goregular.TTF)
	if err != nil {
		return nil, fmt.Errorf("failed to parse font: %v", err)
	}
	
	// 设置字体
	face := truetype.NewFace(font, &truetype.Options{Size: 20})
	dc.SetFontFace(face)
	
	// 绘制干扰线
	for i := 0; i < 5; i++ {
		x1, _ := rand.Int(rand.Reader, big.NewInt(width))
		y1, _ := rand.Int(rand.Reader, big.NewInt(height))
		x2, _ := rand.Int(rand.Reader, big.NewInt(width))
		y2, _ := rand.Int(rand.Reader, big.NewInt(height))
		
		dc.SetColor(color.RGBA{200, 200, 200, 255})
		dc.SetLineWidth(1)
		dc.DrawLine(float64(x1.Int64()), float64(y1.Int64()), float64(x2.Int64()), float64(y2.Int64()))
		dc.Stroke()
	}
	
	// 绘制验证码文字
	for i, char := range code {
		// 随机颜色
		r, _ := rand.Int(rand.Reader, big.NewInt(100))
		g, _ := rand.Int(rand.Reader, big.NewInt(100))
		b, _ := rand.Int(rand.Reader, big.NewInt(100))
		dc.SetColor(color.RGBA{uint8(r.Int64()), uint8(g.Int64()), uint8(b.Int64()), 255})
		
		// 随机位置和角度
		x := 15 + i*20 + int(math.Sin(float64(i))*5)
		y := 25 + int(math.Cos(float64(i))*3)
		
		// 旋转角度
		angle, _ := rand.Int(rand.Reader, big.NewInt(60))
		dc.Push()
		dc.RotateAbout(float64(angle.Int64()-30)*math.Pi/180, float64(x), float64(y))
		dc.DrawStringAnchored(string(char), float64(x), float64(y), 0.5, 0.5)
		dc.Pop()
	}
	
	// 添加噪点
	for i := 0; i < 50; i++ {
		x, _ := rand.Int(rand.Reader, big.NewInt(width))
		y, _ := rand.Int(rand.Reader, big.NewInt(height))
		r, _ := rand.Int(rand.Reader, big.NewInt(256))
		g, _ := rand.Int(rand.Reader, big.NewInt(256))
		b, _ := rand.Int(rand.Reader, big.NewInt(256))
		
		dc.SetColor(color.RGBA{uint8(r.Int64()), uint8(g.Int64()), uint8(b.Int64()), 100})
		dc.DrawCircle(float64(x.Int64()), float64(y.Int64()), 1)
		dc.Fill()
	}
	
	// 转换为PNG
	var buf bytes.Buffer
	if err := png.Encode(&buf, dc.Image()); err != nil {
		return nil, fmt.Errorf("failed to encode image: %v", err)
	}
	
	return buf.Bytes(), nil
}

// cleanupExpiredCaptchas 清理过期验证码
func (s *CaptchaService) cleanupExpiredCaptchas() {
	ticker := time.NewTicker(1 * time.Minute)
	defer ticker.Stop()
	
	for range ticker.C {
		s.mutex.Lock()
		for id, data := range s.captchas {
			if time.Since(data.CreatedAt) > 5*time.Minute {
				delete(s.captchas, id)
			}
		}
		s.mutex.Unlock()
	}
}