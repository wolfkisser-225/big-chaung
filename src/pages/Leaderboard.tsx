import React, { useState } from 'react';
import { Card, Row, Col, Tabs, Table, Avatar, Tag, Button, Select } from 'antd';
import { TrophyOutlined, UserOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/plots';

const { TabPane } = Tabs;
const { Option } = Select;

interface User {
  id: string;
  username: string;
  avatar?: string;
  totalScore: number;
  webScore: number;
  pwnScore: number;
  cryptoScore: number;
  reverseScore: number;
  miscScore: number;
  rank: number;
  change: number; // 排名变化
}

interface ScoreHistory {
  date: string;
  score: number;
  category: string;
}

const Leaderboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('total');
  const [selectedUser, setSelectedUser] = useState<string>('user1');

  // 初始化用户数据 - 清空所有用户
  const users: User[] = [];

  // 模拟积分历史数据
  const scoreHistory: ScoreHistory[] = [
    { date: '2025-01-01', score: 0, category: 'total' },
    { date: '2025-01-02', score: 0, category: 'total' },
    { date: '2025-01-03', score: 0, category: 'total' },
    { date: '2025-01-04', score: 0, category: 'total' },
    { date: '2025-01-05', score: 0, category: 'total' },
    { date: '2025-01-06', score: 0, category: 'total' },
    { date: '2025-01-07', score: 0, category: 'total' }
  ];

  const getScoreByCategory = (user: User, category: string) => {
    switch (category) {
      case 'web': return user.webScore;
      case 'pwn': return user.pwnScore;
      case 'crypto': return user.cryptoScore;
      case 'reverse': return user.reverseScore;
      case 'misc': return user.miscScore;
      default: return user.totalScore;
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <TrophyOutlined className="text-yellow-500" />;
    if (rank === 2) return <TrophyOutlined className="text-gray-400" />;
    if (rank === 3) return <TrophyOutlined className="text-orange-600" />;
    return <span className="text-gray-500">{rank}</span>;
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <RiseOutlined className="text-green-500" />;
    if (change < 0) return <FallOutlined className="text-red-500" />;
    return <span className="text-gray-400">-</span>;
  };

  const columns = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      width: 80,
      render: (rank: number) => (
        <div className="flex items-center justify-center">
          {getRankIcon(rank)}
        </div>
      )
    },
    {
      title: '变化',
      dataIndex: 'change',
      key: 'change',
      width: 60,
      render: (change: number) => getChangeIcon(change)
    },
    {
      title: '用户',
      dataIndex: 'username',
      key: 'username',
      render: (username: string, record: User) => (
        <div className="flex items-center gap-2">
          <Avatar size="small" icon={<UserOutlined />} src={record.avatar} />
          <span>{username}</span>
        </div>
      )
    },
    {
      title: '积分',
      dataIndex: 'score',
      key: 'score',
      render: (_: any, record: User) => (
        <Tag color="blue">
          {getScoreByCategory(record, selectedCategory)}
        </Tag>
      )
    }
  ];

  const chartData = scoreHistory.map(item => ({
    date: item.date,
    score: item.score
  }));

  const chartConfig = {
    data: chartData,
    xField: 'date',
    yField: 'score',
    smooth: true,
    color: '#1890ff',
    point: {
      size: 4,
      shape: 'circle'
    },
    tooltip: {
      formatter: (datum: any) => {
        return { name: '积分', value: datum.score };
      }
    },
    xAxis: {
      title: {
        text: '日期'
      }
    },
    yAxis: {
      title: {
        text: '积分'
      }
    }
  };

  const categories = [
    { key: 'total', label: '总排行榜' },
    { key: 'web', label: 'Web安全' },
    { key: 'pwn', label: '二进制漏洞' },
    { key: 'crypto', label: '密码学' },
    { key: 'reverse', label: '逆向工程' },
    { key: 'misc', label: '杂项' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            积分排行榜
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            查看各个分类的积分排名和个人积分变化趋势
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {/* 排行榜 */}
          <Col xs={24} lg={14}>
            <Card title="排行榜">
              <Tabs 
                activeKey={selectedCategory} 
                onChange={setSelectedCategory}
                items={categories.map(cat => ({
                  key: cat.key,
                  label: cat.label,
                  children: (
                    <Table
                      dataSource={users}
                      columns={columns}
                      pagination={false}
                      rowKey="id"
                      size="small"
                    />
                  )
                }))}
              />
            </Card>
          </Col>

          {/* 积分动态图 */}
          <Col xs={24} lg={10}>
            <Card title="积分趋势">
              <div className="mb-4">
                <Select
                  value={selectedUser}
                  onChange={setSelectedUser}
                  style={{ width: '100%' }}
                  placeholder="选择用户"
                >
                  {users.map(user => (
                    <Option key={user.id} value={user.id}>
                      {user.username}
                    </Option>
                  ))}
                </Select>
              </div>
              <div style={{ height: 300 }}>
                <Line {...chartConfig} />
              </div>
            </Card>
          </Col>
        </Row>

        {/* 统计信息 */}
        <Row gutter={[16, 16]} className="mt-8">
          <Col xs={24} sm={8}>
            <Card>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">0</div>
                <div className="text-gray-500">活跃用户</div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-gray-500">总积分</div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">0</div>
                <div className="text-gray-500">平均积分</div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Leaderboard;