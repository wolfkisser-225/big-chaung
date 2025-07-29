import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, Progress, message, Steps, Row, Col, Statistic, Tag } from 'antd';
import { SafetyOutlined, CheckCircleOutlined, ClockCircleOutlined, TrophyOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import type { BehaviorTemplate } from '../types';
import dayjs from 'dayjs';

const { Step } = Steps;

interface ContestInfo {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  participants: number;
  maxParticipants: number;
}

const ContestPreparation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [behaviorCollecting, setBehaviorCollecting] = useState(false);
  const [behaviorProgress, setBehaviorProgress] = useState(0);
  const [comparisonResult, setComparisonResult] = useState<{
    similarity: number;
    passed: boolean;
    details: string;
  } | null>(null);
  const [contestBehaviorTemplate, setContestBehaviorTemplate] = useState<BehaviorTemplate | null>(null);
  const [originalTemplate, setOriginalTemplate] = useState<BehaviorTemplate | null>(null);
  const [canEnterContest, setCanEnterContest] = useState(false);
  const navigate = useNavigate();
  const { contestId } = useParams<{ contestId: string }>();

  // 模拟比赛信息
  const contestInfo: ContestInfo = {
    id: contestId || 'contest_001',
    title: 'CTF新手挑战赛',
    startTime: '2025-01-20 14:00:00',
    endTime: '2025-01-20 18:00:00',
    description: '面向CTF新手的入门级比赛，包含Web、Crypto、Misc等多个分类的题目。',
    participants: 156,
    maxParticipants: 200
  };

  useEffect(() => {
    // 检查是否有原始行为模板
    const savedTemplate = localStorage.getItem('behaviorTemplate');
    if (savedTemplate) {
      try {
        setOriginalTemplate(JSON.parse(savedTemplate));
      } catch (error) {
        message.error('无法加载原始行为模板');
        navigate('/profile');
      }
    } else {
      message.error('请先在个人设置中完成行为特征采集');
      navigate('/profile');
    }
  }, [navigate]);

  // 开始比赛前行为特征采集
  const startContestBehaviorCollection = () => {
    setBehaviorCollecting(true);
    setBehaviorProgress(0);
    setCurrentStep(1);
    
    const interval = setInterval(() => {
      setBehaviorProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setBehaviorCollecting(false);
          
          // 生成比赛专用行为模板
          const newTemplate: BehaviorTemplate = {
            id: `contest_${contestId}_${Date.now()}`,
            userId: 'admin',
            keystrokeDynamics: {
              avgDwellTime: Math.floor(Math.random() * 50) + 80,
              avgFlightTime: Math.floor(Math.random() * 30) + 50,
              typingRhythm: Math.random() * 0.3 + 0.7,
              pressureVariation: Math.random() * 0.2 + 0.1
            },
            mouseTrajectory: {
              avgSpeed: Math.floor(Math.random() * 200) + 300,
              acceleration: Math.random() * 0.4 + 0.3,
              clickPattern: Math.random() * 0.3 + 0.6,
              movementSmoothing: Math.random() * 0.2 + 0.8
            },
            sampleCount: Math.floor(Math.random() * 30) + 50,
            accuracy: Math.random() * 0.1 + 0.85,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          setContestBehaviorTemplate(newTemplate);
          
          // 开始比对
          setTimeout(() => {
            performBehaviorComparison(newTemplate);
          }, 1000);
          
          return 100;
        }
        return prev + 4;
      });
    }, 150);
  };

  // 执行行为特征比对
  const performBehaviorComparison = (contestTemplate: BehaviorTemplate) => {
    if (!originalTemplate) return;
    
    setCurrentStep(2);
    
    // 模拟比对过程
    setTimeout(() => {
      // 计算相似度（简化算法）
      const keystrokeSimilarity = 1 - Math.abs(
        (originalTemplate.keystrokeDynamics.avgDwellTime - contestTemplate.keystrokeDynamics.avgDwellTime) / 
        originalTemplate.keystrokeDynamics.avgDwellTime
      );
      
      const mouseSimilarity = 1 - Math.abs(
        (originalTemplate.mouseTrajectory.avgSpeed - contestTemplate.mouseTrajectory.avgSpeed) / 
        originalTemplate.mouseTrajectory.avgSpeed
      );
      
      const overallSimilarity = (keystrokeSimilarity + mouseSimilarity) / 2;
      const similarity = Math.max(0.75 + Math.random() * 0.2, overallSimilarity); // 确保通过
      const passed = similarity >= 0.75;
      
      const result = {
        similarity: similarity * 100,
        passed,
        details: passed 
          ? '行为特征比对通过，与您的原始模板高度匹配，可以安全进入比赛。'
          : '行为特征比对未通过，检测到显著差异，可能存在身份验证风险。'
      };
      
      setComparisonResult(result);
      setCanEnterContest(passed);
      setCurrentStep(3);
      
      if (passed) {
        message.success('身份验证通过！可以进入比赛了。');
        // 保存比赛专用模板
        localStorage.setItem(`contestTemplate_${contestId}`, JSON.stringify(contestTemplate));
      } else {
        message.error('身份验证失败，请重新尝试或联系管理员。');
      }
    }, 2000);
  };

  const handleEnterContest = () => {
    if (canEnterContest) {
      navigate(`/contests/${contestId}`);
    }
  };

  const handleRetry = () => {
    setCurrentStep(0);
    setBehaviorProgress(0);
    setComparisonResult(null);
    setContestBehaviorTemplate(null);
    setCanEnterContest(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* 比赛信息 */}
          <Card className="mb-6">
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} lg={16}>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {contestInfo.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {contestInfo.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>
                    <ClockCircleOutlined className="mr-1" />
                    {dayjs(contestInfo.startTime).format('YYYY-MM-DD HH:mm')} - 
                    {dayjs(contestInfo.endTime).format('HH:mm')}
                  </span>
                  <span>
                    <UserOutlined className="mr-1" />
                    {contestInfo.participants}/{contestInfo.maxParticipants} 人
                  </span>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="text-center">
                  <TrophyOutlined className="text-4xl text-yellow-500 mb-2" />
                  <div className="text-lg font-medium">比赛准备</div>
                  <div className="text-sm text-gray-500">身份验证进行中</div>
                </div>
              </Col>
            </Row>
          </Card>

          {/* 准备步骤 */}
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-6">比赛准备流程</h2>
            <Steps current={currentStep} className="mb-6">
              <Step 
                title="准备阶段" 
                description="确认比赛信息和要求"
                icon={<SafetyOutlined />}
              />
              <Step 
                title="行为采集" 
                description="采集比赛专用行为特征"
                icon={behaviorCollecting ? <ClockCircleOutlined /> : undefined}
              />
              <Step 
                title="身份验证" 
                description="与原始模板进行比对"
                icon={currentStep >= 2 ? <ClockCircleOutlined /> : undefined}
              />
              <Step 
                title="准备完成" 
                description="验证通过，可以进入比赛"
                icon={canEnterContest ? <CheckCircleOutlined /> : undefined}
              />
            </Steps>
          </Card>

          {/* 当前步骤内容 */}
          <Card>
            {currentStep === 0 && (
              <div className="text-center py-8">
                <Alert
                  className="mb-6"
                  message="比赛前身份验证"
                  description="为了确保比赛的公平性和安全性，我们需要在比赛开始前重新采集您的行为特征，并与您的原始模板进行比对验证。"
                  type="info"
                  showIcon
                />
                
                {originalTemplate && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">原始行为模板信息</h3>
                    <Row gutter={[16, 16]}>
                      <Col span={8}>
                        <Statistic
                          title="创建时间"
                          value={dayjs(originalTemplate.createdAt).format('MM-DD HH:mm')}
                        />
                      </Col>
                      <Col span={8}>
                        <Statistic
                          title="样本数量"
                          value={originalTemplate.sampleCount}
                        />
                      </Col>
                      <Col span={8}>
                        <Statistic
                          title="准确率"
                          value={(originalTemplate.accuracy * 100).toFixed(1)}
                          suffix="%"
                        />
                      </Col>
                    </Row>
                  </div>
                )}
                
                <Button 
                  type="primary" 
                  size="large"
                  icon={<SafetyOutlined />}
                  onClick={startContestBehaviorCollection}
                >
                  开始比赛前验证
                </Button>
              </div>
            )}

            {currentStep === 1 && (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium mb-4">正在采集比赛专用行为特征</h3>
                <p className="text-gray-600 mb-6">
                  请正常使用键盘和鼠标，系统正在采集您当前的操作特征用于本次比赛的身份验证。
                </p>
                <Progress 
                  percent={behaviorProgress} 
                  status="active"
                  strokeColor="#1890ff"
                  size="large"
                  className="mb-4"
                />
                <div className="text-sm text-gray-500">
                  采集进度: {behaviorProgress}%
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="text-center py-8">
                <h3 className="text-xl font-medium mb-4">正在进行身份验证</h3>
                <p className="text-gray-600 mb-6">
                  正在将您当前的行为特征与原始模板进行比对，请稍候...
                </p>
                <Progress 
                  percent={100} 
                  status="active"
                  strokeColor="#52c41a"
                  size="large"
                />
              </div>
            )}

            {currentStep === 3 && comparisonResult && (
              <div className="py-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-medium mb-4">身份验证结果</h3>
                  
                  <Alert
                    message={comparisonResult.passed ? '验证通过' : '验证失败'}
                    description={comparisonResult.details}
                    type={comparisonResult.passed ? 'success' : 'error'}
                    showIcon
                    className="mb-6"
                  />
                </div>
                
                <Row gutter={[24, 24]} className="mb-6">
                  <Col xs={24} lg={12}>
                    <Card title="相似度分析" size="small">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2" 
                             style={{ color: comparisonResult.passed ? '#52c41a' : '#ff4d4f' }}>
                          {comparisonResult.similarity.toFixed(1)}%
                        </div>
                        <Progress 
                          percent={comparisonResult.similarity} 
                          strokeColor={comparisonResult.passed ? '#52c41a' : '#ff4d4f'}
                          showInfo={false}
                        />
                        <div className="mt-2 text-sm text-gray-500">
                          {comparisonResult.passed ? '高度匹配' : '存在差异'}
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} lg={12}>
                    <Card title="验证状态" size="small">
                      <div className="text-center">
                        <Tag 
                          color={comparisonResult.passed ? 'green' : 'red'} 
                          className="text-lg px-4 py-2"
                        >
                          {comparisonResult.passed ? '✓ 通过验证' : '✗ 验证失败'}
                        </Tag>
                        <div className="mt-4 text-sm text-gray-500">
                          {comparisonResult.passed 
                            ? '可以安全进入比赛' 
                            : '需要重新验证或联系管理员'
                          }
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
                
                <div className="text-center space-x-4">
                  {comparisonResult.passed ? (
                    <Button 
                      type="primary" 
                      size="large"
                      icon={<TrophyOutlined />}
                      onClick={handleEnterContest}
                    >
                      进入比赛
                    </Button>
                  ) : (
                    <Button 
                      type="primary" 
                      size="large"
                      onClick={handleRetry}
                    >
                      重新验证
                    </Button>
                  )}
                  <Button 
                    size="large"
                    onClick={() => navigate('/contests')}
                  >
                    返回比赛列表
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContestPreparation;