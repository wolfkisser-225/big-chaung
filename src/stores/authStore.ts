import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';
import { apiClient } from '../utils/api';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      
      login: (user: User, token: string) => {
        // 设置API客户端的认证令牌
        apiClient.setAuthToken(token);
        
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },
      
      logout: () => {
        // 清除API客户端的认证令牌
        apiClient.clearAuthToken();
        
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
      
      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...userData },
          });
        }
      },
      
      setToken: (token: string) => {
        apiClient.setAuthToken(token);
        set({ token });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        // 在应用启动时恢复认证状态
        if (state?.token) {
          apiClient.setAuthToken(state.token);
        }
      },
    }
  )
);