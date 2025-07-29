# 开发指南

## 概述

本指南为 CTF 平台的开发者提供详细的开发规范、最佳实践和工作流程。

## 项目架构

### 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI 组件库**: Ant Design
- **样式框架**: Tailwind CSS
- **状态管理**: Zustand
- **路由管理**: React Router DOM
- **图表库**: Recharts
- **图标库**: Lucide React
- **代码规范**: ESLint + Prettier

### 目录结构

```
src/
├── components/          # 可复用组件
│   ├── ui/             # 基础 UI 组件
│   ├── layout/         # 布局组件
│   └── business/       # 业务组件
├── pages/              # 页面组件
│   ├── auth/          # 认证相关页面
│   ├── contest/       # 比赛相关页面
│   ├── training/      # 训练相关页面
│   └── admin/         # 管理后台页面
├── hooks/              # 自定义 Hooks
├── stores/             # Zustand 状态管理
├── types/              # TypeScript 类型定义
├── utils/              # 工具函数
├── lib/                # 第三方库配置
├── router/             # 路由配置
├── assets/             # 静态资源
└── styles/             # 全局样式
```

## 开发规范

### 命名规范

#### 文件命名

```typescript
// 组件文件 - PascalCase
UserProfile.tsx
ChallengeCard.tsx
ContestLeaderboard.tsx

// Hook 文件 - camelCase with use prefix
useAuth.ts
useWebSocket.ts
useLocalStorage.ts

// 工具文件 - camelCase
formatDate.ts
validateEmail.ts
api.ts

// 类型文件 - camelCase
user.types.ts
contest.types.ts
api.types.ts

// 常量文件 - camelCase
config.ts
constants.ts
routes.ts
```

#### 变量命名

```typescript
// 变量和函数 - camelCase
const userName = 'john_doe'
const isLoggedIn = true
const getUserInfo = () => {}

// 常量 - SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'
const MAX_FILE_SIZE = 1024 * 1024

// 组件 - PascalCase
const UserProfile = () => {}
const ChallengeList = () => {}

// 类型和接口 - PascalCase
interface User {
  id: string
  name: string
}

type ContestStatus = 'upcoming' | 'active' | 'ended'
```

### 组件开发规范

#### 组件结构

```typescript
// UserProfile.tsx
import React from 'react'
import { Button } from 'antd'
import { User, Settings } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { formatDate } from '@/utils/formatDate'
import type { UserProfileProps } from './UserProfile.types'

/**
 * 用户资料组件
 * @param user - 用户信息
 * @param onEdit - 编辑回调
 */
const UserProfile: React.FC<UserProfileProps> = ({ 
  user, 
  onEdit,
  className = '' 
}) => {
  // Hooks
  const { isOwner } = useAuth()
  
  // State
  const [isEditing, setIsEditing] = React.useState(false)
  
  // Handlers
  const handleEdit = () => {
    setIsEditing(true)
    onEdit?.()
  }
  
  // Render helpers
  const renderUserInfo = () => (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  )
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <User className="w-8 h-8 text-blue-500" />
          {renderUserInfo()}
        </div>
        
        {isOwner && (
          <Button 
            icon={<Settings className="w-4 h-4" />}
            onClick={handleEdit}
            type="primary"
          >
            编辑
          </Button>
        )}
      </div>
      
      <div className="text-sm text-gray-500">
        注册时间: {formatDate(user.createdAt)}
      </div>
    </div>
  )
}

export default UserProfile
```

#### 组件类型定义

```typescript
// UserProfile.types.ts
export interface UserProfileProps {
  user: {
    id: string
    name: string
    email: string
    createdAt: string
  }
  onEdit?: () => void
  className?: string
}
```

### Hook 开发规范

#### 自定义 Hook 示例

```typescript
// useAuth.ts
import { useState, useEffect } from 'react'
import { useAuthStore } from '@/stores/authStore'
import type { User, LoginCredentials } from '@/types/auth.types'

interface UseAuthReturn {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  refreshToken: () => Promise<void>
}

/**
 * 认证相关的 Hook
 */
export const useAuth = (): UseAuthReturn => {
  const { user, setUser, clearUser } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)
  
  const isAuthenticated = !!user
  
  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      })
      
      if (!response.ok) {
        throw new Error('登录失败')
      }
      
      const { user, token } = await response.json()
      localStorage.setItem('token', token)
      setUser(user)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  
  const logout = () => {
    localStorage.removeItem('token')
    clearUser()
  }
  
  const refreshToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return
    
    try {
      const response = await fetch('/api/auth/refresh', {
        headers: { Authorization: `Bearer ${token}` },
      })
      
      if (response.ok) {
        const { user, token: newToken } = await response.json()
        localStorage.setItem('token', newToken)
        setUser(user)
      } else {
        logout()
      }
    } catch (error) {
      console.error('Token refresh error:', error)
      logout()
    }
  }
  
  // 自动刷新 token
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      refreshToken()
    }
  }, [])
  
  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    refreshToken,
  }
}
```

