#!/bin/sh
set -e

# 等待数据库启动
echo "Waiting for database to be ready..."
while ! nc -z mysql 3306; do
  sleep 1
done
echo "Database is ready!"

# 启动后端服务
echo "Starting backend service..."
/app/backend/main &
BACKEND_PID=$!

# 等待后端服务启动
echo "Waiting for backend service to be ready..."
while ! nc -z localhost 8080; do
  sleep 1
done
echo "Backend service is ready!"

# 启动 Nginx
echo "Starting Nginx..."
exec "$@"

# 清理函数
cleanup() {
    echo "Shutting down services..."
    kill $BACKEND_PID 2>/dev/null || true
    exit 0
}

# 捕获信号
trap cleanup SIGTERM SIGINT

# 等待
wait