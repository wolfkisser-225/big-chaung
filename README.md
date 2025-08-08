# 基于多模态行为特征的CTF动态Flag防作弊系统

一个创新的网络安全竞赛平台，通过采集参赛者的多模态生物特征（如键击动态、鼠标轨迹等）作为flag生成的熵源，结合区块链技术实现不可篡改的唯一flag生成与验证系统。

## 🚀 项目简介

本项目是基于多模态行为特征的CTF动态Flag防作弊系统，解决传统CTF平台存在的竞赛结果难以溯源、提交内容可能被篡改、抄袭等问题，保证竞赛的公开、公平、公正化。该平台面向网络安全教育机构、竞赛组织者和参赛学生，通过技术创新提升CTF竞赛的安全性与公平性。

## ✨ 核心功能特色

### 🔐 防作弊核心技术
- 🧬 **多模态行为特征采集**：实时采集键击节奏、鼠标轨迹等生物特征
- 🔗 **区块链验证**：基于区块链技术的不可篡改flag生成与验证
- 🎯 **动态Flag生成**：基于个人行为特征的唯一flag生成
- 🚨 **智能作弊检测**：实时行为分析和异常检测预警
- 📊 **行为模板匹配**：与历史行为模板比对验证身份

### 🏆 平台核心功能
- 🏆 **竞赛管理**：支持创建和管理多种类型的 CTF 竞赛
- 📝 **题目系统**：丰富的题目类型和分类管理
- 👥 **用户系统**：完整的用户注册、登录、个人中心功能
- 📊 **积分排行**：实时积分统计和排行榜展示
- 🔧 **管理后台**：强大的后台管理功能
- 📱 **响应式设计**：支持多种设备和屏幕尺寸
- 🎨 **现代化 UI**：基于 Tailwind CSS 的美观界面

## 🛠️ 技术栈

### 前端技术
- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **路由管理**：React Router
- **状态管理**：Zustand
- **图标库**：Lucide React
- **UI 组件**：自定义组件库

### 后端技术
- **后端语言**：Go (Golang)
- **Web框架**：Gin
- **数据库**：MySQL + Prisma ORM
- **邮件服务**：SMTP邮件发送
- **行为分析**：自研多模态特征提取算法

### 部署技术
- **容器化**：Docker + Docker Compose
- **反向代理**：Nginx
- **进程管理**：PM2
- **CI/CD**：GitHub Actions

## 📋 环境要求

详细的环境要求请查看：[环境要求文档](./docs/environment-requirements.md)

- Node.js >= 18.0.0
- pnpm >= 8.0.0（推荐）或 npm >= 9.0.0
- 现代浏览器（Chrome、Firefox、Safari、Edge）

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd big-chaung
```

### 2. 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 3. 启动开发服务器

```bash
# 使用 pnpm
pnpm dev

# 或使用 npm
npm run dev
```



## 📁 项目结构

```
big-chaung/
├── src/                           # 前端源代码目录
│   ├── components/                # 可复用组件
│   ├── pages/                    # 页面组件
│   ├── hooks/                    # 自定义 Hooks
│   ├── utils/                    # 工具函数
│   ├── types/                    # TypeScript 类型定义
│   ├── stores/                   # Zustand 状态管理
│   ├── router/                   # 路由配置
│   ├── generated/                # Prisma 生成的客户端代码
│   └── App.tsx                   # 应用入口组件
├── server/                       # 后端源代码目录
│   ├── internal/                 # 内部模块
│   │   ├── config/              # 配置管理
│   │   ├── database/            # 数据库连接
│   │   ├── handlers/            # HTTP 处理器
│   │   ├── models/              # 数据模型
│   │   ├── routes/              # 路由定义
│   │   └── services/            # 业务逻辑服务
│   ├── main.go                  # 后端入口文件
│   ├── go.mod                   # Go 模块定义
│   └── go.sum                   # Go 依赖锁定
├── prisma/                      # 数据库配置
│   └── schema.prisma            # 数据库模式定义
├── docs/                        # 项目文档
│   ├── database-design.md       # 数据库设计文档
│   ├── deployment-guide.md      # 部署指南
│   ├── development-guide.md     # 开发指南
│   ├── collaboration-guide.md   # 协作指南
│   └── testing-guide.md         # 测试指南
├── public/                      # 静态资源
├── .env                         # 环境变量配置
├── docker-compose.yml           # Docker 编排配置
├── Dockerfile                   # Docker 镜像构建
├── package.json                 # 前端项目配置
├── 基于多模态行为特征的CTF动态Flag防作弊系统-申报书-喻钧-刘登超.md  # 项目申报书
└── README.md                    # 项目说明
```

## 📖 文档导航

- [环境要求](./docs/environment-requirements.md) - 详细的环境配置要求
- [部署指南](./docs/deployment-guide.md) - 生产环境部署说明
- [开发指南](./docs/development-guide.md) - 开发规范和最佳实践
- [多人协作指南](./docs/collaboration-guide.md) - Git分支管理和团队协作流程
- [数据库设计](./docs/database-design.md) - 完整的数据库结构设计
- [未来功能架构](./docs/future-features-architecture.md) - 后续功能拓展规划
- [测试指南](./docs/testing-guide.md) - 测试策略和方法
- [贡献指南](./docs/contributing.md) - 如何参与项目贡献

## 🔧 开发命令

### 前端开发命令
```bash
# 启动前端开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm type-check
```

### 后端开发命令
```bash
# 启动后端服务器
cd server
go run main.go

