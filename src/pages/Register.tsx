import React, { useState } from 'react';
import { Form, Input, Button, Card, Select, message, Progress, Alert } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  inviteCode?: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [behaviorCollecting, setBehaviorCollecting] = useState(false);
  const [behaviorProgress, setBehaviorProgress] = useState(0);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // 模拟行为特征采集
  const startBehaviorCollection = () => {
    setBehaviorCollecting(true);
    setBehaviorProgress(0);
    
    const interval = setInterval(() => {
      setBehaviorProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setBehaviorCollecting(false);
          message.success('行为特征采集完成！');
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const onFinish = async (values: RegisterForm) => {
    setLoading(true);
    try {
      // 检查密码确认
      if (values.password !== values.confirmPassword) {
        message.error('两次输入的密码不一致！');
        return;
      }

      // 检查行为特征是否采集完成
      if (behaviorProgress < 100) {
        message.warning('请先完成行为特征采集！');
        return;
      }

      // 模拟注册API调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      message.success('注册成功！请登录您的账号。');
      navigate('/login');
    } catch (error) {
      message.error('注册失败，请重试！');
    } finally {
      setLoading(false);
    }
  };

  const validatePassword = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error('请输入密码！'));
    }
    if (value.length < 8) {
      return Promise.reject(new Error('密码至少8个字符！'));
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      return Promise.reject(new Error('密码必须包含大小写字母和数字！'));
    }
    return Promise.resolve();
  };

  const validateConfirmPassword = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error('请确认密码！'));
    }
    if (value !== form.getFieldValue('password')) {
      return Promise.reject(new Error('两次输入的密码不一致！'));
    }
    return Promise.resolve();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            CTF防作弊平台
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            注册账号并完成行为特征采集
          </p>
        </div>

        <Card className="shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              用户注册
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              创建您的账号以参加CTF竞赛
            </p>
          </div>

          {/* 行为特征采集提示 */}
          <Alert
            message="行为特征采集"
            description="为了确保比赛的公平性，我们需要采集您的键击和鼠标行为特征作为身份验证的依据。"
            type="info"
            showIcon
            className="mb-6"
          />

          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[
                { required: true, message: '请输入用户名！' },
                { min: 3, max: 20, message: '用户名长度为3-20个字符！' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线！' }
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="请输入用户名"
                autoComplete="username"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="邮箱"
              rules={[
                { required: true, message: '请输入邮箱！' },
                { type: 'email', message: '请输入有效的邮箱地址！' }
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="请输入邮箱地址"
                autoComplete="email"
              />
            </Form.Item>

            <Form.Item
              name="role"
              label="用户角色"
              rules={[{ required: true, message: '请选择用户角色！' }]}
            >
              <Select placeholder="请选择您的角色">
                <Option value="participant">参赛选手</Option>
                <Option value="organizer">比赛组织者</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="password"
              label="密码"
              rules={[{ validator: validatePassword }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="请输入密码"
                autoComplete="new-password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="确认密码"
              rules={[{ validator: validateConfirmPassword }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="请再次输入密码"
                autoComplete="new-password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <Form.Item
              name="inviteCode"
              label="邀请码（可选）"
            >
              <Input
                placeholder="如有邀请码请输入"
              />
            </Form.Item>

            {/* 行为特征采集区域 */}
            <div className="mb-6 p-4 border border-dashed border-gray-300 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                行为特征采集
              </h4>
              {!behaviorCollecting && behaviorProgress === 0 && (
                <Button 
                  type="dashed" 
                  onClick={startBehaviorCollection}
                  className="w-full"
                >
                  开始采集行为特征
                </Button>
              )}
              {(behaviorCollecting || behaviorProgress > 0) && (
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {behaviorCollecting ? '正在采集行为特征...' : '行为特征采集完成'}
                  </div>
                  <Progress 
                    percent={behaviorProgress} 
                    status={behaviorCollecting ? 'active' : 'success'}
                    strokeColor={behaviorProgress === 100 ? '#52c41a' : '#1890ff'}
                  />
                </div>
              )}
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                disabled={behaviorProgress < 100}
                className="w-full h-12 text-lg font-medium"
              >
                {loading ? '注册中...' : '注册账号'}
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center">
            <span className="text-gray-500 dark:text-gray-400">
              已有账号？
            </span>
            <Link 
              to="/login" 
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 ml-1"
            >
              立即登录
            </Link>
          </div>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>注册即表示您同意我们的</p>
          <div className="space-x-2">
            <Link to="/terms" className="text-blue-600 hover:text-blue-500">
              服务条款
            </Link>
            <span>和</span>
            <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
              隐私政策
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;