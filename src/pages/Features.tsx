import React from 'react';
import { Card, Row, Col } from 'antd';
import { SafetyOutlined, FlagOutlined, TrophyOutlined, SecurityScanOutlined, EyeOutlined, LockOutlined } from '@ant-design/icons';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            平台特色
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            基于多模态行为特征的CTF动态Flag防作弊系统，采用先进技术确保竞赛公平性
          </p>
        </div>

        {/* 核心特色 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            核心技术特色
          </h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafetyOutlined className="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">多模态行为识别</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  采集键击动态、鼠标轨迹等生物特征，生成独特的行为指纹，有效防止代打和作弊行为。
                </p>
                <ul className="text-left text-sm text-gray-500 dark:text-gray-400">
                  <li>• 键击节奏分析</li>
                  <li>• 鼠标轨迹追踪</li>
                  <li>• 行为模式建模</li>
                  <li>• 实时特征比对</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FlagOutlined className="text-3xl text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">动态Flag生成</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  基于用户行为特征动态生成唯一Flag，确保每个参赛者的答案都是独一无二的。
                </p>
                <ul className="text-left text-sm text-gray-500 dark:text-gray-400">
                  <li>• 行为特征熵源</li>
                  <li>• 动态哈希算法</li>
                  <li>• 唯一性保证</li>
                  <li>• 防共享机制</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SecurityScanOutlined className="text-3xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">区块链验证</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  利用区块链技术记录所有提交记录，确保数据不可篡改，提供完整的审计追踪。
                </p>
                <ul className="text-left text-sm text-gray-500 dark:text-gray-400">
                  <li>• 不可篡改记录</li>
                  <li>• 分布式存储</li>
                  <li>• 智能合约验证</li>
                  <li>• 完整审计链</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>

        {/* 技术优势 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            技术优势
          </h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EyeOutlined className="text-xl text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">实时监控</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      实时监控用户行为，及时发现异常操作，确保比赛过程的公平性和透明度。
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LockOutlined className="text-xl text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">安全防护</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      多层安全防护机制，包括数据加密、访问控制和异常检测，保障平台安全。
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        {/* 应用场景 */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            应用场景
          </h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={6}>
              <Card className="text-center h-full">
                <TrophyOutlined className="text-4xl text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">学校竞赛</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  适用于各类校内网络安全竞赛和教学实践
                </p>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card className="text-center h-full">
                <SafetyOutlined className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">企业培训</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  企业网络安全人员技能培训和考核
                </p>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card className="text-center h-full">
                <FlagOutlined className="text-4xl text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">专业认证</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  网络安全专业技能认证和等级考试
                </p>
              </Card>
            </Col>
            <Col xs={24} md={6}>
              <Card className="text-center h-full">
                <SecurityScanOutlined className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">选拔赛事</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  大型网络安全竞赛的选拔和预赛
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Features;