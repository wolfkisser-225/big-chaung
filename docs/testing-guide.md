# 测试指南

## 概述

本指南提供 CTF 平台的完整测试策略，包括单元测试、集成测试、端到端测试的最佳实践。

## 测试策略

### 测试金字塔

```
    /\     E2E Tests (少量)
   /  \    - 关键用户流程
  /____\   - 跨系统集成
 
  /______\  Integration Tests (适量)
 /        \ - 组件集成
/__________\ - API 集成

/____________\ Unit Tests (大量)
              - 函数测试
              - 组件测试
              - Hook 测试
```

### 测试覆盖率目标

- **单元测试**: 80%+ 代码覆盖率
- **集成测试**: 覆盖主要业务流程
- **E2E 测试**: 覆盖关键用户路径

## 测试环境配置

### 依赖安装

```bash
# 测试框架和工具
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event

# 测试工具
pnpm add -D jsdom happy-dom @vitest/coverage-v8

# E2E 测试
pnpm add -D playwright @playwright/test

# Mock 工具
pnpm add -D msw
```

### Vitest 配置

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
      ],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
```

### 测试环境设置

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll, afterAll } from 'vitest'
import { server } from './mocks/server'

// 启动 MSW 服务器
beforeAll(() => server.listen())

// 每个测试后清理
afterEach(() => {
  cleanup()
  server.resetHandlers()
})

// 关闭 MSW 服务器
afterAll(() => server.close())

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
})

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
```

## 单元测试

### 组件测试

#### 基础组件测试

```typescript
// src/components/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Button from './Button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies correct variant styles', () => {
    render(<Button variant="primary">Primary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-blue-600')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('shows loading state', () => {
    render(<Button loading>Loading Button</Button>)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
```

#### 复杂组件测试

```typescript
// src/components/ChallengeCard/ChallengeCard.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import ChallengeCard from './ChallengeCard'
import { useAuth } from '@/hooks/useAuth'

// Mock hooks
vi.mock('@/hooks/useAuth')

const mockChallenge = {
  id: '1',
  title: 'Web Security Challenge',
  description: 'Find the hidden flag',
  difficulty: 'medium',
  category: 'web',
  points: 100,
  solved: false,
  solvedCount: 25,
}

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('ChallengeCard Component', () => {
  beforeEach(() => {
    vi.mocked(useAuth).mockReturnValue({
      user: { id: '1', name: 'Test User' },
      isAuthenticated: true,
    })
  })

  it('renders challenge information correctly', () => {
    renderWithRouter(<ChallengeCard challenge={mockChallenge} />)
    
    expect(screen.getByText('Web Security Challenge')).toBeInTheDocument()
    expect(screen.getByText('Find the hidden flag')).toBeInTheDocument()
    expect(screen.getByText('100 分')).toBeInTheDocument()
    expect(screen.getByText('25 人解决')).toBeInTheDocument()
  })

  it('shows solved status for solved challenges', () => {
    const solvedChallenge = { ...mockChallenge, solved: true }
    renderWithRouter(<ChallengeCard challenge={solvedChallenge} />)
    
    expect(screen.getByText('已解决')).toBeInTheDocument()
    expect(screen.getByTestId('solved-icon')).toBeInTheDocument()
  })

  it('navigates to challenge detail on click', () => {
    renderWithRouter(<ChallengeCard challenge={mockChallenge} />)
    
    const card = screen.getByTestId('challenge-card')
    fireEvent.click(card)
    
    expect(window.location.pathname).toBe(`/challenge/${mockChallenge.id}`)
  })

  it('shows login prompt for unauthenticated users', () => {
    vi.mocked(useAuth).mockReturnValue({
      user: null,
      isAuthenticated: false,
    })
    
    renderWithRouter(<ChallengeCard challenge={mockChallenge} />)
    
    const card = screen.getByTestId('challenge-card')
    fireEvent.click(card)
    
    expect(screen.getByText('请先登录')).toBeInTheDocument()
  })
})
```

### Hook 测试

