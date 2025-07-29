import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button, Tag, Input, Form, Alert, Progress, Statistic, Timeline, Modal, Typography, Space, Divider, Badge } from 'antd';
import { FlagOutlined, ClockCircleOutlined, UserOutlined, CheckCircleOutlined, WarningOutlined, EyeOutlined, SendOutlined, HistoryOutlined, SafetyOutlined } from '@ant-design/icons';
import type { Challenge, FlagSubmission, BehaviorData } from '../types';
import { ChallengeType } from '../types';
import dayjs from 'dayjs';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const ChallengeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [submissions, setSubmissions] = useState<FlagSubmission[]>([]);
  const [behaviorData, setBehaviorData] = useState<BehaviorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [flagInput, setFlagInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [behaviorModalVisible, setBehaviorModalVisible] = useState(false);
  const [keystrokeData, setKeystrokeData] = useState<any[]>([]);
  const [mouseData, setMouseData] = useState<any[]>([]);

  // 模拟挑战详情数据
  const mockChallenge: Challenge = {
    id: id || 'web1',
    title: 'SQL注入基础',
    description: '这是一个经典的SQL注入挑战。你需要利用SQL注入漏洞来获取数据库中的敏感信息。目标是找到隐藏在数据库中的Flag。',
    type: ChallengeType.WEB,
    category: 'web',
    difficulty: 'easy',
    points: 100,
    solvedCount: 156,
    totalAttempts: 324,
    attachments: [],
    tags: ['SQL注入', 'Web安全', '数据库'],
    isActive: true,
    contestId: 'contest1',
    createdAt: '2025-03-10 10:00:00',
    content: `
## 挑战描述

欢迎来到SQL注入基础挑战！这个挑战将测试你对SQL注入攻击的理解和实践能力。

### 场景
你发现了一个看起来很简单的登录页面，但是开发者在编写代码时犯了一个常见的错误。你能利用这个漏洞来绕过身份验证并获取敏感信息吗？

### 目标
- 分析登录表单的SQL查询逻辑
- 构造恶意的SQL注入payload
- 绕过身份验证机制
- 获取数据库中的Flag

### 提示
- 尝试在用户名字段中输入特殊字符
- 观察应用程序的错误消息
- 考虑使用联合查询（UNION）来获取额外信息
- Flag格式：flag{...}

### 挑战链接
[点击这里访问挑战环境](http://challenge.example.com:8080)

### 注意事项
- 请不要攻击挑战平台本身
- 只在提供的挑战环境中进行测试
- 如果遇到技术问题，请联系管理员
    `,
    hints: [
      '尝试在登录表单中输入单引号（\'）看看会发生什么',
      '观察错误消息，它们可能会泄露数据库结构信息',
      '考虑使用 UNION SELECT 来查询其他表的数据'
    ]
  };

  // 模拟提交记录
  const mockSubmissions: FlagSubmission[] = [
    {
      id: 'sub1',
      userId: 'user1',
      challengeId: id || 'web1',
      flag: 'flag{test_flag_123}',
      isCorrect: false,
      submittedAt: '2025-03-15 14:30:00',
      submissionTime: '2025-03-15 14:30:00',
      behaviorScore: 0.85,
      behaviorData: {
        keystrokePattern: [],
        keystrokeDynamics: {
          avgDwellTime: 110,
          avgFlightTime: 75,
          typingRhythm: 0.82,
          pressureVariation: 0.10
        },
        mousePattern: [],
        mouseTrajectory: {
          avgSpeed: 240,
          acceleration: 0.75,
          clickPattern: 0.85,
          movementSmoothing: 0.70
        },
        sessionId: 'session123',
        timestamp: '2025-03-15 14:30:00',
        anomalyDetected: false,
        riskScore: 0.12
      },
      verificationStatus: 'failed'
    },
    {
      id: 'sub2',
      userId: 'user1',
      challengeId: id || 'web1',
      flag: 'flag{wrong_flag}',
      isCorrect: false,
      submittedAt: '2025-03-15 14:25:00',
      submissionTime: '2025-03-15 14:25:00',
      behaviorScore: 0.92,
      behaviorData: {
        keystrokePattern: [],
        keystrokeDynamics: {
          avgDwellTime: 125,
          avgFlightTime: 85,
          typingRhythm: 0.88,
          pressureVariation: 0.15
        },
        mousePattern: [],
        mouseTrajectory: {
          avgSpeed: 260,
          acceleration: 0.85,
          clickPattern: 0.95,
          movementSmoothing: 0.80
        },
        sessionId: 'session123',
        timestamp: '2025-03-15 14:25:00',
        anomalyDetected: false,
        riskScore: 0.08
      },
      verificationStatus: 'failed'
    }
  ];

  // 模拟行为数据
  const mockBehaviorData: BehaviorData = {
    keystrokePattern: [],
    sessionId: 'session123',
    keystrokeDynamics: {
      avgDwellTime: 120,
      avgFlightTime: 80,
      typingRhythm: 0.85,
      pressureVariation: 0.12
    },
    mousePattern: [],
    mouseTrajectory: {
      avgSpeed: 250,
      acceleration: 0.8,
      clickPattern: 0.9,
      movementSmoothing: 0.75
    },
    timestamp: '2025-03-15 14:35:00',
    riskScore: 0.15,
    anomalyDetected: false
  };

  useEffect(() => {
    // 模拟API调用
    setTimeout(() => {
      setChallenge(mockChallenge);
      setSubmissions(mockSubmissions);
      setBehaviorData(mockBehaviorData);
      setLoading(false);
    }, 1000);

    // 模拟键击动态采集
    const handleKeyDown = (e: KeyboardEvent) => {
      const timestamp = Date.now();
      setKeystrokeData(prev => [...prev.slice(-50), {
        key: e.key,
        timestamp,
        dwellTime: 0,
        pressure: Math.random() * 0.5 + 0.5
      }]);
    };

    // 模拟鼠标轨迹采集
    const handleMouseMove = (e: MouseEvent) => {
      const timestamp = Date.now();
      setMouseData(prev => [...prev.slice(-100), {
        x: e.clientX,
        y: e.clientY,
        timestamp,
        speed: Math.random() * 500 + 100
      }]);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [id]);

  if (loading || !challenge) {
    return <div className="flex justify-center items-center min-h-screen">加载中...</div>;
  }

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

  const handleFlagSubmit = async () => {
    if (!flagInput.trim()) {
      return;
    }

    setSubmitting(true);
    
    // 模拟行为验证
    setTimeout(() => {
      const newSubmission: FlagSubmission = {
        id: `sub${Date.now()}`,
        userId: 'user1',
        challengeId: challenge.id,
        flag: flagInput,
        isCorrect: flagInput === 'flag{sql_injection_master}',
        submittedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        submissionTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        behaviorScore: Math.random() * 0.3 + 0.7,
        behaviorData: mockBehaviorData,
        verificationStatus: flagInput === 'flag{sql_injection_master}' ? 'verified' : 'failed'
      };

      setSubmissions(prev => [newSubmission, ...prev]);
      setFlagInput('');
      setSubmitting(false);

      if (newSubmission.isCorrect) {
        Modal.success({
          title: '恭喜！',
          content: '你成功解决了这个挑战！',
          onOk: () => navigate('/contests/1')
        });
      }
    }, 2000);
  };

  const solveRate = Math.round((challenge.solvedCount / challenge.totalAttempts) * 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        {/* 挑战头部信息 */}
        <Card className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <Title level={2} className="mb-0">{challenge.title}</Title>
                <Tag color="blue">{getCategoryText(challenge.category)}</Tag>
                <Tag color={getDifficultyColor(challenge.difficulty)}>
                  {getDifficultyText(challenge.difficulty)}
                </Tag>
              </div>
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-lg font-semibold text-blue-600">
                  {challenge.points} 分
                </span>
                <span className="text-gray-500">
                  {challenge.solvedCount} 人解决 / {challenge.totalAttempts} 人尝试
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {challenge.tags?.map((tag, index) => (
                  <Tag key={index} color="default">{tag}</Tag>
                ))}
              </div>
            </div>
            <div className="ml-6 text-right">
              <Button 
                type="default" 
                icon={<EyeOutlined />}
                onClick={() => setBehaviorModalVisible(true)}
                className="mb-2"
              >
                行为监控
              </Button>
              <div className="text-sm text-gray-500">
                解题率: {solveRate}%
              </div>
              <Progress percent={solveRate} size="small" className="w-32" />
            </div>
          </div>

          {/* 行为验证状态 */}
          {behaviorData && (
            <Alert
              message="行为验证已启用"
              description={`当前行为风险评分: ${(behaviorData.riskScore * 100).toFixed(1)}% | 键击采集: ${keystrokeData.length} 次 | 鼠标轨迹: ${mouseData.length} 个点`}
              type={behaviorData.anomalyDetected ? 'warning' : 'success'}
              icon={<SafetyOutlined />}
              showIcon
              className="mb-4"
            />
          )}
        </Card>

        <Row gutter={[24, 24]}>
          {/* 挑战内容 */}
          <Col xs={24} lg={16}>
            <Card title="挑战详情" className="mb-6">
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ 
                  __html: challenge.content?.replace(/\n/g, '<br>') || challenge.description 
                }} />
              </div>
            </Card>

            {/* Flag提交 */}
            <Card title="提交Flag">
              <Form layout="vertical">
                <Form.Item label="Flag">
                  <Input.Group compact>
                    <Input
                      style={{ width: 'calc(100% - 120px)' }}
                      placeholder="请输入你找到的Flag"
                      value={flagInput}
                      onChange={(e) => setFlagInput(e.target.value)}
                      onPressEnter={handleFlagSubmit}
                      disabled={submitting}
                    />
                    <Button 
                      type="primary" 
                      icon={<SendOutlined />}
                      loading={submitting}
                      onClick={handleFlagSubmit}
                      disabled={!flagInput.trim()}
                    >
                      提交
                    </Button>
                  </Input.Group>
                </Form.Item>
              </Form>

              {submitting && (
                <Alert
                  message="正在验证"
                  description="系统正在验证你的Flag并分析行为特征，请稍候..."
                  type="info"
                  showIcon
                  className="mt-4"
                />
              )}
            </Card>
          </Col>

          {/* 侧边栏 */}
          <Col xs={24} lg={8}>
            {/* 提示 */}
            <Card title="提示" className="mb-6">
              {!showHint ? (
                <div className="text-center">
                  <p className="text-gray-500 mb-4">需要一些帮助吗？</p>
                  <Button 
                    type="dashed" 
                    onClick={() => setShowHint(true)}
                    icon={<EyeOutlined />}
                  >
                    查看提示
                  </Button>
                </div>
              ) : (
                <div>
                  {challenge.hints?.map((hint, index) => (
                    <Alert
                      key={index}
                      message={`提示 ${index + 1}`}
                      description={hint}
                      type="info"
                      className="mb-3"
                    />
                  ))}
                </div>
              )}
            </Card>

            {/* 统计信息 */}
            <Card title="统计信息" className="mb-6">
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Statistic
                    title="解决人数"
                    value={challenge.solvedCount}
                    prefix={<CheckCircleOutlined />}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="尝试次数"
                    value={challenge.totalAttempts}
                    prefix={<UserOutlined />}
                  />
                </Col>
                <Col span={24}>
                  <Statistic
                    title="解题率"
                    value={solveRate}
                    suffix="%"
                    prefix={<FlagOutlined />}
                  />
                </Col>
              </Row>
            </Card>

            {/* 提交历史 */}
            <Card title="提交历史">
              {submissions.length === 0 ? (
                <div className="text-center text-gray-500 py-4">
                  暂无提交记录
                </div>
              ) : (
                <Timeline>
                  {submissions.map((submission) => (
                    <Timeline.Item
                      key={submission.id}
                      dot={submission.isCorrect ? 
                        <CheckCircleOutlined className="text-green-500" /> : 
                        <WarningOutlined className="text-red-500" />
                      }
                      color={submission.isCorrect ? 'green' : 'red'}
                    >
                      <div className="text-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className={submission.isCorrect ? 'text-green-600' : 'text-red-600'}>
                            {submission.isCorrect ? '正确' : '错误'}
                          </span>
                          <Badge 
                            count={`${(submission.behaviorScore * 100).toFixed(0)}%`} 
                            style={{ backgroundColor: submission.behaviorScore > 0.8 ? '#52c41a' : '#faad14' }}
                          />
                        </div>
                        <div className="text-gray-500">
                          {dayjs(submission.submissionTime).format('MM-DD HH:mm:ss')}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Flag: {submission.flag.substring(0, 20)}...
                        </div>
                      </div>
                    </Timeline.Item>
                  ))}
                </Timeline>
              )}
            </Card>
          </Col>
        </Row>

        {/* 行为监控模态框 */}
        <Modal
          title="实时行为监控"
          open={behaviorModalVisible}
          onCancel={() => setBehaviorModalVisible(false)}
          footer={null}
          width={800}
        >
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Card title="键击动态" size="small">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>平均按键时长:</span>
                    <span>{behaviorData?.keystrokeDynamics.avgDwellTime}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>平均飞行时间:</span>
                    <span>{behaviorData?.keystrokeDynamics.avgFlightTime}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>打字节奏:</span>
                    <span>{(behaviorData?.keystrokeDynamics.typingRhythm || 0) * 100}%</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    已采集 {keystrokeData.length} 次按键
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="鼠标轨迹" size="small">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>平均移动速度:</span>
                    <span>{behaviorData?.mouseTrajectory.avgSpeed}px/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>加速度变化:</span>
                    <span>{(behaviorData?.mouseTrajectory.acceleration || 0) * 100}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>点击模式:</span>
                    <span>{(behaviorData?.mouseTrajectory.clickPattern || 0) * 100}%</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    已采集 {mouseData.length} 个轨迹点
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="风险评估" size="small">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>综合风险评分:</span>
                      <span className={behaviorData && behaviorData.riskScore < 0.3 ? 'text-green-600' : 'text-orange-600'}>
                        {((behaviorData?.riskScore || 0) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress 
                      percent={(behaviorData?.riskScore || 0) * 100} 
                      status={behaviorData && behaviorData.riskScore < 0.3 ? 'success' : 'active'}
                    />
                  </div>
                  <Alert
                    message={behaviorData?.anomalyDetected ? '检测到异常行为' : '行为模式正常'}
                    type={behaviorData?.anomalyDetected ? 'warning' : 'success'}
                    showIcon
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Modal>
      </div>
    </div>
  );
};

export default ChallengeDetail;