import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Avatar, Statistic, Progress, Table, Tag, Timeline, Tabs, Form, Input, Button, Upload, message, Alert, Badge, Space } from 'antd';
import { UserOutlined, TrophyOutlined, FlagOutlined, ClockCircleOutlined, EditOutlined, UploadOutlined, SafetyOutlined, LineChartOutlined, HistoryOutlined, SettingOutlined } from '@ant-design/icons';
import type { User, FlagSubmission, BehaviorTemplate, Contest } from '../types';
import { UserRole } from '../types';
import dayjs from 'dayjs';

const { TabPane } = Tabs;
const { TextArea } = Input;

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [submissions, setSubmissions] = useState<FlagSubmission[]>([]);
  const [behaviorTemplate, setBehaviorTemplate] = useState<BehaviorTemplate | null>(null);
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // 初始化用户数据 - 管理员账户
  const mockUser: User = {
    id: 'admin',
    username: 'admin',
    email: 'admin@example.com',
    role: UserRole.ADMIN,
    avatar: '',
    createdAt: '2025-01-01 00:00:00',
    bio: '',
    school: '',
    major: '',
    grade: '',
    totalScore: 0,
    solvedChallenges: 0,
    participatedContests: 0,
    ranking: 0,
    registrationTime: '2025-01-01 00:00:00',
    lastLoginTime: '2025-01-15 00:00:00',
    preferences: {
      theme: 'light',
      language: 'zh-CN',
      notifications: true
    }
  };

  // 初始化行为模板数据 - 管理员无需行为模板
  const mockBehaviorTemplate: BehaviorTemplate | null = null;

  // 初始化提交记录 - 清空所有记录
  const mockSubmissions: FlagSubmission[] = [];

  // 初始化参赛记录 - 清空所有记录
  const mockContests: Contest[] = [];

  useEffect(() => {
    // 模拟API调用
    setTimeout(() => {
      // 尝试从本地存储加载用户数据
      const savedUser = localStorage.getItem('userProfile');
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
        } catch (error) {
          setUser(mockUser);
        }
      } else {
        setUser(mockUser);
      }
      
      setSubmissions(mockSubmissions);
      setBehaviorTemplate(mockBehaviorTemplate);
      setContests(mockContests);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading || !user) {
    return <div className="flex justify-center items-center min-h-screen">加载中...</div>;
  }

  const handleSaveProfile = (values: any) => {
    try {
      // 模拟保存到本地存储
      const updatedUser = {
        ...user,
        username: values.username || user?.username,
        email: values.email || user?.email,
        school: values.school || user?.school,
        major: values.major || user?.major,
        grade: values.grade || user?.grade,
        bio: values.bio || user?.bio
      };
      
      localStorage.setItem('userProfile', JSON.stringify(updatedUser));
      setUser(updatedUser);
      message.success('个人信息更新成功！');
      setEditing(false);
    } catch (error) {
      message.error('保存失败，请重试');
    }
  };

  const handleSaveSettings = (values: any) => {
    try {
      // 模拟保存设置到本地存储
      const updatedUser = {
        ...user,
        preferences: {
          theme: values.theme || user?.preferences?.theme || 'light',
          language: values.language || user?.preferences?.language || 'zh-CN',
          notifications: values.notifications === '开启'
        }
      };
      
      localStorage.setItem('userProfile', JSON.stringify(updatedUser));
      setUser(updatedUser);
      message.success('设置保存成功！');
    } catch (error) {
      message.error('保存失败，请重试');
    }
  };

  const submissionColumns = [
    {
      title: '挑战',
      dataIndex: 'challengeId',
      key: 'challengeId',
      render: (challengeId: string) => (
        <span className="font-medium">{challengeId}</span>
      )
    },
    {
      title: '结果',
      dataIndex: 'isCorrect',
      key: 'isCorrect',
      render: (isCorrect: boolean) => (
        <Tag color={isCorrect ? 'green' : 'red'}>
          {isCorrect ? '正确' : '错误'}
        </Tag>
      )
    },
    {
      title: '行为评分',
      dataIndex: 'behaviorScore',
      key: 'behaviorScore',
      render: (score: number) => (
        <div>
          <div className="text-sm">{(score * 100).toFixed(1)}%</div>
          <Progress percent={score * 100} size="small" />
        </div>
      )
    },
    {
      title: '验证状态',
      dataIndex: 'verificationStatus',
      key: 'verificationStatus',
      render: (status: string) => {
        const statusMap = {
          'verified': { color: 'green', text: '已验证' },
          'failed': { color: 'red', text: '验证失败' },
          'pending': { color: 'orange', text: '待验证' }
        };
        const config = statusMap[status as keyof typeof statusMap] || { color: 'default', text: status };
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    },
    {
      title: '提交时间',
      dataIndex: 'submissionTime',
      key: 'submissionTime',
      render: (time: string) => (
        <span className="text-sm text-gray-500">
          {dayjs(time).format('MM-DD HH:mm')}
        </span>
      )
    }
  ];

  const contestColumns = [
    {
      title: '比赛名称',
      dataIndex: 'title',
      key: 'title',
      render: (title: string) => (
        <span className="font-medium">{title}</span>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusMap = {
          'running': { color: 'green', text: '进行中' },
          'upcoming': { color: 'blue', text: '即将开始' },
          'ended': { color: 'gray', text: '已结束' }
        };
        const config = statusMap[status as keyof typeof statusMap] || { color: 'default', text: status };
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime',
      render: (time: string) => (
        <span className="text-sm">
          {dayjs(time).format('YYYY-MM-DD HH:mm')}
        </span>
      )
    },
    {
      title: '参赛人数',
      dataIndex: 'participants',
      key: 'participants',
      render: (participants: number, record: Contest) => (
        <span>{participants}/{record.maxParticipants}</span>
      )
    }
  ];

  const correctSubmissions = submissions.filter(s => s.isCorrect);
  const avgBehaviorScore = submissions.length > 0 
    ? submissions.reduce((sum, s) => sum + s.behaviorScore, 0) / submissions.length 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        {/* 用户基本信息 */}
        <Card className="mb-6">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} sm={6} className="text-center">
              <Avatar size={120} icon={<UserOutlined />} className="mb-4" />
              <Upload showUploadList={false}>
                <Button icon={<UploadOutlined />} size="small">
                  更换头像
                </Button>
              </Upload>
            </Col>
            <Col xs={24} sm={18}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {user.username}
                  </h2>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300">
                    <div>📧 {user.email}</div>
                    <div>🏫 {user.school} - {user.major}</div>
                    <div>📚 {user.grade}</div>
                    <div>📅 注册时间: {dayjs(user.registrationTime).format('YYYY-MM-DD')}</div>
                  </div>
                </div>
                <Button 
                  type="primary" 
                  icon={<EditOutlined />}
                  onClick={() => setEditing(!editing)}
                >
                  {editing ? '取消编辑' : '编辑资料'}
                </Button>
              </div>
              
              {editing ? (
                <Form layout="vertical" onFinish={handleSaveProfile} initialValues={{
                  username: user.username,
                  email: user.email,
                  school: user.school,
                  major: user.major,
                  grade: user.grade,
                  bio: user.bio
                }}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="用户名" name="username">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="邮箱" name="email">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="学校" name="school">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="专业" name="major">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="年级" name="grade">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="个人简介" name="bio">
                        <TextArea rows={3} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button type="primary" htmlType="submit">
                    保存更改
                  </Button>
                </Form>
              ) : (
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {user.bio}
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </Card>

        {/* 统计数据 */}
        <Row gutter={[24, 24]} className="mb-6">
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="总积分"
                value={user.totalScore}
                prefix={<TrophyOutlined className="text-yellow-500" />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="解题数量"
                value={user.solvedChallenges}
                prefix={<FlagOutlined className="text-green-500" />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="参赛次数"
                value={user.participatedContests}
                prefix={<ClockCircleOutlined className="text-blue-500" />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="全站排名"
                value={user.ranking}
                prefix={<LineChartOutlined className="text-orange-500" />}
                valueStyle={{ color: '#fa8c16' }}
              />
            </Card>
          </Col>
        </Row>

        {/* 详细信息标签页 */}
        <Card>
          <Tabs activeKey={activeTab} onChange={setActiveTab}>
            <TabPane tab="概览" key="overview">
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <Card title="最近活动" size="small">
                    <Timeline>
                      {correctSubmissions.slice(0, 5).map((submission) => (
                        <Timeline.Item
                          key={submission.id}
                          dot={<FlagOutlined className="text-green-500" />}
                          color="green"
                        >
                          <div>
                            <div className="font-medium">解决了挑战 {submission.challengeId}</div>
                            <div className="text-sm text-gray-500">
                              {dayjs(submission.submissionTime).format('MM-DD HH:mm')}
                            </div>
                            <div className="text-xs text-gray-400">
                              行为评分: {(submission.behaviorScore * 100).toFixed(1)}%
                            </div>
                          </div>
                        </Timeline.Item>
                      ))}
                    </Timeline>
                  </Card>
                </Col>
                <Col xs={24} lg={12}>
                  <Card title="技能分布" size="small">
                    <div className="text-center py-8">
                      <FlagOutlined className="text-4xl text-gray-300 mb-4" />
                      <h3 className="text-lg text-gray-500 mb-2">暂无技能数据</h3>
                      <p className="text-gray-400">参与更多比赛和训练来建立你的技能分布</p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="提交记录" key="submissions">
              <div className="mb-4">
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <Statistic
                      title="总提交数"
                      value={submissions.length}
                      prefix={<HistoryOutlined />}
                    />
                  </Col>
                  <Col span={6}>
                    <Statistic
                      title="正确提交"
                      value={correctSubmissions.length}
                      prefix={<FlagOutlined />}
                      valueStyle={{ color: '#52c41a' }}
                    />
                  </Col>
                  <Col span={6}>
                    <Statistic
                      title="正确率"
                      value={Math.round((correctSubmissions.length / submissions.length) * 100)}
                      suffix="%"
                      valueStyle={{ color: '#1890ff' }}
                    />
                  </Col>
                  <Col span={6}>
                    <Statistic
                      title="平均行为评分"
                      value={(avgBehaviorScore * 100).toFixed(1)}
                      suffix="%"
                      prefix={<SafetyOutlined />}
                      valueStyle={{ color: '#722ed1' }}
                    />
                  </Col>
                </Row>
              </div>
              <Table
                columns={submissionColumns}
                dataSource={submissions}
                rowKey="id"
                pagination={{ pageSize: 10 }}
              />
            </TabPane>

            <TabPane tab="参赛记录" key="contests">
              <Table
                columns={contestColumns}
                dataSource={contests}
                rowKey="id"
                pagination={false}
              />
            </TabPane>

            <TabPane tab="行为模板" key="behavior">
              {behaviorTemplate ? (
                <Row gutter={[24, 24]}>
                  <Col xs={24} lg={12}>
                    <Card title="键击动态特征" size="small">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>平均按键时长:</span>
                          <span className="font-medium">{behaviorTemplate.keystrokeDynamics.avgDwellTime}ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span>平均飞行时间:</span>
                          <span className="font-medium">{behaviorTemplate.keystrokeDynamics.avgFlightTime}ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span>打字节奏:</span>
                          <span className="font-medium">{(behaviorTemplate.keystrokeDynamics.typingRhythm * 100).toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>压力变化:</span>
                          <span className="font-medium">{(behaviorTemplate.keystrokeDynamics.pressureVariation * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Card title="鼠标轨迹特征" size="small">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>平均移动速度:</span>
                          <span className="font-medium">{behaviorTemplate.mouseTrajectory.avgSpeed}px/s</span>
                        </div>
                        <div className="flex justify-between">
                          <span>加速度变化:</span>
                          <span className="font-medium">{(behaviorTemplate.mouseTrajectory.acceleration * 100).toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>点击模式:</span>
                          <span className="font-medium">{(behaviorTemplate.mouseTrajectory.clickPattern * 100).toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>移动平滑度:</span>
                          <span className="font-medium">{(behaviorTemplate.mouseTrajectory.movementSmoothing * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24}>
                    <Card title="模板信息" size="small">
                      <Row gutter={[16, 16]}>
                        <Col span={6}>
                          <Statistic
                            title="样本数量"
                            value={behaviorTemplate.sampleCount}
                            prefix={<HistoryOutlined />}
                          />
                        </Col>
                        <Col span={6}>
                          <Statistic
                            title="准确率"
                            value={(behaviorTemplate.accuracy * 100).toFixed(1)}
                            suffix="%"
                            prefix={<SafetyOutlined />}
                            valueStyle={{ color: '#52c41a' }}
                          />
                        </Col>
                        <Col span={6}>
                          <Statistic
                            title="创建时间"
                            value={dayjs(behaviorTemplate.createdAt).format('YYYY-MM-DD')}
                            prefix={<ClockCircleOutlined />}
                          />
                        </Col>
                        <Col span={6}>
                          <Statistic
                            title="更新时间"
                            value={dayjs(behaviorTemplate.updatedAt).format('YYYY-MM-DD')}
                            prefix={<ClockCircleOutlined />}
                          />
                        </Col>
                      </Row>
                      <Alert
                        className="mt-4"
                        message="行为模板状态"
                        description={`当前模板${behaviorTemplate.isActive ? '已激活' : '未激活'}，基于${behaviorTemplate.sampleCount}个样本训练，准确率达到${(behaviorTemplate.accuracy * 100).toFixed(1)}%。`}
                        type={behaviorTemplate.isActive ? 'success' : 'warning'}
                        showIcon
                      />
                    </Card>
                  </Col>
                </Row>
              ) : (
                <div className="text-center py-8">
                  <SafetyOutlined className="text-6xl text-gray-300 mb-4" />
                  <h3 className="text-xl text-gray-500 mb-2">暂无行为模板</h3>
                  <p className="text-gray-400 mb-4">参与更多比赛来建立你的行为特征模板</p>
                  <Button type="primary">开始建立模板</Button>
                </div>
              )}
            </TabPane>

            <TabPane tab="设置" key="settings">
              <Card title="偏好设置" size="small">
                <Form layout="vertical" onFinish={handleSaveSettings} initialValues={{
                  theme: user.preferences?.theme || 'light',
                  language: user.preferences?.language || 'zh-CN',
                  notifications: user.preferences?.notifications ? '开启' : '关闭'
                }}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item label="主题" name="theme">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="语言" name="language">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="通知" name="notifications">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button type="primary" icon={<SettingOutlined />} htmlType="submit">
                    保存设置
                  </Button>
                </Form>
              </Card>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Profile;