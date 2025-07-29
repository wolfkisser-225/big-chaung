import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Layout as AntLayout,
  Menu,
  Button,
  Avatar,
  Dropdown,
  Space,
  Switch,
  Tooltip
} from 'antd';
import {
  HomeOutlined,
  TrophyOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MonitorOutlined,
  MoonOutlined,
  SunOutlined,
  FlagOutlined,
  SafetyOutlined,
  BarChartOutlined,
  ControlOutlined
} from '@ant-design/icons';
import { useTheme } from '../hooks/useTheme';
import type { MenuProps } from 'antd';

const { Header, Content, Footer } = AntLayout;

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  // 模拟用户信息
  const user = {
    username: 'admin',
    role: 'admin',
    avatar: undefined
  };

  const menuItems: MenuProps['items'] = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页'
    },
    {
      key: '/contests',
      icon: <TrophyOutlined />,
      label: '比赛'
    },
    {
      key: '/training',
      icon: <MonitorOutlined />,
      label: '训练场'
    },
    {
      key: '/leaderboard',
      icon: <BarChartOutlined />,
      label: '积分排行榜'
    },
    {
      key: '/features',
      icon: <SafetyOutlined />,
      label: '平台特色'
    }
  ];

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人中心',
      onClick: () => navigate('/profile')
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '设置'
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: () => {
        // 处理退出登录逻辑
        navigate('/login');
      }
    }
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <AntLayout className="min-h-screen">
      <Header className="bg-blue-900 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white text-xl font-bold mr-8">
            CTF平台 - 西安工业大学网络空间安全协会
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
            className="bg-transparent border-none flex-1"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          {/* 主题切换 */}
          <Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
          
          {/* 管理员后台入口 */}
          {user.role === 'admin' && (
            <Button
              type="text"
              icon={<ControlOutlined />}
              className="text-white hover:text-orange-400"
              onClick={() => navigate('/admin')}
            >
              管理后台
            </Button>
          )}
          
          {/* 用户菜单 */}
          <Dropdown 
            menu={{ items: userMenuItems }} 
            placement="bottomRight"
            trigger={['hover']}
          >
            <div className="cursor-pointer text-white hover:text-orange-400">
              <Tooltip title={user.username} placement="bottom">
                <Avatar
                  size="small"
                  icon={<UserOutlined />}
                  src={user.avatar}
                />
              </Tooltip>
            </div>
          </Dropdown>
        </div>
      </Header>
      
      <Content className="flex-1">
        <div className="min-h-full bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </div>
      </Content>
      
      <Footer className="text-center bg-white dark:bg-gray-800 border-t">
        <div className="text-gray-600 dark:text-gray-400">
          基于多模态行为特征的CTF动态Flag防作弊系统 ©2025
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
          西安工业大学 网络空间安全协会
        </div>
      </Footer>
    </AntLayout>
  );
};

export default Layout;