```typescript
// src/hooks/useAuth.test.ts
import { renderHook, act, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { useAuth } from './useAuth'
import { useAuthStore } from '@/stores/authStore'

// Mock store
vi.mock('@/stores/authStore')

// Mock fetch
global.fetch = vi.fn()

describe('useAuth Hook', () => {
  const mockSetUser = vi.fn()
  const mockClearUser = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    
    vi.mocked(useAuthStore).mockReturnValue({
      user: null,
      setUser: mockSetUser,
      clearUser: mockClearUser,
    })
  })

  describe('login', () => {
    it('should login successfully with valid credentials', async () => {
      const mockResponse = {
        user: { id: '1', name: 'John Doe', email: 'john@example.com' },
        token: 'mock-jwt-token',
      }

      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response)

      const { result } = renderHook(() => useAuth())

      await act(async () => {
        await result.current.login({
          email: 'john@example.com',
          password: 'password123',
        })
      })

      expect(fetch).toHaveBeenCalledWith('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'john@example.com',
          password: 'password123',
        }),
      })

      expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mock-jwt-token')
      expect(mockSetUser).toHaveBeenCalledWith(mockResponse.user)
    })

    it('should handle login failure', async () => {
      vi.mocked(fetch).mockResolvedValueOnce({
        ok: false,
        status: 401,
      } as Response)

      const { result } = renderHook(() => useAuth())

      await expect(
        act(async () => {
          await result.current.login({
            email: 'wrong@example.com',
            password: 'wrongpassword',
          })
        })
      ).rejects.toThrow('登录失败')

      expect(mockSetUser).not.toHaveBeenCalled()
      expect(localStorage.setItem).not.toHaveBeenCalled()
    })
  })

  describe('logout', () => {
    it('should clear user data and token', () => {
      localStorage.setItem('token', 'existing-token')
      
      const { result } = renderHook(() => useAuth())
      
      act(() => {
        result.current.logout()
      })
      
      expect(localStorage.removeItem).toHaveBeenCalledWith('token')
      expect(mockClearUser).toHaveBeenCalled()
    })
  })

  describe('token refresh', () => {
    it('should refresh token automatically on mount', async () => {
      localStorage.setItem('token', 'existing-token')
      
      const mockResponse = {
        user: { id: '1', name: 'John Doe' },
        token: 'new-token',
      }

      vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response)

      renderHook(() => useAuth())

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/auth/refresh', {
          headers: { Authorization: 'Bearer existing-token' },
        })
      })

      expect(localStorage.setItem).toHaveBeenCalledWith('token', 'new-token')
      expect(mockSetUser).toHaveBeenCalledWith(mockResponse.user)
    })
  })
})
```

### 工具函数测试

```typescript
// src/utils/formatDate.test.ts
import { formatDate, formatRelativeTime, isValidDate } from './formatDate'

describe('formatDate utilities', () => {
  describe('formatDate', () => {
    it('formats date correctly with default format', () => {
      const date = new Date('2023-12-25T10:30:00Z')
      expect(formatDate(date)).toBe('2023-12-25 10:30:00')
    })

    it('formats date with custom format', () => {
      const date = new Date('2023-12-25T10:30:00Z')
      expect(formatDate(date, 'YYYY年MM月DD日')).toBe('2023年12月25日')
    })

    it('handles string input', () => {
      expect(formatDate('2023-12-25T10:30:00Z')).toBe('2023-12-25 10:30:00')
    })

    it('returns empty string for invalid date', () => {
      expect(formatDate('invalid-date')).toBe('')
      expect(formatDate(null)).toBe('')
      expect(formatDate(undefined)).toBe('')
    })
  })

  describe('formatRelativeTime', () => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2023-12-25T12:00:00Z'))
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('formats relative time correctly', () => {
      const oneHourAgo = new Date('2023-12-25T11:00:00Z')
      expect(formatRelativeTime(oneHourAgo)).toBe('1小时前')

      const tomorrow = new Date('2023-12-26T12:00:00Z')
      expect(formatRelativeTime(tomorrow)).toBe('1天后')
    })
  })

  describe('isValidDate', () => {
    it('validates dates correctly', () => {
      expect(isValidDate(new Date())).toBe(true)
      expect(isValidDate('2023-12-25')).toBe(true)
      expect(isValidDate('invalid-date')).toBe(false)
      expect(isValidDate(null)).toBe(false)
    })
  })
})
```

## 集成测试

### API 集成测试