### 状态管理规范

#### Zustand Store 示例

```typescript
// authStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types/auth.types'

interface AuthState {
  user: User | null
  isInitialized: boolean
}

interface AuthActions {
  setUser: (user: User) => void
  clearUser: () => void
  updateUser: (updates: Partial<User>) => void
  setInitialized: (initialized: boolean) => void
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()()
  persist(
    (set, get) => ({
      // State
      user: null,
      isInitialized: false,
      
      // Actions
      setUser: (user) => set({ user }),
      
      clearUser: () => set({ user: null }),
      
      updateUser: (updates) => {
        const currentUser = get().user
        if (currentUser) {
          set({ user: { ...currentUser, ...updates } })
        }
      },
      
      setInitialized: (isInitialized) => set({ isInitialized }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
```

### 样式开发规范

#### Tailwind CSS 使用规范

```typescript
// 推荐的类名组织方式
const buttonClasses = {
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  },
  sizes: {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
}

// 使用 clsx 或 cn 工具函数组合类名
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: (string | undefined)[]) => {
  return twMerge(clsx(inputs))
}

// 组件中使用
const Button = ({ variant = 'primary', size = 'md', className, ...props }) => {
  return (
    <button
      className={cn(
        buttonClasses.base,
        buttonClasses.variants[variant],
        buttonClasses.sizes[size],
        className
      )}
      {...props}
    />
  )
}
```

#### 响应式设计

```typescript
// 移动优先的响应式设计
const ResponsiveGrid = () => {
  return (
    <div className="
      grid 
      grid-cols-1 
      gap-4 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-6
    ">
      {/* 内容 */}
    </div>
  )
}

// 断点说明
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### API 调用规范

#### API 工具函数

```typescript
// api.ts
class ApiClient {
  private baseURL: string
  
  constructor(baseURL: string) {
    this.baseURL = baseURL
  }
  
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const token = localStorage.getItem('token')
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }
    
    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }
  
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' })
  }
  
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }
  
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }
  
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }
}

export const api = new ApiClient(import.meta.env.VITE_API_BASE_URL || '/api')
```

#### API Hook 示例

```typescript
// useApi.ts
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'

interface UseApiOptions {
  immediate?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: Error) => void
}

export const useApi = <T>(
  endpoint: string,
  options: UseApiOptions = {}
) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  
  const { immediate = true, onSuccess, onError } = options
  
  const execute = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await api.get<T>(endpoint)
      setData(result)
      onSuccess?.(result)
    } catch (err) {
      const error = err as Error
      setError(error)
      onError?.(error)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [endpoint, immediate])
  
  return {
    data,
    loading,
    error,
    refetch: execute,
  }
}
```

### 错误处理规范

#### 错误边界组件

```typescript
// ErrorBoundary.tsx
import React from 'react'
import { Button, Result } from 'antd'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // 发送错误到监控服务
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="500"
          title="页面出错了"
          subTitle="抱歉，页面发生了错误。"
          extra={
            <Button 
              type="primary" 
              onClick={() => window.location.reload()}
            >
              刷新页面
            </Button>
          }
        />
      )
    }
    
    return this.props.children
  }
}

export default ErrorBoundary
```

### 测试规范

#### 组件测试示例

```typescript
// UserProfile.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import UserProfile from './UserProfile'

const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: '2023-01-01T00:00:00Z',
}

describe('UserProfile', () => {
  it('renders user information correctly', () => {
    render(<UserProfile user={mockUser} />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })
  
  it('calls onEdit when edit button is clicked', () => {
    const onEdit = vi.fn()
    render(<UserProfile user={mockUser} onEdit={onEdit} />)
    
    const editButton = screen.getByRole('button', { name: /编辑/i })
    fireEvent.click(editButton)
    
    expect(onEdit).toHaveBeenCalledTimes(1)
  })
})
```

#### Hook 测试示例

```typescript
// useAuth.test.ts
import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useAuth } from './useAuth'

// Mock fetch
global.fetch = vi.fn()

describe('useAuth', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
  })
  
  it('should login successfully', async () => {
    const mockResponse = {
      user: { id: '1', name: 'John' },
      token: 'mock-token',
    }
    
    ;(fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    })
    
    const { result } = renderHook(() => useAuth())
    
    await act(async () => {
      await result.current.login({
        email: 'john@example.com',
        password: 'password',
      })
    })
    
    expect(result.current.user).toEqual(mockResponse.user)
    expect(localStorage.getItem('token')).toBe('mock-token')
  })
})
```

## 开发工作流

### Git 工作流

#### 分支命名规范

```bash
# 功能分支
feature/user-authentication
feature/contest-management
feature/leaderboard

# 修复分支
fix/login-validation
fix/memory-leak

# 热修复分支
hotfix/security-patch
hotfix/critical-bug

# 发布分支
release/v1.0.0
release/v1.1.0
```

#### 提交信息规范

```bash
# 格式: <type>(<scope>): <description>

