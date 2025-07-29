import React, { useState } from 'react';
import { Card, Row, Col, Button, Tag, Progress, Tabs, List, Avatar } from 'antd';
import { TrophyOutlined, FlagOutlined, ClockCircleOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;

interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  solved: boolean;
  description: string;
}

const Training: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 训练题目数据 - 已清空
  const challenges: Challenge[] = [];

  const categories = [
    { key: 'all', label: '全部', count: challenges.length },
    { key: 'web', label: 'Web安全', count: challenges.filter(c => c.category === 'web').length },
    { key: 'pwn', label: '二进制漏洞', count: challenges.filter(c => c.category === 'pwn').length },
    { key: 'crypto', label: '密码学', count: challenges.filter(c => c.category === 'crypto').length },
    { key: 'reverse', label: '逆向工程', count: challenges.filter(c => c.category === 'reverse').length },
    { key: 'misc', label: '杂项', count: challenges.filter(c => c.category === 'misc').length }
  ];

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

  const filteredChallenges = selectedCategory === 'all' 
    ? challenges 
    : challenges.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            训练场
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            通过练习各种类型的安全题目，提升你的网络安全技能
          </p>
        </div>

        {/* 统计信息 */}
        <Row gutter={[16, 16]} className="mb-8">
          <Col xs={24} sm={6}>
            <Card>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{challenges.length}</div>
                <div className="text-gray-500">总题目数</div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-gray-500">已解决</div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">0</div>
                <div className="text-gray-500">总积分</div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={6}>
            <Card>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">0%</div>
                <div className="text-gray-500">完成率</div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* 分类筛选 */}
        <Card className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.key}
                type={selectedCategory === category.key ? 'primary' : 'default'}
                onClick={() => setSelectedCategory(category.key)}
                className="mb-2"
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </Card>

        {/* 题目列表 */}
        <Row gutter={[16, 16]}>
          {filteredChallenges.map(challenge => (
            <Col xs={24} md={12} lg={8} key={challenge.id}>
              <Card
                hoverable
                className="h-full"
                actions={[
                  <Button 
                    type="primary" 
                    onClick={() => navigate(`/training/${challenge.id}`)}
                  >
                    开始挑战
                  </Button>
                ]}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{challenge.title}</h3>
                    {challenge.solved && (
                      <StarOutlined className="text-yellow-500" />
                    )}
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Tag color="blue">{challenge.category.toUpperCase()}</Tag>
                    <Tag color={getDifficultyColor(challenge.difficulty)}>
                      {getDifficultyText(challenge.difficulty)}
                    </Tag>
                    <Tag color="gold">{challenge.points}分</Tag>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {challenge.description}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredChallenges.length === 0 && (
          <Card className="text-center py-12">
            <FlagOutlined className="text-4xl text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-500 mb-2">暂无题目</h3>
            <p className="text-gray-400">该分类下暂时没有可用的训练题目</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Training;