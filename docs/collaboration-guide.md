# 多人协作指南

本文档详细介绍了CTF平台项目的多人协作开发流程，包括Git分支管理、团队协作规范和最佳实践。

## 🌳 Git分支管理策略

### 分支结构

我们采用基于功能分支的Git工作流，主要包含以下分支类型：

#### 主分支（Main Branch）
- **分支名称**：`main`
- **负责人**：项目负责人
- **作用**：存储生产就绪的代码，所有发布版本都从此分支创建
- **保护规则**：只能通过Pull Request合并，需要代码审查

#### 开发分支（Development Branch）
- **分支名称**：`develop`
- **作用**：集成所有功能分支，作为下一个发布版本的预备分支
- **合并规则**：功能开发完成后合并到此分支进行集成测试

#### 功能分支（Feature Branches）
- **分支命名**：`feature/功能名称` 或 `feature/开发者姓名-功能名称`
- **示例**：
  - `feature/user-authentication`
  - `feature/zhangsan-leaderboard`
  - `feature/lisi-admin-panel`
- **作用**：每个团队成员在自己的功能分支上开发特定功能
- **生命周期**：功能开发完成并合并后删除

#### 修复分支（Hotfix Branches）
- **分支命名**：`hotfix/修复内容`
- **示例**：`hotfix/login-bug-fix`
- **作用**：紧急修复生产环境问题
- **合并目标**：同时合并到`main`和`develop`分支

## 👥 团队角色分工

### 项目负责人（Project Lead）
- **权限**：管理`main`分支，审查所有Pull Request
- **职责**：
  - 制定开发计划和里程碑
  - 审查和合并代码
  - 管理发布流程
  - 解决合并冲突
  - 维护项目文档

### 功能开发者（Feature Developers）
- **权限**：创建和管理自己的功能分支
- **职责**：
  - 在指定的功能分支上开发
  - 遵循代码规范和提交规范
  - 及时同步主分支更新
  - 编写功能文档和测试

### 测试工程师（QA Engineers）
- **权限**：访问`develop`分支进行测试
- **职责**：
  - 在`develop`分支上进行集成测试
  - 报告和跟踪bug
  - 验证修复结果

## 🎯 功能模块分工

为了提高开发效率和避免代码冲突，我们将CTF平台的功能模块分配给不同的团队成员负责开发。每个人专注于自己负责的模块，使用独立的功能分支进行开发。

### 模块分工表

| 开发者 | 负责模块 | 分支命名 | 主要功能 |
|--------|----------|----------|----------|
| **项目负责人** | 项目架构 & 核心组件 | `feature/lead-core` | 项目整体架构、路由配置、核心组件库 |
| **开发者A** | 用户认证系统 | `feature/dev-a-auth` | 登录、注册、用户权限管理 |
| **开发者B** | 比赛管理模块 | `feature/dev-b-contest` | 比赛创建、管理、参与功能 |
| **开发者C** | 题目系统 | `feature/dev-c-challenges` | 题目展示、提交、评分系统 |
| **开发者D** | 排行榜系统 | `feature/dev-d-leaderboard` | 积分统计、排名展示、数据分析 |
| **开发者E** | 个人中心 | `feature/dev-e-profile` | 用户资料、设置、个人统计 |
| **开发者F** | 管理后台 | `feature/dev-f-admin` | 用户管理、系统配置、数据管理 |

### 详细模块说明

#### 🏗️ 项目架构 & 核心组件（项目负责人）
**文件路径**：
- `src/router/` - 路由配置
- `src/components/Layout.tsx` - 布局组件
- `src/lib/` - 工具函数库
- `src/types/` - TypeScript类型定义

**主要职责**：
- 搭建项目基础架构
- 设计组件库和工具函数
- 配置路由和全局状态管理
- 制定代码规范和开发标准

#### 🔐 用户认证系统（开发者A）
**文件路径**：
- `src/pages/Login.tsx`
- `src/pages/Register.tsx`
- `src/hooks/useAuth.ts`
- `src/components/AuthGuard.tsx`

**主要功能**：
- 用户登录/注册界面
- JWT token管理
- 权限验证组件
- 用户状态管理

**分支操作示例**：
```bash
git checkout -b feature/dev-a-auth
# 开发认证相关功能
git commit -m "feat(auth): 实现用户登录功能"
```

#### 🏆 比赛管理模块（开发者B）
**文件路径**：
- `src/pages/Contest.tsx`
- `src/pages/ContestDetail.tsx`
- `src/components/ContestCard.tsx`
- `src/hooks/useContest.ts`

**主要功能**：
- 比赛列表展示
- 比赛详情页面
- 比赛报名功能
- 比赛状态管理

