import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Alert, Progress, Tag, Table, message, Modal, Form, Input } from 'antd';
import { PlayCircleOutlined, LockOutlined, FlagOutlined, TrophyOutlined, ClockCircleOutlined, SafetyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  description: string;
  solved: boolean;
}

const Training: React.FC = () => {
  const [canAccess, setCanAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  // 模拟训练题目数据
  const mockChallenges: Challenge[] = [
    {
      id: 'train_001',
      title: 'Web基础 - SQL注入入门',
      category: 'Web',
      difficulty: 'Easy',
      points: 100,
      description: '学习基础的SQL注入攻击技术，找到隐藏的flag。',
      solved: false
    },
    {
      id: 'train_002',
      title: 'Crypto基础 - 凯撒密码',
      category: 'Crypto',
      difficulty: 'Easy',
      points: 100,
      description: '破解经典的凯撒密码，获取明文信息。',
      solved: false
    },
    {
      id: 'train_003',
      title: 'Reverse基础 - 简单逆向',
      category: 'Reverse',
      difficulty: 'Medium',
      points: 200,
      description: '分析二进制文件，找到正确的输入获取flag。',
      solved: false
    }
  ];

  useEffect(() => {
    // 检查是否完成行为特征采集
    const behaviorCompleted = localStorage.getItem('behaviorTemplateCompleted');
    setCanAccess(behaviorCompleted === 'true');
    
    if (behaviorCompleted === 'true') {
      setChallenges(mockChallenges);
    }
    
    setLoading(false);
  }, []);

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setModalVisible(true);
  };

  const handleSubmitFlag = (values: { flag: string }) => {
    // 模拟flag验证
    const correctFlags: { [key: string]: string } = {
      'train_001': 'flag{sql_injection_basic}',
      'train_002': 'flag{caesar_cipher_solved}',
      'train_003': 'flag{reverse_engineering_done}'
    };

    if (selectedChallenge && values.flag === correctFlags[selectedChallenge.id]) {
      message.success('恭喜！Flag正确！');
      // 更新题目状态
      setChallenges(prev => prev.map(c => 
        c.id === selectedChallenge.id ? { ...c, solved: true } : c
      ));
      setModalVisible(false);
    } else {
      message.error('Flag错误，请重试！');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'green';
      case 'Medium': return 'orange';
      case 'Hard': return 'red';
      default: return 'default';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web': return 'blue';
      case 'Crypto': return 'purple';
      case 'Reverse': return 'cyan';
      case 'Pwn': return 'red';
      case 'Misc': return 'orange';
      default: return 'default';
    }
  };

  const columns = [
    {
      title: '题目',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record: Challenge) => (
        <div className="flex items-center">
          {record.solved && <FlagOutlined className="text-green-500 mr-2" />}
          <span className={record.solved ? 'line-through text-gray-500' : 'font-medium'}>
            {title}
          </span>
        </div>
      )
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => (
        <Tag color={getCategoryColor(category)}>{category}</Tag>
      )
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (difficulty: string) => (
        <Tag color={getDifficultyColor(difficulty)}>{difficulty}</Tag>
      )
    },
    {
      title: '分值',
      dataIndex: 'points',
      key: 'points',
      render: (points: number) => (
        <span className="font-medium">{points}</span>
      )
    },
    {
      title: '状态',
      dataIndex: 'solved',
      key: 'solved',
      render: (solved: boolean) => (
        <Tag color={solved ? 'green' : 'default'}>
          {solved ? '已解决' : '未解决'}
        </Tag>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Challenge) => (
        <Button 
          type="primary" 
          size="small"
          onClick={() => handleChallengeClick(record)}
          disabled={record.solved}
        >
          {record.solved ? '已完成' : '开始挑战'}
        </Button>
      )
    }
  ];

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">加载中...</div>;
  }

  if (!canAccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <LockOutlined className="text-6xl text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                训练场访问受限
              </h2>
              <Alert
                className="mb-6"
                message="需要完成行为特征采集"
                description="为了确保训练环境的安全性和有效性，您需要先在个人设置页面完成行为特征采集，然后才能进入训练场进行练习。"
                type="warning"
                showIcon
              />
              <div className="space-x-4">
                <Button 
                  type="primary" 
                  onClick={() => navigate('/profile')}
                >
                  前往个人设置
                </Button>
                <Button onClick={() => navigate('/')}>返回首页</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const solvedCount = challenges.filter(c => c.solved).length;
  const totalPoints = challenges.filter(c => c.solved).reduce((sum, c) => sum + c.points, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            CTF训练场
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            通过练习提升您的CTF技能
          </p>
        </div>

        {/* 统计信息 */}
        <Row gutter={[24, 24]} className="mb-6">
          <Col xs={12} sm={6}>
            <Card>
              <div className="text-center">
                <FlagOutlined className="text-2xl text-green-500 mb-2" />
                <div className="text-2xl font-bold">{solvedCount}</div>
                <div className="text-gray-500">已解决</div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <div className="text-center">
                <TrophyOutlined className="text-2xl text-yellow-500 mb-2" />
                <div className="text-2xl font-bold">{totalPoints}</div>
                <div className="text-gray-500">总分数</div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <div className="text-center">
                <ClockCircleOutlined className="text-2xl text-blue-500 mb-2" />
                <div className="text-2xl font-bold">{challenges.length}</div>
                <div className="text-gray-500">总题目</div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <div className="text-center">
                <SafetyOutlined className="text-2xl text-purple-500 mb-2" />
                <div className="text-2xl font-bold">
                  {Math.round((solvedCount / challenges.length) * 100)}%
                </div>
                <div className="text-gray-500">完成率</div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* 进度条 */}
        <Card className="mb-6">
          <h3 className="text-lg font-medium mb-4">训练进度</h3>
          <Progress 
            percent={Math.round((solvedCount / challenges.length) * 100)}
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            format={(percent) => `${solvedCount}/${challenges.length} (${percent}%)`}
          />
        </Card>

        {/* 题目列表 */}
        <Card title="训练题目">
          <Table
            columns={columns}
            dataSource={challenges}
            rowKey="id"
            pagination={false}
          />
        </Card>

        {/* 题目详情模态框 */}
        <Modal
          title={selectedChallenge?.title}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          width={600}
        >
          {selectedChallenge && (
            <div>
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Tag color={getCategoryColor(selectedChallenge.category)}>
                    {selectedChallenge.category}
                  </Tag>
                  <Tag color={getDifficultyColor(selectedChallenge.difficulty)}>
                    {selectedChallenge.difficulty}
                  </Tag>
                  <span className="font-medium">{selectedChallenge.points} 分</span>
                </div>
                <p className="text-gray-600">{selectedChallenge.description}</p>
              </div>
              
              <Alert
                className="mb-4"
                message="提示"
                description="这是一个训练题目，请仔细分析并找到正确的flag。Flag格式通常为 flag{...}"
                type="info"
                showIcon
              />
              
              <Form onFinish={handleSubmitFlag}>
                <Form.Item
                  name="flag"
                  label="Flag"
                  rules={[{ required: true, message: '请输入flag！' }]}
                >
                  <Input placeholder="请输入找到的flag" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    提交Flag
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Training;