```typescript
// src/test/mocks/handlers.ts
import { rest } from 'msw'

export const handlers = [
  // 认证相关
  rest.post('/api/auth/login', (req, res, ctx) => {
    const { email, password } = req.body as any
    
    if (email === 'test@example.com' && password === 'password123') {
      return res(
        ctx.json({
          user: {
            id: '1',
            name: 'Test User',
            email: 'test@example.com',
          },
          token: 'mock-jwt-token',
        })
      )
    }
    
    return res(ctx.status(401), ctx.json({ message: '登录失败' }))
  }),

  // 题目相关
  rest.get('/api/challenges', (req, res, ctx) => {
    return res(
      ctx.json({
        challenges: [
          {
            id: '1',
            title: 'Web Challenge',
            difficulty: 'easy',
            points: 100,
          },
          {
            id: '2',
            title: 'Crypto Challenge',
            difficulty: 'hard',
            points: 500,
          },
        ],
        total: 2,
      })
    )
  }),

  rest.post('/api/challenges/:id/submit', (req, res, ctx) => {
    const { id } = req.params
    const { flag } = req.body as any
    
    if (flag === 'correct_flag') {
      return res(
        ctx.json({
          success: true,
          message: '恭喜！Flag 正确',
          points: 100,
        })
      )
    }
    
    return res(
      ctx.json({
        success: false,
        message: 'Flag 错误，请重试',
      })
    )
  }),
]
```

```typescript
// src/test/mocks/server.ts
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

### 组件集成测试

```typescript
// src/pages/LoginPage/LoginPage.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'
import LoginPage from './LoginPage'
import { useAuth } from '@/hooks/useAuth'

vi.mock('@/hooks/useAuth')

const mockLogin = vi.fn()
const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

const renderLoginPage = () => {
  return render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  )
}

describe('LoginPage Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useAuth).mockReturnValue({
      login: mockLogin,
      isLoading: false,
      isAuthenticated: false,
    })
  })

  it('should complete login flow successfully', async () => {
    const user = userEvent.setup()
    renderLoginPage()

    // 填写表单
    await user.type(screen.getByLabelText(/邮箱/i), 'test@example.com')
    await user.type(screen.getByLabelText(/密码/i), 'password123')

    // 提交表单
    await user.click(screen.getByRole('button', { name: /登录/i }))

    // 验证登录函数被调用
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    })
  })

  it('should show validation errors for invalid input', async () => {
    const user = userEvent.setup()
    renderLoginPage()

    // 提交空表单
    await user.click(screen.getByRole('button', { name: /登录/i }))

    // 验证错误信息
    await waitFor(() => {
      expect(screen.getByText('请输入邮箱')).toBeInTheDocument()
      expect(screen.getByText('请输入密码')).toBeInTheDocument()
    })
  })

  it('should handle login failure', async () => {
    const user = userEvent.setup()
    mockLogin.mockRejectedValueOnce(new Error('登录失败'))
    
    renderLoginPage()

    await user.type(screen.getByLabelText(/邮箱/i), 'wrong@example.com')
    await user.type(screen.getByLabelText(/密码/i), 'wrongpassword')
    await user.click(screen.getByRole('button', { name: /登录/i }))

    await waitFor(() => {
      expect(screen.getByText('登录失败')).toBeInTheDocument()
    })
  })

  it('should redirect after successful login', async () => {
    vi.mocked(useAuth).mockReturnValue({
      login: mockLogin,
      isLoading: false,
      isAuthenticated: true,
    })

    renderLoginPage()

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
    })
  })
})
```

## E2E 测试

### Playwright 配置

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
})
```

### E2E 测试示例

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should login and logout successfully', async ({ page }) => {
    // 访问登录页面
    await page.goto('/login')
    
    // 验证页面标题
    await expect(page).toHaveTitle(/CTF平台/)
    
    // 填写登录表单
    await page.fill('[data-testid="email-input"]', 'test@example.com')
    await page.fill('[data-testid="password-input"]', 'password123')
    
    // 点击登录按钮
    await page.click('[data-testid="login-button"]')
    
    // 验证登录成功，跳转到首页
    await expect(page).toHaveURL('/')
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible()
    
    // 退出登录
    await page.click('[data-testid="user-menu"]')
    await page.click('[data-testid="logout-button"]')
    
    // 验证退出成功
    await expect(page).toHaveURL('/login')
  })

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login')
    
    await page.fill('[data-testid="email-input"]', 'wrong@example.com')
    await page.fill('[data-testid="password-input"]', 'wrongpassword')
    await page.click('[data-testid="login-button"]')
    
    // 验证错误信息显示
    await expect(page.locator('[data-testid="error-message"]')).toContainText('登录失败')
  })
})
```

```typescript
// e2e/challenge.spec.ts
import { test, expect } from '@playwright/test'

