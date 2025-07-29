import React from 'react';
import { Card, Row, Col, Button, Statistic, List, Tag, Progress } from 'antd';
import { TrophyOutlined, UserOutlined, FlagOutlined, SafetyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // 初始化数据库 - 清空所有数据
  const stats = {
    activeContests: 0,
    totalParticipants: 0,
    totalChallenges: 0,
    securityLevel: 100
  };

  // 初始化比赛数据 - 清空所有比赛
  const recentContests: any[] = [];

  // 初始化公告数据 - 清空所有公告
  const announcements: any[] = [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'green';
      case 'upcoming': return 'blue';
      case 'ended': return 'gray';
      default: return 'default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'running': return '进行中';
      case 'upcoming': return '即将开始';
      case 'ended': return '已结束';
      default: return '未知';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-8">
        {/* 平台介绍 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">CTF</span> 防作弊平台
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            基于多模态行为特征的动态Flag防作弊系统，通过先进的生物识别技术和区块链验证，
            确保网络安全竞赛的公平、公正、公开。
          </p>
        </div>

        {/* 统计数据 */}
        <Row gutter={[24, 24]} className="mb-12">
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="活跃比赛"
                value={stats.activeContests}
                prefix={<TrophyOutlined className="text-orange-500" />}
                suffix="场"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="参赛选手"
                value={stats.totalParticipants}
                prefix={<UserOutlined className="text-blue-500" />}
                suffix="人"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="题目总数"
                value={stats.totalChallenges}
                prefix={<FlagOutlined className="text-green-500" />}
                suffix="道"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="安全等级"
                value={stats.securityLevel}
                prefix={<SafetyOutlined className="text-red-500" />}
                suffix="%"
              />
              <Progress percent={stats.securityLevel} showInfo={false} strokeColor="#52c41a" />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          {/* 最近比赛 */}
          <Col xs={24} lg={12}>
            <Card 
              title="最近比赛" 
              extra={
                <Button type="link" onClick={() => navigate('/contests')}>
                  查看全部
                </Button>
              }
            >
              <List
                dataSource={recentContests}
                renderItem={(contest) => (
                  <List.Item
                    actions={[
                      <Button 
                        type="primary" 
                        size="small"
                        onClick={() => navigate(`/contests/${contest.id}`)}
                      >
                        进入比赛
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      title={
                        <div className="flex items-center gap-2">
                          <span>{contest.title}</span>
                          <Tag color={getStatusColor(contest.status)}>
                            {getStatusText(contest.status)}
                          </Tag>
                        </div>
                      }
                      description={
                        <div className="text-sm text-gray-500">
                          <div>参赛人数: {contest.participants}</div>
                          <div>
                            {contest.status === 'running' 
                              ? `结束时间: ${contest.endTime}`
                              : `开始时间: ${contest.startTime}`
                            }
                          </div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* 公告通知 */}
          <Col xs={24} lg={12}>
            <Card title="公告通知">
              <List
                dataSource={announcements}
                renderItem={(announcement) => (
                  <List.Item>
                    <List.Item.Meta
                      title={announcement.title}
                      description={
                        <div>
                          <div className="mb-2">{announcement.content}</div>
                          <div className="text-xs text-gray-400">{announcement.time}</div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* 快速入口 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            快速入口
          </h2>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={8}>
              <Card className="text-center h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/features')}>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafetyOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">平台特色</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  了解我们的多模态行为识别、动态Flag生成和区块链验证技术。
                </p>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/contests')}>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyOutlined className="text-2xl text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">参加比赛</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  浏览和参加各种网络安全竞赛，提升你的技能水平。
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;