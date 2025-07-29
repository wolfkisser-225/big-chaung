import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button, Tag, Tabs, Table, Progress, Statistic, Avatar, Timeline, Alert, Space, Divider, Typography, Badge } from 'antd';
import { TrophyOutlined, UserOutlined, ClockCircleOutlined, FlagOutlined, TeamOutlined, StarOutlined, WarningOutlined, CheckCircleOutlined, PlayCircleOutlined, SafetyOutlined } from '@ant-design/icons';
import type { Contest, Challenge, LeaderboardEntry } from '../types';
import { ChallengeType } from '../types';
import dayjs from 'dayjs';

const { TabPane } = Tabs;
const { Title, Paragraph, Text } = Typography;

const ContestDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contest, setContest] = useState<Contest | null>(null);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRegistered, setUserRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // 模拟比赛详情数据
  const mockContest: Contest = {
    id: id || '1',
    title: '春季网络安全挑战赛',
    description: '面向全国高校学生的综合性网络安全竞赛，涵盖Web安全、密码学、逆向工程等多个方向。本次比赛采用动态Flag技术，结合多模态行为特征验证，确保比赛的公平性和安全性。',
    startTime: '2025-03-15 09:00:00',
    endTime: '2025-03-15 18:00:00',
    status: 'running',
    organizerId: 'org1',
    participants: 324,
    maxParticipants: 500,
    rules: `
## 比赛规则

### 基本规则
1. 比赛时间：2025年3月15日 09:00 - 18:00
2. 比赛形式：个人赛
3. 题目类型：Web安全、密码学、逆向工程、取证分析、杂项
4. 计分方式：动态计分，题目分值根据解题人数动态调整

### 行为验证规则
1. 系统将采集参赛者的键击动态、鼠标轨迹等行为特征
2. 每次Flag提交都将进行行为特征验证
3. 异常行为将触发额外验证流程
4. 严重违规行为将导致取消比赛资格

### 禁止行为
1. 禁止攻击比赛平台
2. 禁止与其他参赛者分享Flag或解题思路
3. 禁止使用自动化工具进行Flag提交
4. 禁止恶意干扰其他参赛者

### 奖励设置
- 第一名：5000元 + 荣誉证书
- 第二名：3000元 + 荣誉证书
- 第三名：1000元 + 荣誉证书
- 前10名：精美纪念品
    `,
    prizes: ['一等奖：5000元', '二等奖：3000元', '三等奖：1000元']
  };

  // 模拟题目数据
  const mockChallenges: Challenge[] = [
    {
      id: 'web1',
      title: 'SQL注入基础',
      description: '发现并利用SQL注入漏洞获取敏感信息',
      type: ChallengeType.WEB,
      category: 'web',
      difficulty: 'easy',
      points: 100,
      solvedCount: 156,
      totalAttempts: 324,
      attachments: [],
      hints: ['尝试在输入框中输入特殊字符'],
      tags: ['SQL注入', 'Web安全'],
      isActive: true,
      contestId: id || '1',
      createdAt: '2025-01-01T00:00:00Z'
    },
    {
      id: 'crypto1',
      title: '古典密码破解',
      description: '破解一个经典的替换密码',
      type: ChallengeType.CRYPTO,
      category: 'crypto',
      difficulty: 'easy',
      points: 120,
      solvedCount: 89,
      totalAttempts: 234,
      attachments: ['cipher.txt'],
      hints: ['这是一个简单的替换密码'],
      tags: ['古典密码', '密码学'],
      isActive: true,
      contestId: id || '1',
      createdAt: '2025-01-01T00:00:00Z'
    },
    {
      id: 'reverse1',
      title: '简单逆向',
      description: '分析二进制文件找到隐藏的Flag',
      type: ChallengeType.REVERSE,
      category: 'reverse',
      difficulty: 'medium',
      points: 200,
      solvedCount: 45,
      totalAttempts: 156,
      attachments: ['challenge.exe'],
      hints: ['使用反汇编工具分析程序'],
      tags: ['逆向工程', '二进制分析'],
      isActive: true,
      contestId: id || '1',
      createdAt: '2025-01-01T00:00:00Z'
    },
    {
      id: 'web2',
      title: 'XSS漏洞利用',
      description: '构造XSS payload获取管理员Cookie',
      type: ChallengeType.WEB,
      category: 'web',
      difficulty: 'medium',
      points: 250,
      solvedCount: 34,
      totalAttempts: 123,
      attachments: [],
      hints: ['尝试在评论区输入JavaScript代码'],
      tags: ['XSS', 'Web安全'],
      isActive: true,
      contestId: id || '1',
      createdAt: '2025-01-01T00:00:00Z'
    },
    {
      id: 'crypto2',
      title: 'RSA密码分析',
      description: '分析RSA加密实现中的漏洞',
      type: ChallengeType.CRYPTO,
      category: 'crypto',
      difficulty: 'hard',
      points: 400,
      solvedCount: 12,
      totalAttempts: 67,
      attachments: ['rsa_challenge.py'],
      hints: ['检查RSA参数的生成过程'],
      tags: ['RSA', '密码学', '数学'],
      isActive: true,
      contestId: id || '1',
      createdAt: '2025-01-01T00:00:00Z'
    }
  ];

  // 模拟排行榜数据
  const mockLeaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      userId: 'user1',
      username: 'CyberMaster',
      score: 870,
      solvedChallenges: 4,
      lastSubmission: '2025-03-15 15:30:00',
      lastSubmissionTime: '2025-03-15 15:30:00'
    },
    {
      rank: 2,
      userId: 'user2',
      username: 'SecurityPro',
      score: 720,
      solvedChallenges: 3,
      lastSubmission: '2025-03-15 14:45:00',
      lastSubmissionTime: '2025-03-15 14:45:00'
    },
    {
      rank: 3,
      userId: 'user3',
      username: 'HackTheBox',
      score: 670,
      solvedChallenges: 3,
      lastSubmission: '2025-03-15 16:10:00',
      lastSubmissionTime: '2025-03-15 16:10:00'
    },
    {
      rank: 4,
      userId: 'user4',
      username: 'CryptoNinja',
      score: 520,
      solvedChallenges: 2,
      lastSubmission: '2025-03-15 13:20:00',
      lastSubmissionTime: '2025-03-15 13:20:00'
    },
    {
      rank: 5,
      userId: 'user5',
      username: 'WebHacker',
      score: 350,
      solvedChallenges: 2,
      lastSubmission: '2025-03-15 15:55:00',
      lastSubmissionTime: '2025-03-15 15:55:00'
    }
  ];

  useEffect(() => {
    // 模拟API调用
    setTimeout(() => {
      setContest(mockContest);
      setChallenges(mockChallenges);
      setLeaderboard(mockLeaderboard);
      setUserRegistered(Math.random() > 0.5); // 随机设置用户注册状态
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading || !contest) {
    return <div className="flex justify-center items-center min-h-screen">加载中...</div>;
  }

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'green';
      case 'medium': return 'orange';
      case 'hard': return 'red';
      default: return 'default';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return '未知';
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case 'web': return 'Web安全';
      case 'crypto': return '密码学';
      case 'reverse': return '逆向工程';
      case 'pwn': return '二进制漏洞';
      case 'misc': return '杂项';
      default: return category;
    }
  };

  const formatDateTime = (dateTime: string) => {
    return dayjs(dateTime).format('YYYY-MM-DD HH:mm');
  };

  const getTimeRemaining = () => {
    const now = dayjs();
    const end = dayjs(contest.endTime);
    const diff = end.diff(now);
    
    if (diff > 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}小时${minutes}分钟`;
    }
    return '已结束';
  };

  const challengeColumns = [
    {
      title: '题目',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: Challenge) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-sm text-gray-500">{record.description}</div>
        </div>
      )
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => (
        <Tag color="blue">{getCategoryText(category)}</Tag>
      )
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (difficulty: string) => (
        <Tag color={getDifficultyColor(difficulty)}>
          {getDifficultyText(difficulty)}
        </Tag>
      )
    },
    {
      title: '分值',
      dataIndex: 'points',
      key: 'points',
      render: (points: number) => (
        <span className="font-medium text-blue-600">{points}</span>
      )
    },
    {
      title: '解题进度',
      key: 'progress',
      render: (record: Challenge) => {
        const rate = Math.round((record.solvedCount / record.totalAttempts) * 100);
        return (
          <div>
            <div className="text-sm mb-1">
              {record.solvedCount}/{record.totalAttempts} ({rate}%)
            </div>
            <Progress percent={rate} size="small" />
          </div>
        );
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (record: Challenge) => (
        <Button 
          type="primary" 
          size="small"
          icon={<PlayCircleOutlined />}
          onClick={() => navigate(`/challenges/${record.id}`)}
          disabled={contest.status === 'ended' || !userRegistered}
        >
          开始挑战
        </Button>
      )
    }
  ];

  const leaderboardColumns = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank: number) => {
        if (rank <= 3) {
          const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];
          return (
            <Badge 
              count={rank} 
              style={{ backgroundColor: colors[rank - 1] }}
            />
          );
        }
        return <span className="font-medium">{rank}</span>;
      }
    },
    {
      title: '用户',
      dataIndex: 'username',
      key: 'username',
      render: (username: string) => (
        <div className="flex items-center space-x-2">
          <Avatar icon={<UserOutlined />} size="small" />
          <span className="font-medium">{username}</span>
        </div>
      )
    },
    {
      title: '得分',
      dataIndex: 'score',
      key: 'score',
      render: (score: number) => (
        <span className="font-bold text-blue-600">{score}</span>
      )
    },
    {
      title: '解题数',
      dataIndex: 'solvedChallenges',
      key: 'solvedChallenges',
      render: (count: number) => (
        <Tag color="green">{count}题</Tag>
      )
    },
    {
      title: '最后提交',
      dataIndex: 'lastSubmissionTime',
      key: 'lastSubmissionTime',
      render: (time: string) => (
        <span className="text-sm text-gray-500">
          {formatDateTime(time)}
        </span>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        {/* 比赛头部信息 */}
        <Card className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <Title level={2} className="mb-0">{contest.title}</Title>
                <Tag color={getStatusColor(contest.status)} className="text-sm">
                  {getStatusText(contest.status)}
                </Tag>
              </div>
              <Paragraph className="text-gray-600 dark:text-gray-300 mb-4">
                {contest.description}
              </Paragraph>
            </div>
            <div className="ml-6">
              {!userRegistered && contest.status !== 'ended' ? (
                <Button 
                  type="primary" 
                  size="large"
                  icon={<UserOutlined />}
                  onClick={() => setUserRegistered(true)}
                >
                  报名参赛
                </Button>
              ) : (
                <Button 
                  type="primary" 
                  size="large"
                  icon={<SafetyOutlined />}
                  disabled={contest.status === 'ended'}
                  onClick={() => navigate(`/contests/${contest.id}/preparation`)}
                >
                  比赛准备
                </Button>
              )}
            </div>
          </div>

          {/* 比赛统计信息 */}
          <Row gutter={[24, 16]}>
            <Col xs={12} sm={6}>
              <Statistic
                title="开始时间"
                value={formatDateTime(contest.startTime)}
                prefix={<ClockCircleOutlined />}
              />
            </Col>
            <Col xs={12} sm={6}>
              <Statistic
                title="结束时间"
                value={formatDateTime(contest.endTime)}
                prefix={<ClockCircleOutlined />}
              />
            </Col>
            <Col xs={12} sm={6}>
              <Statistic
                title="参赛人数"
                value={contest.participants}
                suffix={contest.maxParticipants ? `/ ${contest.maxParticipants}` : ''}
                prefix={<TeamOutlined />}
              />
            </Col>
            <Col xs={12} sm={6}>
              <Statistic
                title="剩余时间"
                value={getTimeRemaining()}
                prefix={<ClockCircleOutlined />}
                valueStyle={{ color: contest.status === 'running' ? '#cf1322' : undefined }}
              />
            </Col>
          </Row>

          {/* 行为验证提示 */}
          {userRegistered && contest.status === 'running' && (
            <Alert
              className="mt-4"
              message="行为验证已启用"
              description="系统正在采集您的键击动态和鼠标轨迹等行为特征，用于Flag验证和防作弊检测。请保持正常操作习惯。"
              type="info"
              icon={<CheckCircleOutlined />}
              showIcon
            />
          )}
        </Card>

        {/* 标签页内容 */}
        <Card>
          <Tabs activeKey={activeTab} onChange={setActiveTab}>
            <TabPane tab="比赛概览" key="overview">
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={16}>
                  <div className="prose max-w-none">
                    <Title level={4}>比赛介绍</Title>
                    <Paragraph>
                      {contest.description}
                    </Paragraph>
                    
                    <Title level={4}>技术特色</Title>
                    <Timeline>
                      <Timeline.Item 
                        dot={<CheckCircleOutlined className="text-green-500" />}
                        color="green"
                      >
                        <strong>多模态行为特征采集</strong>
                        <br />
                        实时采集键击动态、鼠标轨迹等生物特征数据
                      </Timeline.Item>
                      <Timeline.Item 
                        dot={<FlagOutlined className="text-blue-500" />}
                        color="blue"
                      >
                        <strong>动态Flag生成</strong>
                        <br />
                        基于行为特征生成个性化Flag，防止抄袭
                      </Timeline.Item>
                      <Timeline.Item 
                        dot={<StarOutlined className="text-purple-500" />}
                        color="purple"
                      >
                        <strong>区块链验证</strong>
                        <br />
                        利用区块链技术确保提交记录不可篡改
                      </Timeline.Item>
                      <Timeline.Item 
                        dot={<WarningOutlined className="text-orange-500" />}
                        color="orange"
                      >
                        <strong>智能防作弊</strong>
                        <br />
                        AI算法实时检测异常行为，保证比赛公平
                      </Timeline.Item>
                    </Timeline>
                  </div>
                </Col>
                <Col xs={24} lg={8}>
                  <Card title="奖励设置" size="small">
                    <Space direction="vertical" className="w-full">
                      {contest.prizes.map((prize, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <TrophyOutlined className="text-yellow-500" />
                          <span>{prize}</span>
                        </div>
                      ))}
                    </Space>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="题目列表" key="challenges">
              <Table
                columns={challengeColumns}
                dataSource={challenges}
                rowKey="id"
                pagination={false}
                className="mb-4"
              />
            </TabPane>

            <TabPane tab="排行榜" key="leaderboard">
              <Table
                columns={leaderboardColumns}
                dataSource={leaderboard}
                rowKey="userId"
                pagination={{ pageSize: 20 }}
              />
            </TabPane>

            <TabPane tab="比赛规则" key="rules">
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: contest.rules.replace(/\n/g, '<br>') }} />
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default ContestDetail;