// 登录助手函数
async function login(page) {
  await page.goto('/login')
  await page.fill('[data-testid="email-input"]', 'test@example.com')
  await page.fill('[data-testid="password-input"]', 'password123')
  await page.click('[data-testid="login-button"]')
  await expect(page).toHaveURL('/')
}

test.describe('Challenge Flow', () => {
  test.beforeEach(async ({ page }) => {
    await login(page)
  })

  test('should browse and attempt challenges', async ({ page }) => {
    // 访问训练场
    await page.click('[data-testid="training-nav"]')
    await expect(page).toHaveURL('/training')
    
    // 选择一个题目
    await page.click('[data-testid="challenge-card"]:first-child')
    
    // 验证题目详情页面
    await expect(page.locator('[data-testid="challenge-title"]')).toBeVisible()
    await expect(page.locator('[data-testid="challenge-description"]')).toBeVisible()
    
    // 提交错误的 Flag
    await page.fill('[data-testid="flag-input"]', 'wrong_flag')
    await page.click('[data-testid="submit-button"]')
    
    // 验证错误提示
    await expect(page.locator('[data-testid="error-message"]')).toContainText('Flag 错误')
    
    // 提交正确的 Flag
    await page.fill('[data-testid="flag-input"]', 'correct_flag')
    await page.click('[data-testid="submit-button"]')
    
    // 验证成功提示
    await expect(page.locator('[data-testid="success-message"]')).toContainText('恭喜')
  })

  test('should update leaderboard after solving', async ({ page }) => {
    // 解决一个题目后检查排行榜
    await page.goto('/leaderboard')
    
    // 验证用户在排行榜中
    await expect(page.locator('[data-testid="leaderboard-item"]').first()).toContainText('Test User')
  })
})
```

### 视觉回归测试

```typescript
// e2e/visual.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Visual Regression Tests', () => {
  test('homepage should look correct', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveScreenshot('homepage.png')
  })

  test('login page should look correct', async ({ page }) => {
    await page.goto('/login')
    await expect(page).toHaveScreenshot('login-page.png')
  })

  test('challenge page should look correct', async ({ page }) => {
    await page.goto('/training')
    await expect(page).toHaveScreenshot('training-page.png')
  })

  test('responsive design on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await expect(page).toHaveScreenshot('homepage-mobile.png')
  })
})
```

## 性能测试

### 性能测试示例

```typescript
// e2e/performance.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Performance Tests', () => {
  test('page load performance', async ({ page }) => {
    // 开始性能监控
    await page.goto('/', { waitUntil: 'networkidle' })
    
    // 获取性能指标
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
        loadComplete: navigation.loadEventEnd - navigation.navigationStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
      }
    })
    
    // 验证性能指标
    expect(performanceMetrics.domContentLoaded).toBeLessThan(2000) // 2秒内
    expect(performanceMetrics.loadComplete).toBeLessThan(3000) // 3秒内
    expect(performanceMetrics.firstContentfulPaint).toBeLessThan(1500) // 1.5秒内
  })

  test('bundle size check', async ({ page }) => {
    const response = await page.goto('/')
    const resources = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'))
        .map(entry => ({
          name: entry.name,
          size: (entry as any).transferSize,
        }))
    })
    
    const totalSize = resources.reduce((sum, resource) => sum + resource.size, 0)
    expect(totalSize).toBeLessThan(1024 * 1024) // 小于 1MB
  })
})
```

## 测试工具和辅助函数

### 测试工具函数

```typescript
// src/test/utils/test-utils.tsx
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// 自定义渲染函数
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        {children}
      </ConfigProvider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
