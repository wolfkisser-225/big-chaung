# 部署指南

## 概述

本指南将帮助您在不同环境中部署 CTF 平台，包括开发环境、测试环境和生产环境。

## 开发环境部署

### 前置条件

确保您已完成 [环境需求](environment-requirements.md) 中的所有配置。

### 快速启动

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd big-chaung
   ```

2. **安装依赖**
   ```bash
   # 使用 pnpm (推荐)
   pnpm install
   
   # 或使用 npm
   npm install
   ```

3. **启动开发服务器**
   ```bash
   # 使用 pnpm
   pnpm dev
   
   # 或使用 npm
   npm run dev
   ```

4. **访问应用**
   - 打开浏览器访问: [http://localhost:5173](http://localhost:5173)
   - 开发服务器支持热重载，修改代码后会自动刷新

### 开发环境配置

#### 环境变量

创建 `.env.local` 文件（开发环境）：

```env
# 应用配置
VITE_APP_TITLE=CTF平台
VITE_APP_VERSION=1.0.0

# API 配置
VITE_API_BASE_URL=http://localhost:3001/api/v1
VITE_WS_URL=ws://localhost:3001

# 功能开关
VITE_ENABLE_BEHAVIOR_TRACKING=true
VITE_ENABLE_BLOCKCHAIN=false
VITE_ENABLE_DEBUG=true

# 第三方服务（开发环境可选）
VITE_BLOCKCHAIN_NETWORK=localhost
VITE_BLOCKCHAIN_CONTRACT_ADDRESS=

# 邮件服务配置（生产环境必需）
# 参考 EMAIL_SETUP.md 配置邮件服务
# SMTP_HOST=smtp.qq.com
# SMTP_PORT=587
# SMTP_USER=your-email@qq.com
# SMTP_PASS=your-authorization-code
# SMTP_FROM=your-email@qq.com
```

#### 开发工具配置

**VS Code 配置** (`.vscode/settings.json`):

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

**推荐的 VS Code 扩展** (`.vscode/extensions.json`):

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 测试环境部署

### 构建应用

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

### 静态文件服务

#### 使用 Nginx

**Nginx 配置示例** (`/etc/nginx/sites-available/ctf-platform`):

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/ctf-platform/dist;
    index index.html;

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 处理 SPA 路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # API 代理（如果后端在同一服务器）
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 使用 Apache

**Apache 配置示例** (`.htaccess`):

```apache
RewriteEngine On

# 处理 SPA 路由
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# 启用压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# 设置缓存
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## 后端服务器部署

### Go 后端服务

#### 环境配置

创建 `.env` 文件（生产环境）：

```env
# 数据库配置
DATABASE_URL="root:password@tcp(localhost:3306)/ctf_platform?charset=utf8mb4&parseTime=True&loc=Local"

# JWT密钥（生产环境必须更改）
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# 应用配置
PORT=3001
NODE_ENV=production

# 前端地址
FRONTEND_URL="https://your-domain.com"

# 文件上传配置
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE=10485760

# 后端API配置
API_BASE_URL=https://api.your-domain.com/api/v1

# 邮件配置（生产环境必需）
# 参考 EMAIL_SETUP.md 配置邮件服务
SMTP_HOST="smtp.qq.com"
SMTP_PORT=587
SMTP_USER="your-email@qq.com"
SMTP_PASS="your-authorization-code"
SMTP_FROM="your-email@qq.com"
```

#### 启动后端服务

```bash
# 进入服务器目录
cd server

# 安装Go依赖
go mod tidy

# 构建应用
go build -o ctf-platform main.go

# 运行服务
./ctf-platform

# 或直接运行
go run main.go
```

#### 数据库配置

```bash
# 启动MySQL服务
mysqld --datadir="/path/to/mysql-data" --port=3306 --console

# 创建数据库
mysql -u root -p
CREATE DATABASE ctf_platform;
```

#### 邮件测试分支

邮件功能测试代码位于 `email_test` 分支：

```bash
# 切换到邮件测试分支
git checkout email_test

# 运行邮件测试
cd server
go run test_qq_email.go
go run test_qq_verification.go
```

## 生产环境部署

### Docker 部署

#### Dockerfile

```dockerfile
# 多阶段构建
FROM node:18-alpine AS builder

WORKDIR /app

# 复制包管理文件
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm 并安装依赖
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
RUN pnpm build

# 生产镜像
FROM nginx:alpine

# 复制构建结果
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### Docker Compose

```yaml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    networks:
      - ctf-network

  # 后端服务（未来添加）
  # backend:
  #   image: ctf-backend:latest
  #   ports:
  #     - "3000:3000"
  #   environment:
  #     - NODE_ENV=production
  #     - DATABASE_URL=mysql://user:password@db:3306/ctf
  #   depends_on:
  #     - db
  #   restart: unless-stopped
  #   networks:
  #     - ctf-network

  # 数据库（未来添加）
  # db:
  #   image: mysql:8.0
  #   environment:
  #     - MYSQL_ROOT_PASSWORD=rootpassword
  #     - MYSQL_DATABASE=ctf
  #     - MYSQL_USER=ctfuser
  #     - MYSQL_PASSWORD=ctfpassword
  #   volumes:
  #     - db_data:/var/lib/mysql
  #   restart: unless-stopped
  #   networks:
  #     - ctf-network