**分支操作示例**：
```bash
git checkout -b feature/dev-b-contest
# 开发比赛相关功能
git commit -m "feat(contest): 添加比赛列表和详情页"
```

#### 🎯 题目系统（开发者C）
**文件路径**：
- `src/pages/Training.tsx`
- `src/pages/ChallengeDetail.tsx`
- `src/components/ChallengeCard.tsx`
- `src/hooks/useChallenge.ts`

**主要功能**：
- 题目列表和分类
- 题目详情和提交
- Flag验证系统
- 解题记录管理

**分支操作示例**：
```bash
git checkout -b feature/dev-c-challenges
# 开发题目相关功能
git commit -m "feat(challenge): 实现题目提交和验证"
```

#### 📊 排行榜系统（开发者D）
**文件路径**：
- `src/pages/Leaderboard.tsx`
- `src/components/RankingTable.tsx`
- `src/hooks/useLeaderboard.ts`
- `src/components/StatisticsChart.tsx`

**主要功能**：
- 实时排行榜展示
- 积分统计和分析
- 数据可视化图表
- 排名变化趋势

**分支操作示例**：
```bash
git checkout -b feature/dev-d-leaderboard
# 开发排行榜相关功能
git commit -m "feat(leaderboard): 添加实时排行榜"
```

#### 👤 个人中心（开发者E）
**文件路径**：
- `src/pages/Profile.tsx`
- `src/components/UserInfo.tsx`
- `src/components/SkillChart.tsx`
- `src/hooks/useProfile.ts`

**主要功能**：
- 个人信息管理
- 解题历史记录
- 技能分析图表
- 个人设置配置

**分支操作示例**：
```bash
git checkout -b feature/dev-e-profile
# 开发个人中心功能
git commit -m "feat(profile): 完善用户个人信息页面"
```

#### ⚙️ 管理后台（开发者F）
**文件路径**：
- `src/pages/Admin.tsx`
- `src/pages/admin/` - 管理页面目录
- `src/components/AdminLayout.tsx`
- `src/hooks/useAdmin.ts`

**主要功能**：
- 用户管理界面
- 题目管理系统
- 比赛管理功能
- 系统配置面板

**分支操作示例**：
```bash
git checkout -b feature/dev-f-admin
# 开发管理后台功能
git commit -m "feat(admin): 实现用户管理功能"
```

### 🔄 模块协作流程

#### 1. 模块开发准备
```bash
# 每个开发者从develop分支创建自己的功能分支
git checkout develop
git pull origin develop
git checkout -b feature/dev-x-module-name
```

#### 2. 独立开发阶段
- 每个人在自己的分支上专注开发负责的模块
- 定期提交代码，保持提交历史清晰
- 遵循统一的代码规范和命名约定

#### 3. 模块集成测试
```bash
# 开发完成后，先同步develop分支
git checkout develop
git pull origin develop
git checkout feature/dev-x-module-name
git merge develop

# 解决冲突后推送
git push origin feature/dev-x-module-name
```

#### 4. 跨模块协作
当需要跨模块协作时：
- 在团队群组中讨论接口设计
- 创建共享的类型定义文件
- 通过Pull Request进行代码审查
- 及时同步相关模块的更新

### 📋 模块开发检查清单

每个模块开发完成前，请确保：

- [ ] 功能实现完整，符合需求文档
- [ ] 代码遵循项目规范
- [ ] 添加了必要的TypeScript类型定义
- [ ] 组件具有良好的响应式设计
- [ ] 错误处理和边界情况考虑充分
- [ ] 代码注释清晰，便于其他人理解
- [ ] 与其他模块的接口设计合理
- [ ] 本地测试通过，无明显bug

通过这种模块化的分工方式，我们可以实现并行开发，提高开发效率，同时减少代码冲突的可能性。

## 🔄 协作工作流程

### 1. 项目初始化

```bash
# 项目负责人创建主仓库
git clone https://github.com/wolfkisser-225/big-chaung.git
cd big-chaung

# 创建并推送develop分支
git checkout -b develop
git push -u origin develop
```

### 2. 团队成员加入项目

```bash
# 克隆项目
git clone https://github.com/wolfkisser-225/big-chaung.git
cd big-chaung

# 查看所有分支
git branch -a

# 切换到develop分支
git checkout develop
git pull origin develop
```

### 3. 功能开发流程

#### 步骤1：创建功能分支
```bash
# 从develop分支创建新的功能分支
git checkout develop
git pull origin develop
git checkout -b feature/zhangsan-user-profile
```

