# 贡献指南

## 欢迎贡献

感谢您对 CTF 平台项目的关注！我们欢迎任何形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- ✨ 开发新功能
- 🧪 编写测试
- 🎨 改进 UI/UX 设计

## 开始之前

### 行为准则

参与本项目即表示您同意遵守我们的行为准则：

- **尊重他人**: 尊重所有参与者，无论其背景、经验水平或观点如何
- **建设性沟通**: 提供建设性的反馈，避免人身攻击或恶意评论
- **协作精神**: 以开放和协作的态度参与讨论和开发
- **学习态度**: 保持学习和成长的心态，帮助他人学习

### 技能要求

根据您想要贡献的领域，可能需要以下技能：

**前端开发**:
- React + TypeScript
- Tailwind CSS
- 现代前端工具链

**后端开发**（未来）:
- Node.js 或 Python
- 数据库设计
- API 设计

**文档**:
- Markdown 语法
- 技术写作能力

**测试**:
- 单元测试和集成测试
- E2E 测试

## 贡献流程

### 1. 准备工作

#### Fork 项目

1. 访问项目仓库
2. 点击右上角的 "Fork" 按钮
3. 将项目 Fork 到您的 GitHub 账户

#### 克隆代码

```bash
# 克隆您 Fork 的仓库
git clone https://github.com/YOUR_USERNAME/big-chaung.git
cd big-chaung

# 添加上游仓库
git remote add upstream https://github.com/ORIGINAL_OWNER/big-chaung.git

# 验证远程仓库
git remote -v
```

#### 环境配置

请参考 [环境需求文档](environment-requirements.md) 配置开发环境。

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行测试
pnpm test
```

### 2. 开发流程

#### 创建分支

```bash
# 确保在最新的 main 分支
git checkout main
git pull upstream main

# 创建新的功能分支
git checkout -b feature/your-feature-name

# 或者修复分支
git checkout -b fix/issue-description
```

#### 分支命名规范

- `feature/功能名称` - 新功能开发
- `fix/问题描述` - Bug 修复
- `docs/文档类型` - 文档更新
- `refactor/重构内容` - 代码重构
- `test/测试内容` - 测试相关
- `style/样式内容` - 样式调整

示例：
```bash
feature/user-profile-edit
fix/login-validation-error
docs/api-documentation
refactor/auth-hooks
test/challenge-component
style/responsive-layout
```

#### 开发规范

请遵循项目的 [开发指南](development-guide.md) 中的编码规范：

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 和 Prettier 配置
- 编写有意义的提交信息
- 为新功能编写测试
- 更新相关文档

#### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 格式
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**类型 (type)**:
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**示例**:
```bash
feat(auth): add user registration functionality
fix(ui): resolve responsive layout issue on mobile
docs(readme): update installation instructions
refactor(hooks): simplify useAuth implementation
test(components): add unit tests for UserProfile
style(layout): improve button spacing
chore(deps): update React to v18.2.0
```

### 3. 提交 Pull Request

#### 准备 PR

```bash
# 确保代码质量
pnpm lint
pnpm type-check
pnpm test
pnpm build

# 提交更改
git add .
git commit -m "feat(feature): add new functionality"

# 推送到您的 Fork
git push origin feature/your-feature-name
```

#### 创建 Pull Request

1. 访问您 Fork 的仓库页面
2. 点击 "Compare & pull request" 按钮
3. 填写 PR 模板（见下文）
4. 提交 Pull Request

#### PR 模板

```markdown
## 变更描述

简要描述此 PR 的变更内容和目的。

## 变更类型

- [ ] Bug 修复
- [ ] 新功能
- [ ] 文档更新
- [ ] 代码重构
- [ ] 性能优化
- [ ] 测试改进
- [ ] 其他（请说明）

## 测试

- [ ] 已添加单元测试
- [ ] 已添加集成测试
- [ ] 已进行手动测试
- [ ] 所有现有测试通过

## 检查清单

- [ ] 代码遵循项目规范
- [ ] 已更新相关文档
- [ ] 提交信息符合规范
- [ ] 已解决所有 lint 警告
- [ ] 已测试在不同浏览器中的兼容性

## 相关 Issue

关闭 #issue_number

## 截图（如适用）

如果是 UI 相关的变更，请提供截图。

## 额外说明

任何需要特别说明的内容。
```

### 4. 代码审查

#### 审查流程

1. **自动检查**: CI/CD 流水线会自动运行测试和代码质量检查
2. **人工审查**: 维护者会审查您的代码
3. **反馈处理**: 根据审查意见进行修改
4. **合并**: 审查通过后，代码将被合并到主分支

#### 审查标准

**功能性**:
- 功能是否按预期工作
- 是否处理了边界情况
- 错误处理是否完善

**代码质量**:
- 代码是否清晰易读
- 是否遵循项目规范
- 是否有适当的注释

**测试**:
- 是否有足够的测试覆盖
- 测试是否有意义
- 是否测试了边界情况

**性能**:
- 是否有性能问题
- 是否优化了关键路径
- 是否考虑了可扩展性

#### 处理审查反馈

```bash
# 根据反馈进行修改
git add .
git commit -m "fix: address review feedback"
git push origin feature/your-feature-name
```

## 贡献类型

### Bug 报告

#### 报告 Bug 前

1. 检查是否已有相同的 Issue
2. 确认这确实是一个 Bug
3. 收集必要的信息

#### Bug 报告模板

```markdown
## Bug 描述

