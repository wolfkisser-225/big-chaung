import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Tag, Input, Select, DatePicker, Space, Statistic, Avatar, Tooltip } from 'antd';
import { SearchOutlined, TrophyOutlined, UserOutlined, ClockCircleOutlined, FlagOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { Contest as ContestType } from '../types';
import dayjs from 'dayjs';

const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const Contest: React.FC = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState<ContestType[]>([]);
  const [filteredContests, setFilteredContests] = useState<ContestType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);

  // 初始化空数据
  const mockContests: ContestType[] = [];

  useEffect(() => {
    // 模拟API调用
    setTimeout(() => {
      setContests(mockContests);
      setFilteredContests(mockContests);
      setLoading(false);
    }, 1000);
  }, []);

  // 过滤比赛
  useEffect(() => {
    let filtered = contests;

    // 按状态过滤
    if (statusFilter !== 'all') {
      filtered = filtered.filter(contest => contest.status === statusFilter);
    }

    // 按搜索文本过滤
    if (searchText) {
      filtered = filtered.filter(contest => 
        contest.title.toLowerCase().includes(searchText.toLowerCase()) ||
        contest.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // 按日期范围过滤
    if (dateRange) {
      filtered = filtered.filter(contest => {
        const startTime = dayjs(contest.startTime);
        return startTime.isAfter(dateRange[0]) && startTime.isBefore(dateRange[1]);
      });
    }

    setFilteredContests(filtered);
  }, [contests, statusFilter, searchText, dateRange]);

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

  const formatDateTime = (dateTime: string) => {
    return dayjs(dateTime).format('YYYY-MM-DD HH:mm');
  };

  const getTimeRemaining = (contest: ContestType) => {
    const now = dayjs();
    const start = dayjs(contest.startTime);
    const end = dayjs(contest.endTime);

    if (contest.status === 'upcoming') {
      const diff = start.diff(now);
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return `${days}天${hours}小时后开始`;
      }
    } else if (contest.status === 'running') {
      const diff = end.diff(now);
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}小时${minutes}分钟后结束`;
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            CTF竞赛
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            参加各类网络安全竞赛，提升技能，赢取奖励
          </p>
        </div>

        {/* 搜索和过滤 */}
        <Card className="mb-6">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={12} md={8}>
              <Search
                placeholder="搜索比赛名称或描述"
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="比赛状态"
                size="large"
                value={statusFilter}
                onChange={setStatusFilter}
                className="w-full"
              >
                <Option value="all">全部状态</Option>
                <Option value="upcoming">即将开始</Option>
                <Option value="running">进行中</Option>
                <Option value="ended">已结束</Option>
              </Select>
            </Col>
            <Col xs={24} sm={24} md={10}>
              <RangePicker
                size="large"
                placeholder={['开始日期', '结束日期']}
                value={dateRange}
                onChange={setDateRange}
                className="w-full"
              />
            </Col>
          </Row>
        </Card>

        {/* 比赛统计 */}
        <Row gutter={[24, 24]} className="mb-8">
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="总比赛数"
                value={contests.length}
                prefix={<TrophyOutlined className="text-blue-500" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="进行中"
                value={contests.filter(c => c.status === 'running').length}
                prefix={<ClockCircleOutlined className="text-green-500" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="总参赛人数"
                value={contests.reduce((sum, c) => sum + c.participants, 0)}
                prefix={<UserOutlined className="text-orange-500" />}
              />
            </Card>
          </Col>
        </Row>

        {/* 比赛列表 */}
        <Row gutter={[24, 24]}>
          {filteredContests.map((contest) => {
            const timeRemaining = getTimeRemaining(contest);
            const participationRate = contest.maxParticipants 
              ? Math.round((contest.participants / contest.maxParticipants) * 100)
              : 0;

            return (
              <Col xs={24} lg={12} key={contest.id}>
                <Card
                  className="h-full hover:shadow-lg transition-shadow duration-300"
                  actions={[
                    <Button 
                      type="primary" 
                      icon={<FlagOutlined />}
                      onClick={() => navigate(`/contests/${contest.id}`)}
                      disabled={contest.status === 'ended'}
                    >
                      {contest.status === 'ended' ? '查看结果' : '进入比赛'}
                    </Button>
                  ]}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {contest.title}
                      </h3>
                      <Tag color={getStatusColor(contest.status)}>
                        {getStatusText(contest.status)}
                      </Tag>
                    </div>
                    
                    {timeRemaining && (
                      <div className="text-sm text-orange-600 dark:text-orange-400 mb-2">
                        <ClockCircleOutlined className="mr-1" />
                        {timeRemaining}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {contest.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">开始时间:</span>
                      <span className="font-medium">{formatDateTime(contest.startTime)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">结束时间:</span>
                      <span className="font-medium">{formatDateTime(contest.endTime)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">参赛人数:</span>
                      <div className="flex items-center space-x-2">
                        <Avatar.Group size="small" maxCount={3}>
                          <Avatar icon={<UserOutlined />} />
                          <Avatar icon={<UserOutlined />} />
                          <Avatar icon={<UserOutlined />} />
                        </Avatar.Group>
                        <span className="font-medium">
                          {contest.participants}
                          {contest.maxParticipants && `/${contest.maxParticipants}`}
                        </span>
                      </div>
                    </div>
                    
                    {contest.maxParticipants && (
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-500">报名进度:</span>
                          <span className="font-medium">{participationRate}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${participationRate}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-500 mb-1">奖励设置:</div>
                      <div className="flex flex-wrap gap-1">
                        {contest.prizes.slice(0, 2).map((prize, index) => (
                          <Tag key={index} color="gold" className="text-xs">
                            {prize}
                          </Tag>
                        ))}
                        {contest.prizes.length > 2 && (
                          <Tooltip title={contest.prizes.slice(2).join(', ')}>
                            <Tag color="default" className="text-xs cursor-help">
                              +{contest.prizes.length - 2}项
                            </Tag>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>

        {filteredContests.length === 0 && !loading && (
          <div className="text-center py-16">
            <TrophyOutlined className="text-6xl text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-xl text-gray-500 dark:text-gray-400 mb-2">
              暂无符合条件的比赛
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              请尝试调整搜索条件或等待新的比赛发布
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contest;