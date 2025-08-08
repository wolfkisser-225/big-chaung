# 多阶段构建 Dockerfile
# 阶段1: 构建前端
FROM node:18-alpine AS frontend-builder

WORKDIR /app

# 复制前端依赖文件
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm 并安装依赖
RUN npm install -g pnpm && pnpm install

# 复制前端源代码
COPY . .

# 生成 Prisma 客户端
RUN npx prisma generate

# 构建前端
RUN pnpm build

# 阶段2: 构建后端
FROM golang:1.21-alpine AS backend-builder

WORKDIR /app

# 安装必要的包
RUN apk add --no-cache git

# 复制 Go 模块文件
COPY server/go.mod server/go.sum ./

# 下载依赖
RUN go mod download

# 复制后端源代码
COPY server/ .

# 构建后端可执行文件
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# 阶段3: 生产镜像
FROM nginx:alpine

# 安装必要的包
RUN apk add --no-cache ca-certificates tzdata

# 设置时区
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone

# 创建应用目录
RUN mkdir -p /app/backend

# 从构建阶段复制文件
COPY --from=frontend-builder /app/dist /usr/share/nginx/html
COPY --from=backend-builder /app/main /app/backend/

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

# 复制启动脚本
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# 暴露端口
EXPOSE 80 8080

# 启动脚本
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]