# 功能
feat(auth): add user login functionality
feat(contest): implement contest creation

# 修复
fix(api): resolve authentication token issue
fix(ui): correct responsive layout on mobile

# 文档
docs(readme): update installation instructions
docs(api): add endpoint documentation

# 样式
style(components): improve button hover effects
style(layout): adjust spacing and typography

# 重构
refactor(hooks): simplify useAuth implementation
refactor(utils): optimize date formatting functions

# 测试
test(auth): add unit tests for login flow
test(components): increase coverage for UserProfile

# 构建
build(deps): update React to v18.2.0
build(config): optimize Vite build settings
```

### 代码审查清单

#### 功能性检查
- [ ] 功能是否按预期工作
- [ ] 边界情况是否处理
- [ ] 错误处理是否完善
- [ ] 性能是否可接受

#### 代码质量检查
- [ ] 代码是否易读易懂
- [ ] 命名是否清晰准确
- [ ] 是否遵循项目规范
- [ ] 是否有重复代码

#### 安全性检查
- [ ] 输入验证是否充分
- [ ] 敏感信息是否泄露
- [ ] 权限控制是否正确
- [ ] XSS/CSRF 防护是否到位

#### 测试检查
- [ ] 是否有足够的测试覆盖
- [ ] 测试是否有意义
- [ ] 是否测试了边界情况
- [ ] 测试是否可维护

### 性能优化指南

#### 组件优化

```typescript
// 使用 React.memo 优化组件渲染
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  // 组件实现
}, (prevProps, nextProps) => {
  // 自定义比较函数
  return prevProps.data.id === nextProps.data.id
})

// 使用 useMemo 优化计算
const ProcessedData = ({ items }) => {
  const expensiveValue = useMemo(() => {
    return items.reduce((acc, item) => acc + item.value, 0)
  }, [items])
  
  return <div>{expensiveValue}</div>
}

// 使用 useCallback 优化函数
const ParentComponent = ({ items }) => {
  const handleItemClick = useCallback((id: string) => {
    // 处理点击
  }, [])
  
  return (
    <div>
      {items.map(item => (
        <ItemComponent 
          key={item.id} 
          item={item} 
          onClick={handleItemClick}
        />
      ))}
    </div>
  )
}
```

#### 代码分割

```typescript
// 路由级别的代码分割
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingSpinner from '@/components/LoadingSpinner'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ContestPage = lazy(() => import('@/pages/ContestPage'))
const AdminPage = lazy(() => import('@/pages/AdminPage'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contest" element={<ContestPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Suspense>
  )
}
```

## 调试技巧

### React DevTools

```typescript
// 在组件中添加调试信息
const DebugComponent = ({ data }) => {
  // 开发环境下的调试日志
  if (import.meta.env.DEV) {
    console.log('Component rendered with data:', data)
  }
  
  return <div>{/* 组件内容 */}</div>
}

// 使用 useDebugValue 为自定义 Hook 添加调试信息
const useCustomHook = (value) => {
  const [state, setState] = useState(value)
  
  // 在 React DevTools 中显示调试信息
  useDebugValue(state, state => `Custom Hook: ${state}`)
  
  return [state, setState]
}
```

### 性能分析

```typescript
// 使用 React Profiler 分析性能
import { Profiler } from 'react'

const onRenderCallback = (id, phase, actualDuration) => {
  console.log('Profiler:', { id, phase, actualDuration })
}

const App = () => {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <MainContent />
    </Profiler>
  )
}
```

## 部署前检查

### 构建检查

```bash
# 检查构建是否成功
pnpm build

# 检查构建产物大小
pnpm run analyze

# 本地预览构建结果
pnpm preview
```

### 代码质量检查

```bash
# 运行 ESLint
pnpm lint

# 运行 TypeScript 检查
pnpm type-check

# 运行测试
pnpm test

# 检查测试覆盖率
pnpm test:coverage
```

### 安全检查

```bash
# 检查依赖漏洞
npm audit

# 修复可修复的漏洞
npm audit fix

# 检查过期依赖
npx npm-check-updates
```

## 常见问题解决

### 开发环境问题

**问题**: 热重载不工作
```bash
# 解决方案
# 1. 检查 Vite 配置
# 2. 清理缓存
rm -rf node_modules/.vite
pnpm dev
```

**问题**: TypeScript 类型错误
```bash
# 解决方案
# 1. 重启 TypeScript 服务
# 2. 检查 tsconfig.json 配置
# 3. 更新类型定义
pnpm add -D @types/node
```

### 构建问题

**问题**: 构建内存不足
```bash
# 解决方案
node --max-old-space-size=4096 node_modules/.bin/vite build
```

**问题**: 构建产物过大
```typescript
// 解决方案：优化 Vite 配置
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          antd: ['antd'],
        },
      },
    },
  },
})
```

## 下一步

开发完成后，请参考：
- [🧪 测试指南](testing-guide.md)
- [🚀 部署指南](deployment-guide.md)
- [📊 性能优化指南](performance-guide.md)