#### 步骤2：开发功能
```bash
# 进行代码开发
# 编辑文件...

# 提交代码（遵循提交规范）
git add .
git commit -m "feat: 添加用户个人资料编辑功能"

# 推送到远程分支
git push -u origin feature/zhangsan-user-profile
```

#### 步骤3：保持分支更新
```bash
# 定期同步develop分支的更新
git checkout develop
git pull origin develop
git checkout feature/zhangsan-user-profile
git merge develop

# 解决可能的冲突后推送
git push origin feature/zhangsan-user-profile
```

#### 步骤4：创建Pull Request
1. 在GitHub上创建Pull Request
2. 目标分支选择`develop`
3. 填写详细的PR描述
4. 请求代码审查
5. 等待项目负责人审查和合并

### 4. 代码审查流程

#### 项目负责人审查清单
- [ ] 代码符合项目规范
- [ ] 功能实现完整
- [ ] 没有明显的bug
- [ ] 代码注释充分
- [ ] 测试覆盖充分
- [ ] 没有合并冲突

#### 审查结果处理
- **通过**：合并到develop分支，删除功能分支
- **需要修改**：提出修改建议，开发者修改后重新提交
- **拒绝**：说明拒绝原因，开发者重新设计

### 5. 发布流程

```bash
# 项目负责人执行发布
# 1. 从develop创建release分支
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# 2. 进行最后的测试和bug修复
# 修复bug...
git commit -m "fix: 修复发布前的关键bug"

# 3. 合并到main分支
git checkout main
git pull origin main
git merge release/v1.0.0
git tag v1.0.0
git push origin main --tags

# 4. 合并回develop分支
git checkout develop
git merge release/v1.0.0
git push origin develop

# 5. 删除release分支
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

## 📝 提交规范

### 提交消息格式
```
<类型>(<范围>): <描述>

[可选的正文]

[可选的脚注]
```

### 提交类型
- `feat`: 新功能
- `fix`: bug修复
- `docs`: 文档更新
- `style`: 代码格式化（不影响功能）
- `refactor`: 代码重构
- `test`: 添加或修改测试
- `chore`: 构建过程或辅助工具的变动

### 提交示例
```bash
git commit -m "feat(auth): 添加用户登录功能"
git commit -m "fix(leaderboard): 修复排行榜排序错误"
git commit -m "docs(readme): 更新安装说明"
git commit -m "style(components): 统一组件代码格式"
```

## 🔧 常用Git命令

### 分支操作
```bash
# 查看所有分支
git branch -a

# 创建并切换到新分支
git checkout -b feature/new-feature

# 切换分支
git checkout branch-name

# 删除本地分支
git branch -d branch-name

# 删除远程分支
git push origin --delete branch-name
```

### 同步操作
```bash
# 拉取远程更新
git pull origin branch-name

# 推送到远程
git push origin branch-name

# 合并分支
git merge branch-name

# 变基操作（保持提交历史整洁）
git rebase develop
```

### 冲突解决
```bash
# 查看冲突文件
git status

# 手动解决冲突后
git add .
git commit -m "resolve: 解决合并冲突"

# 继续变基（如果在rebase过程中）
git rebase --continue
```

## 🚨 注意事项

### 禁止操作
- ❌ 直接在`main`分支上开发
- ❌ 强制推送到共享分支（`git push --force`）
- ❌ 合并未经审查的代码
- ❌ 提交大文件或敏感信息

### 最佳实践
- ✅ 经常提交，保持提交粒度适中
- ✅ 写清晰的提交消息
- ✅ 及时同步主分支更新
- ✅ 在PR中详细描述修改内容
- ✅ 主动进行代码审查

## 🛠️ 工具推荐

### Git GUI工具
- **SourceTree**：免费的Git图形界面工具
- **GitKraken**：功能强大的Git客户端
- **VS Code Git**：VS Code内置的Git功能

### 协作平台功能
- **GitHub Issues**：任务跟踪和bug报告
- **GitHub Projects**：项目管理和进度跟踪
- **GitHub Actions**：自动化CI/CD流程

## 📞 获取帮助

如果在协作过程中遇到问题：

1. **查看文档**：首先查看本指南和Git官方文档
2. **询问团队**：在团队群组中询问其他成员
3. **联系负责人**：复杂问题可直接联系项目负责人
4. **创建Issue**：在GitHub上创建Issue描述问题

## 📚 学习资源

- [Git官方文档](https://git-scm.com/doc)
- [GitHub Flow指南](https://guides.github.com/introduction/flow/)
- [Atlassian Git教程](https://www.atlassian.com/git/tutorials)
- [Pro Git书籍](https://git-scm.com/book)

---

通过遵循本协作指南，我们可以确保团队开发的高效性和代码质量，让每个人都能在项目中发挥最大价值！