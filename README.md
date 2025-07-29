# CTF 竞赛平台

一个现代化的 CTF（Capture The Flag）网络安全竞赛平台，基于 React + TypeScript + Vite 构建。

## 🚀 项目简介

本项目是一个功能完整的 CTF 竞赛平台，提供了完整的竞赛管理、题目管理、用户管理等功能。平台采用现代化的前端技术栈，具有良好的用户体验和可扩展性。

## ✨ 功能特色

- 🏆 **竞赛管理**：支持创建和管理多种类型的 CTF 竞赛
- 📝 **题目系统**：丰富的题目类型和分类管理
- 👥 **用户系统**：完整的用户注册、登录、个人中心功能
- 📊 **积分排行**：实时积分统计和排行榜展示
- 🔧 **管理后台**：强大的后台管理功能
- 📱 **响应式设计**：支持多种设备和屏幕尺寸
- 🎨 **现代化 UI**：基于 Tailwind CSS 的美观界面

## 🛠️ 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **路由管理**：React Router
- **状态管理**：Zustand
- **图标库**：Lucide React
- **UI 组件**：自定义组件库

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
├── src/                    # 源代码目录
│   ├── components/         # 可复用组件
│   ├── pages/             # 页面组件
│   ├── hooks/             # 自定义 Hooks
│   ├── utils/             # 工具函数
│   ├── types/             # TypeScript 类型定义
│   └── App.tsx            # 应用入口组件
├── docs/                  # 项目文档
│   ├── database-design.md         # 数据库设计文档
│   ├── future-features-architecture.md  # 未来功能架构
│   ├── deployment-guide.md        # 部署指南
│   └── development-guide.md       # 开发指南
├── public/                # 静态资源
├── package.json           # 项目配置
└── README.md             # 项目说明
```

## 📖 文档导航

- [环境要求](./docs/environment-requirements.md) - 详细的环境配置要求
- [部署指南](./docs/deployment-guide.md) - 生产环境部署说明
- [开发指南](./docs/development-guide.md) - 开发规范和最佳实践
- [数据库设计](./docs/database-design.md) - 完整的数据库结构设计
- [未来功能架构](./docs/future-features-architecture.md) - 后续功能拓展规划
- [测试指南](./docs/testing-guide.md) - 测试策略和方法
- [贡献指南](./docs/contributing.md) - 如何参与项目贡献

## 🔧 开发命令

```bash
# 启动开发服务器
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