networks:
  ctf-network:
    driver: bridge

# volumes:
#   db_data:
```

#### 部署命令

```bash
# 构建并启动
docker-compose up -d --build

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down

# 更新部署
docker-compose pull
docker-compose up -d
```

### Kubernetes 部署

#### Deployment 配置

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ctf-frontend
  labels:
    app: ctf-frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ctf-frontend
  template:
    metadata:
      labels:
        app: ctf-frontend
    spec:
      containers:
      - name: frontend
        image: ctf-platform:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
        env:
        - name: NODE_ENV
          value: "production"
---
apiVersion: v1
kind: Service
metadata:
  name: ctf-frontend-service
spec:
  selector:
    app: ctf-frontend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
```

### CI/CD 流水线

#### GitHub Actions

```yaml
name: Deploy CTF Platform

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'pnpm'
    
    - name: Install pnpm
      run: npm install -g pnpm
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Run tests
      run: pnpm test
    
    - name: Build
      run: pnpm build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Build and push Docker image
      run: |
        docker build -t ctf-platform:${{ github.sha }} .
        docker tag ctf-platform:${{ github.sha }} ctf-platform:latest
        # Push to registry
    
    - name: Deploy to production
      run: |
        # Deploy commands
        echo "Deploying to production..."
```

## 性能优化

### 构建优化

#### Vite 配置优化

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    // 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['antd'],
          utils: ['lodash', 'dayjs'],
        },
      },
    },
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 生成 source map
    sourcemap: false,
  },
  // 开发服务器配置
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
```

### 缓存策略

#### 浏览器缓存

```nginx
# 静态资源长期缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Vary Accept-Encoding;
}

# HTML 文件不缓存
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
    add_header Pragma "no-cache";
}
```

## 监控和日志

### 应用监控

#### 错误监控

```typescript
// src/utils/monitoring.ts
class ErrorMonitor {
  static init() {
    window.addEventListener('error', this.handleError)
    window.addEventListener('unhandledrejection', this.handlePromiseRejection)
  }

  static handleError(event: ErrorEvent) {
    console.error('Global error:', event.error)
    // 发送到监控服务
    this.sendToMonitoring({
      type: 'error',
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
    })
  }

  static handlePromiseRejection(event: PromiseRejectionEvent) {
    console.error('Unhandled promise rejection:', event.reason)
    this.sendToMonitoring({
      type: 'promise-rejection',
      reason: event.reason,
    })
  }

  static sendToMonitoring(data: any) {
    // 发送到监控服务（如 Sentry、LogRocket 等）
    if (import.meta.env.PROD) {
      fetch('/api/monitoring/error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(console.error)
    }
  }
}

export default ErrorMonitor
```

### 性能监控

```typescript
// src/utils/performance.ts
class PerformanceMonitor {
  static init() {
    // 监控页面加载性能
    window.addEventListener('load', this.measurePageLoad)
    
    // 监控路由切换性能
    this.observeRouteChanges()
  }

  static measurePageLoad() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    const metrics = {
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
      dom: navigation.domContentLoadedEventEnd - navigation.responseEnd,
      load: navigation.loadEventEnd - navigation.loadEventStart,
      total: navigation.loadEventEnd - navigation.navigationStart,
    }

    console.log('Page load metrics:', metrics)
    this.sendMetrics('page-load', metrics)
  }

  static sendMetrics(type: string, data: any) {
    if (import.meta.env.PROD) {
      fetch('/api/monitoring/performance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data, timestamp: Date.now() }),
      }).catch(console.error)
    }
  }
}

export default PerformanceMonitor
```

## 安全配置

### HTTPS 配置

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL 证书
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # SSL 配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # 安全头
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:" always;
    
    # 应用配置
    root /var/www/ctf-platform/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# HTTP 重定向到 HTTPS
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

## 故障排除

### 常见问题

#### 构建失败

```bash
# 清理缓存
pnpm store prune
rm -rf node_modules
pnpm install

# 检查 Node.js 版本
node --version

# 检查内存使用
node --max-old-space-size=4096 node_modules/.bin/vite build
```

#### 部署后页面空白

1. 检查构建输出
2. 检查服务器配置
3. 检查浏览器控制台错误
4. 检查网络请求

#### 路由不工作

确保服务器配置了 SPA 回退：

```nginx
try_files $uri $uri/ /index.html;
```

### 日志收集

```bash
# Docker 日志
docker-compose logs -f frontend

# Nginx 日志
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# 系统日志
journalctl -u nginx -f
```

## 下一步

部署完成后，请参考：
- [🔧 开发指南](development-guide.md)
- [🧪 测试指南](testing-guide.md)
- [📊 监控指南](monitoring-guide.md)