import { AuthResponse, LoginRequest, RegisterRequest, User } from '../types';

// API请求工具函数
class ApiClient {
  private baseURL: string;
  private token: string | null;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api/v1';
    this.token = localStorage.getItem('auth_token');
  }

  // 设置认证令牌
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  // 清除认证令牌
  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  // 获取请求头
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // 通用请求方法
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API请求错误:', error);
      throw error;
    }
  }

  // GET请求
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST请求
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT请求
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE请求
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // 获取图片验证码
  async getCaptcha(): Promise<{ captchaId: string; captchaImage: string }> {
    return this.get<{ captchaId: string; captchaImage: string }>('/auth/captcha');
  }

  // 发送邮箱验证码
  async sendEmailCode(data: { email: string; purpose: string }): Promise<{ message: string; verifyId: string }> {
    return this.post<{ message: string; verifyId: string }>('/auth/send-email-code', data);
  }

  // 用户注册
  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await this.post<AuthResponse>('/auth/register', data);
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  // 用户登录
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await this.post<AuthResponse>('/auth/login', data);
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  // 获取当前用户信息
  async getCurrentUser(): Promise<{ user: User }> {
    return this.get<{ user: User }>('/auth/me');
  }

  // 更新用户资料
  async updateProfile(data: { avatar?: string; bio?: string }): Promise<{ message: string; user: User }> {
    return this.put<{ message: string; user: User }>('/auth/profile', data);
  }

  // 健康检查
  async healthCheck(): Promise<{ status: string; message: string }> {
    return this.get<{ status: string; message: string }>('/health');
  }

  // 登出
  logout() {
    this.clearToken();
  }
}

// 创建API客户端实例
export const apiClient = new ApiClient();

// 导出常用的API方法
export const authAPI = {
  getCaptcha: () => apiClient.getCaptcha(),
  sendEmailCode: (data: { email: string; purpose: string }) => apiClient.sendEmailCode(data),
  register: (data: RegisterRequest) => apiClient.register(data),
  login: (data: LoginRequest) => apiClient.login(data),
  getCurrentUser: () => apiClient.getCurrentUser(),
  updateProfile: (data: { avatar?: string; bio?: string }) => apiClient.updateProfile(data),
  logout: () => apiClient.logout(),
};

export const systemAPI = {
  healthCheck: () => apiClient.healthCheck(),
};

// 错误处理工具
export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

// 请求拦截器（用于统一错误处理）
export const handleApiError = (error: any): string => {
  if (error instanceof ApiError) {
    return error.message;
  }
  
  if (error.message) {
    return error.message;
  }
  
  return '网络请求失败，请检查网络连接';
};

export default apiClient;