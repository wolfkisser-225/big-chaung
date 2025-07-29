import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Menu } from 'antd';
import { UserOutlined, TrophyOutlined, BookOutlined, EyeOutlined, SettingOutlined, MonitorOutlined } from '@ant-design/icons';
import UserManagement from './admin/UserManagement';
import ContestManagement from './admin/ContestManagement';
import ProblemManagement from './admin/ProblemManagement';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    {
      key: 'overview',
      icon: <SettingOutlined />,
      label: '系统概览'
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: '用户管理'
    },
    {
      key: 'contests',
      icon: <TrophyOutlined />,
      label: '比赛管理'
    },
    {
      key: 'problems',
      icon: <BookOutlined />,
      label: '题目管理'
    },
    {
      key: 'monitor',
      icon: <MonitorOutlined />,
      label: '监控中心'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagement />;
      case 'contests':
        return <ContestManagement />;
      case 'problems':
        return <ProblemManagement />;
      case 'monitor':
        return (
          <div className="p-6">
            <Card title="监控中心">
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="在线用户"
                      value={0}
                      prefix={<UserOutlined />}
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="系统负载"
                      value={0}
                      suffix="%"
                      prefix={<MonitorOutlined />}
                      valueStyle={{ color: '#1890ff' }}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="内存使用"
                      value={0}
                      suffix="MB"
                      valueStyle={{ color: '#722ed1' }}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="磁盘使用"
                      value={0}
                      suffix="GB"
                      valueStyle={{ color: '#cf1322' }}
                    />
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <Card title="系统概览">
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="总用户数"
                      value={1}
                      prefix={<UserOutlined />}
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="活跃比赛"
                      value={0}
                      prefix={<TrophyOutlined />}
                      valueStyle={{ color: '#cf1322' }}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="题目总数"
                      value={0}
                      prefix={<BookOutlined />}
                      valueStyle={{ color: '#1890ff' }}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                  <Card>
                    <Statistic
                      title="今日访问"
                      value={0}
                      prefix={<EyeOutlined />}
                      valueStyle={{ color: '#722ed1' }}
                    />
                  </Card>
                </Col>
              </Row>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* 侧边栏 */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              管理后台
            </h2>
            <Menu
              mode="vertical"
              selectedKeys={[activeTab]}
              items={menuItems}
              onClick={({ key }) => setActiveTab(key)}
              className="border-none"
            />
          </div>
        </div>
        
        {/* 主内容区 */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;