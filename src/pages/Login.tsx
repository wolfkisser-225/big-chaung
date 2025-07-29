import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Checkbox, message, Divider, Row, Col, Image } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, MailOutlined, ReloadOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI, handleApiError } from '../utils/api';
import { LoginRequest } from '../types';
import { useAuthStore } from '../stores/authStore';

interface LoginForm extends LoginRequest {
  remember: boolean;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [captchaData, setCaptchaData] = useState<{ captchaId: string; captchaImage: string } | null>(null);
  const [emailVerifyId, setEmailVerifyId] = useState<string>('');
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { login } = useAuthStore();

  // 获取图片验证码
  const getCaptcha = async () => {
    setCaptchaLoading(true);
    try {
      const response = await authAPI.getCaptcha();
      setCaptchaData(response);
    } catch (error) {
      message.error('获取验证码失败');
    } finally {
      setCaptchaLoading(false);
    }
  };

  // 发送邮箱验证码
  const sendEmailCode = async () => {
    const username = form.getFieldValue('username');
    if (!username) {
      message.error('请先输入用户名');
      return;
    }

    if (!captchaData || !form.getFieldValue('captchaCode')) {
      message.error('请先完成图片验证码');
      return;
    }

    setEmailLoading(true);
    try {
      // 这里需要根据用户名获取邮箱，暂时使用用户名作为邮箱
      const response = await authAPI.sendEmailCode({
        email: username.includes('@') ? username : `${username}@example.com`,
        purpose: 'login'
      });
      setEmailVerifyId(response.verifyId);
      message.success('验证码已发送到您的邮箱');
      
      // 开始倒计时
      setCountdown(60);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      message.error('发送验证码失败');
    } finally {
      setEmailLoading(false);
    }
  };

  // 页面加载时获取验证码
  useEffect(() => {
    getCaptcha();
  }, []);

  const onFinish = async (values: LoginForm) => {
    if (!captchaData) {
      message.error('请先获取图片验证码');
      return;
    }

    if (!emailVerifyId) {
      message.error('请先获取邮箱验证码');
      return;
    }

    setLoading(true);
    try {
      const loginData: LoginRequest = {
        username: values.username,
        password: values.password,
        captchaId: captchaData.captchaId,
        captchaCode: values.captchaCode,
        emailVerifyId: emailVerifyId,
        emailCode: values.emailCode
      };
      
      const response = await authAPI.login(loginData);
      
      message.success(response.message || '登录成功！');
      
      // 使用store管理用户状态
      login(response.user, response.token);
      
      // 如果选择了记住我，存储到localStorage
      if (values.remember) {
        localStorage.setItem('remember_user', values.username);
      } else {
        localStorage.removeItem('remember_user');
      }
      
      navigate('/');
    } catch (error) {
      const errorMessage = handleApiError(error);
      message.error(errorMessage);
      // 验证失败后重新获取验证码
      getCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            CTF防作弊平台
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            基于多模态行为特征的安全认证
          </p>
        </div>

        <Card className="shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              用户登录
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              请输入您的账号和密码
            </p>
          </div>

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[
                { required: true, message: '请输入用户名！' },
                { min: 3, message: '用户名至少3个字符！' }
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="请输入用户名"
                autoComplete="username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="密码"
              rules={[
                { required: true, message: '请输入密码！' },
                { min: 6, message: '密码至少6个字符！' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="请输入密码"
                autoComplete="current-password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            {/* 图片验证码 */}
            <Form.Item
              name="captchaCode"
              label="图片验证码"
              rules={[{ required: true, message: '请输入图片验证码！' }]}
            >
              <Row gutter={8}>
                <Col span={14}>
                  <Input placeholder="请输入验证码" />
                </Col>
                <Col span={10}>
                  <div className="flex items-center space-x-2">
                    {captchaData && (
                      <Image
                        src={`data:image/png;base64,${captchaData.captchaImage}`}
                        alt="验证码"
                        width={100}
                        height={40}
                        preview={false}
                        className="border rounded cursor-pointer"
                        onClick={getCaptcha}
                      />
                    )}
                    <Button
                      icon={<ReloadOutlined />}
                      onClick={getCaptcha}
                      loading={captchaLoading}
                      size="small"
                    />
                  </div>
                </Col>
              </Row>
            </Form.Item>

            {/* 邮箱验证码 */}
            <Form.Item
              name="emailCode"
              label="邮箱验证码"
              rules={[{ required: true, message: '请输入邮箱验证码！' }]}
            >
              <Row gutter={8}>
                <Col span={14}>
                  <Input
                    prefix={<MailOutlined className="text-gray-400" />}
                    placeholder="请输入邮箱验证码"
                  />
                </Col>
                <Col span={10}>
                  <Button
                    onClick={sendEmailCode}
                    loading={emailLoading}
                    disabled={countdown > 0}
                    className="w-full"
                  >
                    {countdown > 0 ? `${countdown}s` : '获取验证码'}
                  </Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <div className="flex items-center justify-between">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
                <Link 
                  to="/forgot-password" 
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  忘记密码？
                </Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 text-lg font-medium"
              >
                {loading ? '登录中...' : '登录'}
              </Button>
            </Form.Item>
          </Form>

          <Divider>或</Divider>

          <div className="text-center">
            <span className="text-gray-500 dark:text-gray-400">
              还没有账号？
            </span>
            <Link 
              to="/register" 
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 ml-1"
            >
              立即注册
            </Link>
          </div>

          {/* 测试账号提示 */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
              测试账号
            </h4>
            <div className="text-sm text-blue-600 dark:text-blue-300">
              <div>用户名: admin</div>
              <div>密码: admin123</div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>登录即表示您同意我们的</p>
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

export default Login;