# 邮件服务配置说明

## 问题描述
验证码发送失败是因为邮件服务配置为空。需要配置SMTP邮件服务才能正常发送验证码。

## 解决方案

### 1. 使用Gmail配置（推荐）

1. **开启两步验证**：
   - 登录Gmail账户
   - 进入「管理您的Google账户」
   - 选择「安全性」
   - 开启「两步验证」

2. **生成应用专用密码**：
   - 在「安全性」页面中找到「应用专用密码」
   - 选择「邮件」和「Windows计算机」
   - 生成16位应用专用密码

3. **更新.env文件**：
```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"  # 替换为你的Gmail地址
SMTP_PASS="your-app-password"      # 替换为生成的应用专用密码
SMTP_FROM="your-email@gmail.com"  # 替换为你的Gmail地址
```

### 2. 使用其他邮件服务

#### QQ邮箱
**SMTP配置**：
```env
SMTP_HOST="smtp.qq.com"
SMTP_PORT=587
SMTP_USER="your-email@qq.com"
SMTP_PASS="your-authorization-code"  # QQ邮箱授权码
SMTP_FROM="your-email@qq.com"
```

**获取授权码步骤**：
1. 登录QQ邮箱网页版
2. 点击「设置」→「账户」
3. 找到「POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务」
4. 开启「POP3/SMTP服务」或「IMAP/SMTP服务」
5. 按照提示发送短信获取授权码
6. 将获取的授权码作为SMTP_PASS使用

#### 163邮箱
**SMTP配置**：
```env
SMTP_HOST="smtp.163.com"
SMTP_PORT=587
SMTP_USER="your-email@163.com"
SMTP_PASS="your-authorization-code"  # 163邮箱授权码
SMTP_FROM="your-email@163.com"
```

**获取授权码步骤**：
1. 登录163邮箱网页版
2. 点击「设置」→「POP3/SMTP/IMAP」
3. 开启「POP3/SMTP服务」或「IMAP/SMTP服务」
4. 点击「客户端授权密码」
5. 按照提示发送短信验证
6. 设置授权密码（16位字符）
7. 将设置的授权密码作为SMTP_PASS使用

#### 126邮箱
**SMTP配置**：
```env
SMTP_HOST="smtp.126.com"
SMTP_PORT=587
SMTP_USER="your-email@126.com"
SMTP_PASS="your-authorization-code"  # 126邮箱授权码
SMTP_FROM="your-email@126.com"
```

**获取授权码步骤**：
1. 登录126邮箱网页版
2. 点击「设置」→「POP3/SMTP/IMAP」
3. 开启「POP3/SMTP服务」或「IMAP/SMTP服务」
4. 点击「客户端授权密码」
5. 按照提示发送短信验证
6. 设置授权密码
7. 将设置的授权密码作为SMTP_PASS使用

#### Outlook/Hotmail
**SMTP配置**：
```env
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT=587
SMTP_USER="your-email@outlook.com"  # 或 @hotmail.com
SMTP_PASS="your-app-password"       # 应用专用密码
SMTP_FROM="your-email@outlook.com"
```

**获取应用专用密码步骤**：
1. 登录Microsoft账户安全页面
2. 开启「两步验证」
3. 选择「应用密码」
4. 创建新的应用密码
5. 将生成的密码作为SMTP_PASS使用

#### 企业邮箱（腾讯企业邮箱）
**SMTP配置**：
```env
SMTP_HOST="smtp.exmail.qq.com"
SMTP_PORT=587
SMTP_USER="your-email@yourdomain.com"
SMTP_PASS="your-password"  # 邮箱登录密码
SMTP_FROM="your-email@yourdomain.com"
```

### 3. 重启服务
配置完成后，需要重启后端服务器：
1. 在终端中按 `Ctrl+C` 停止当前服务
2. 重新运行 `go run main.go`

## 测试验证
1. 打开前端页面
2. 尝试注册新用户
3. 点击「发送验证码」按钮
4. 检查邮箱是否收到验证码

## 注意事项
- 确保邮箱账户已开启SMTP服务
- 使用应用专用密码而不是登录密码
- 检查防火墙是否阻止了SMTP连接
- 某些邮件服务商可能需要额外的安全设置

## 常见问题解决

### 1. 连接超时或拒绝连接
**可能原因**：
- 防火墙阻止SMTP端口
- 网络环境限制（如校园网、企业网）
- SMTP服务器地址或端口错误

**解决方案**：
- 检查防火墙设置，允许587端口
- 尝试使用465端口（SSL）
- 联系网络管理员确认SMTP访问权限

### 2. 认证失败
**可能原因**：
- 授权码/应用专用密码错误
- 邮箱未开启SMTP服务
- 用户名格式错误

**解决方案**：
- 重新生成授权码/应用专用密码
- 确认邮箱已开启POP3/SMTP服务
- 检查用户名是否为完整邮箱地址

### 3. 邮件发送成功但收不到
**可能原因**：
- 邮件被归类为垃圾邮件
- 收件人邮箱设置问题
- 发件人域名信誉问题

**解决方案**：
- 检查垃圾邮件文件夹
- 将发件人添加到白名单
- 使用知名邮件服务商发送

### 4. SSL/TLS错误
**可能原因**：
- 证书验证失败
- 加密协议不匹配

**解决方案**：
- 尝试不同的端口（587/465/25）
- 检查SMTP服务器是否支持STARTTLS

## 邮件服务商对比

| 服务商 | 稳定性 | 配置难度 | 发送限制 | 推荐指数 |
|--------|--------|----------|----------|----------|
| Gmail | ⭐⭐⭐⭐⭐ | 中等 | 500封/天 | ⭐⭐⭐⭐⭐ |
| QQ邮箱 | ⭐⭐⭐⭐ | 简单 | 50封/天 | ⭐⭐⭐⭐ |
| 163邮箱 | ⭐⭐⭐⭐ | 简单 | 50封/天 | ⭐⭐⭐⭐ |
| 126邮箱 | ⭐⭐⭐ | 简单 | 50封/天 | ⭐⭐⭐ |
| Outlook | ⭐⭐⭐⭐ | 中等 | 300封/天 | ⭐⭐⭐⭐ |
| 企业邮箱 | ⭐⭐⭐⭐⭐ | 简单 | 根据套餐 | ⭐⭐⭐⭐⭐ |

## 开发模式
如果只是测试功能，邮件服务配置为空时，验证码会在后端控制台打印，可以从日志中获取验证码进行测试。

## 邮件测试分支
邮件相关的测试代码已移动到 `email_test` 分支，包括：
- `server/email_diagnosis.go` - 邮件诊断工具
- `server/test_email.go` - 基础邮件测试
- `server/test_email_gomail.go` - Gomail库测试

切换到测试分支：
```bash
git checkout email_test
```