简要描述遇到的问题。

## 重现步骤

1. 访问 '...'
2. 点击 '...'
3. 滚动到 '...'
4. 看到错误

## 期望行为

描述您期望发生的行为。

## 实际行为

描述实际发生的行为。

## 截图

如果适用，请添加截图来帮助解释问题。

## 环境信息

- 操作系统: [例如 Windows 11]
- 浏览器: [例如 Chrome 120.0]
- 设备: [例如 Desktop, iPhone 12]
- 版本: [例如 v1.0.0]

## 额外信息

添加任何其他有关问题的信息。
```

### 功能建议

#### 功能建议模板

```markdown
## 功能描述

简要描述您希望添加的功能。

## 问题背景

描述这个功能要解决的问题或改进的场景。

## 解决方案

描述您希望的解决方案。

## 替代方案

描述您考虑过的其他解决方案。

## 额外信息

添加任何其他有关功能请求的信息、截图或示例。
```

### 文档贡献

#### 文档类型

- **用户文档**: 面向最终用户的使用指南
- **开发文档**: 面向开发者的技术文档
- **API 文档**: 接口文档和示例
- **教程**: 分步骤的学习指南

#### 文档规范

- 使用清晰、简洁的语言
- 提供实际的代码示例
- 包含必要的截图或图表
- 保持文档的时效性
- 遵循 Markdown 语法规范

### 代码贡献

#### 开发环境

确保您的开发环境符合要求：

```bash
# 检查 Node.js 版本
node --version  # >= 18.0.0

# 检查包管理器
pnpm --version  # >= 8.0.0

# 安装依赖
pnpm install

# 运行开发服务器
pnpm dev
```

#### 代码质量

在提交代码前，请确保：

```bash
# 代码格式化
pnpm format

# 代码检查
pnpm lint

# 类型检查
pnpm type-check

# 运行测试
pnpm test

# 构建检查
pnpm build
```

#### 新功能开发

开发新功能时，请：

1. **设计先行**: 先设计 API 和组件接口
2. **测试驱动**: 先写测试，再写实现
3. **渐进开发**: 分步骤实现，每步都可测试
4. **文档同步**: 及时更新相关文档

#### 性能考虑

- 避免不必要的重新渲染
- 使用适当的缓存策略
- 优化包大小和加载时间
- 考虑移动设备性能

### 测试贡献

#### 测试类型

- **单元测试**: 测试单个函数或组件
- **集成测试**: 测试组件间的交互
- **E2E 测试**: 测试完整的用户流程

#### 测试规范

```typescript
// 好的测试示例
describe('UserProfile Component', () => {
  it('should display user name when user is provided', () => {
    const user = { name: 'John Doe', email: 'john@example.com' }
    render(<UserProfile user={user} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('should call onEdit when edit button is clicked', () => {
    const onEdit = vi.fn()
    const user = { name: 'John Doe', email: 'john@example.com' }
    render(<UserProfile user={user} onEdit={onEdit} />)
    
    fireEvent.click(screen.getByRole('button', { name: /编辑/i }))
    expect(onEdit).toHaveBeenCalledTimes(1)
  })
})
```

## 社区

### 沟通渠道

- **GitHub Issues**: 报告 Bug 和功能请求
- **GitHub Discussions**: 技术讨论和问答
- **Pull Requests**: 代码审查和讨论

### 获得帮助

如果您在贡献过程中遇到问题：

1. 查看现有的文档和 FAQ
2. 搜索相关的 Issues 和 Discussions
3. 创建新的 Discussion 或 Issue
4. 联系维护者

### 认可贡献者

我们会在以下方式认可贡献者：

- 在 README 中列出贡献者
- 在发布说明中感谢贡献者
- 为重要贡献者提供 Collaborator 权限

## 发布流程

### 版本规范

我们使用 [语义化版本](https://semver.org/lang/zh-CN/) 规范：

- **主版本号**: 不兼容的 API 修改
- **次版本号**: 向下兼容的功能性新增
- **修订号**: 向下兼容的问题修正

### 发布周期

- **主版本**: 根据重大功能发布
- **次版本**: 每月发布（如有新功能）
- **修订版本**: 根据需要发布（Bug 修复）

## 许可证

通过贡献代码，您同意您的贡献将在与项目相同的 [MIT 许可证](../LICENSE) 下发布。

## 常见问题

### Q: 我是新手，可以贡献吗？

A: 当然可以！我们欢迎所有水平的贡献者。您可以从简单的文档改进或 Bug 修复开始。

### Q: 我的 PR 被拒绝了，怎么办？

A: 不要气馁！仔细阅读审查意见，进行相应的修改。如果有疑问，可以在 PR 中讨论。

### Q: 我可以同时提交多个 PR 吗？

A: 可以，但建议每个 PR 只关注一个功能或修复，这样更容易审查和合并。

### Q: 如何跟上项目的最新进展？

A: 您可以 Watch 项目仓库，关注 Issues 和 Discussions，定期同步上游代码。

### Q: 我的功能建议没有回应，怎么办？

A: 维护者可能需要时间考虑。您可以在 Discussion 中进一步讨论，或者考虑自己实现并提交 PR。

## 致谢

感谢所有为项目做出贡献的开发者！您的贡献让这个项目变得更好。

---

**记住**: 贡献不仅仅是代码，文档、测试、Bug 报告、功能建议都是宝贵的贡献！