# 构建后端可执行文件
go build -o ctf-platform main.go

# 运行测试
go test ./...

# 安装依赖
go mod tidy
```

### 数据库命令
```bash
# 生成 Prisma 客户端
npx prisma generate

# 数据库迁移
npx prisma db push

# 查看数据库
npx prisma studio
```

### Docker 命令
```bash
# 构建并启动所有服务
docker-compose up -d

# 停止所有服务
docker-compose down

# 查看服务日志
docker-compose logs -f

# 重新构建镜像
docker-compose build
```

## 🌟 主要功能模块

### 用户系统
- 用户注册和登录
- 个人资料管理
- 技能标签和成就系统
- 个人统计数据

### 竞赛系统
- 竞赛创建和管理
- 实时排行榜
- 竞赛时间控制
- 参赛记录管理

### 题目系统
- 多种题目类型支持
- 题目分类和标签
- 难度等级管理
- Flag 提交验证

### 管理后台
- 用户管理
- 竞赛管理
- 题目管理
- 系统设置

## 🔮 未来规划

- **多模态行为识别**：基于用户行为特征的安全验证
- **区块链验证**：利用区块链技术确保竞赛公平性
- **动态 Flag 生成**：个性化和时间敏感的 Flag 系统
- **AI 辅助出题**：智能题目生成和难度评估

详细的未来功能规划请查看：[未来功能架构文档](./docs/future-features-architecture.md)

## 👥 多人协作

本项目采用基于Git分支的协作开发模式，支持多人同时开发不同功能模块。

### 🌳 分支管理策略

- **主分支（main）**：项目负责人管理，存储生产就绪代码
- **开发分支（develop）**：集成分支，用于功能集成和测试
- **功能分支（feature/*）**：每个开发者使用独立分支开发功能
- **修复分支（hotfix/*）**：紧急修复生产环境问题

### 👨‍💻 团队角色

#### 项目负责人
- 管理主分支和发布流程
- 审查和合并Pull Request
- 制定开发计划和里程碑
- 解决合并冲突和技术难题

#### 功能开发者
- 在个人功能分支上开发
- 遵循代码规范和提交规范
- 及时同步主分支更新
- 提交Pull Request进行代码审查

### 🔄 协作流程

1. **创建功能分支**：从develop分支创建个人功能分支
2. **功能开发**：在功能分支上进行开发和测试
3. **同步更新**：定期合并develop分支的最新更改
4. **提交审查**：创建Pull Request请求代码审查
5. **合并集成**：审查通过后合并到develop分支
6. **发布部署**：项目负责人将稳定版本合并到main分支

### 📝 提交规范

```bash
# 功能开发
git commit -m "feat(模块): 添加新功能描述"

# Bug修复
git commit -m "fix(模块): 修复具体问题"

# 文档更新
git commit -m "docs: 更新文档内容"
```

### 🚀 快速开始协作

```bash
# 1. 克隆项目
git clone https://github.com/wolfkisser-225/big-chaung.git
cd big-chaung

# 2. 切换到开发分支
git checkout develop
git pull origin develop

# 3. 创建个人功能分支
git checkout -b feature/yourname-feature-name

# 4. 开发完成后推送
git add .
git commit -m "feat: 你的功能描述"
git push -u origin feature/yourname-feature-name

# 5. 在GitHub上创建Pull Request
```

详细的协作指南请查看：[多人协作指南](./docs/collaboration-guide.md)

## 🤝 贡献指南

我们欢迎所有形式的贡献！请查看 [贡献指南](./docs/contributing.md) 了解如何参与项目开发。

## 📄 许可证

本项目采用 MIT 许可证。详情请查看 [LICENSE](./LICENSE) 文件。

## 📞 联系我们

如有问题或建议，请通过以下方式联系我们：

- 提交 Issue
- 发送邮件
- 加入讨论群

---

**注意**：本项目目前为前端演示版本，后端功能正在开发中。完整的后端实现请参考 [开发计划文档](./docs/04-future-development-plan.md)。