```

### Mock 数据生成器

```typescript
// src/test/utils/mock-data.ts
import { faker } from '@faker-js/faker'

export const createMockUser = (overrides = {}) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  createdAt: faker.date.past().toISOString(),
  ...overrides,
})

export const createMockChallenge = (overrides = {}) => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  difficulty: faker.helpers.arrayElement(['easy', 'medium', 'hard']),
  category: faker.helpers.arrayElement(['web', 'crypto', 'pwn', 'reverse']),
  points: faker.number.int({ min: 50, max: 500 }),
  solved: faker.datatype.boolean(),
  solvedCount: faker.number.int({ min: 0, max: 100 }),
  createdAt: faker.date.past().toISOString(),
  ...overrides,
})

export const createMockContest = (overrides = {}) => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(4),
  description: faker.lorem.paragraph(),
  startTime: faker.date.future().toISOString(),
  endTime: faker.date.future().toISOString(),
  status: faker.helpers.arrayElement(['upcoming', 'active', 'ended']),
  participantCount: faker.number.int({ min: 10, max: 1000 }),
  ...overrides,
})
```

## 测试脚本

### package.json 脚本

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest --watch",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug",
    "test:all": "pnpm test:run && pnpm test:e2e"
  }
}
```

### CI/CD 测试流水线

```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Run unit tests
        run: pnpm test:run
      
      - name: Generate coverage report
        run: pnpm test:coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps
      
      - name: Run E2E tests
        run: pnpm test:e2e
      
      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/
```

## 测试最佳实践

### 测试原则

1. **AAA 模式**: Arrange（准备）、Act（执行）、Assert（断言）
2. **单一职责**: 每个测试只验证一个功能点
3. **独立性**: 测试之间不应相互依赖
4. **可重复性**: 测试结果应该是确定的
5. **快速反馈**: 测试应该快速执行

### 命名规范

```typescript
// 好的测试命名
describe('UserProfile Component', () => {
  it('should display user name when user is provided', () => {})
  it('should show edit button when user is owner', () => {})
  it('should call onEdit when edit button is clicked', () => {})
})

// 避免的命名
describe('UserProfile', () => {
  it('test1', () => {})
  it('should work', () => {})
  it('renders correctly', () => {}) // 太模糊
})
```

### 测试数据管理

```typescript
// 使用工厂函数创建测试数据
const createTestUser = (overrides = {}) => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides,
})

// 在测试中使用
it('should display user information', () => {
  const user = createTestUser({ name: 'John Doe' })
  render(<UserProfile user={user} />)
  expect(screen.getByText('John Doe')).toBeInTheDocument()
})
```

### 异步测试

```typescript
// 正确处理异步操作
it('should load user data on mount', async () => {
  render(<UserProfile userId="1" />)
  
  // 等待加载完成
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
  
  // 或者等待特定元素消失
  await waitForElementToBeRemoved(screen.getByTestId('loading-spinner'))
})
```

## 故障排除

### 常见问题

**问题**: 测试中 localStorage 不工作
```typescript
// 解决方案：在 setup.ts 中 mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
})
```

**问题**: 异步测试超时
```typescript
// 解决方案：增加超时时间或使用正确的等待方法
it('should load data', async () => {
  render(<Component />)
  
  // 使用 waitFor 而不是 setTimeout
  await waitFor(
    () => {
      expect(screen.getByText('Data loaded')).toBeInTheDocument()
    },
    { timeout: 5000 } // 增加超时时间
  )
})
```

**问题**: E2E 测试不稳定
```typescript
// 解决方案：使用更可靠的选择器和等待策略
test('should login successfully', async ({ page }) => {
  await page.goto('/login')
  
  // 等待页面完全加载
  await page.waitForLoadState('networkidle')
  
  // 使用 data-testid 而不是文本选择器
  await page.fill('[data-testid="email-input"]', 'test@example.com')
  
  // 等待元素可见
  await page.waitForSelector('[data-testid="submit-button"]:not([disabled])')
  await page.click('[data-testid="submit-button"]')
})
```

## 下一步

测试完成后，请参考：
- [🚀 部署指南](deployment-guide.md)
- [📊 性能优化指南](performance-guide.md)
- [🔒 安全指南](security-guide.md)