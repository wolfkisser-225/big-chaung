import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Alert, Progress, Select, message, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { BehaviorTemplate, KeystrokeData, MouseData, RegisterRequest, UserRole } from '../types';
import { authAPI, handleApiError } from '../utils/api';

const { Option } = Select;

interface RegisterForm extends RegisterRequest {
  confirmPassword: string;
  inviteCode?: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  // 移除行为特征采集相关状态
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailVerifyId, setEmailVerifyId] = useState<string>('');
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // 发送邮箱验证码
  const sendEmailCode = async () => {
    const email = form.getFieldValue('email');
    if (!email) {
      message.error('请先输入邮箱地址');
      return;
    }

    setEmailLoading(true);
    try {
      console.log('=== 发送邮箱验证码 ===');
      console.log('邮箱地址:', email);
      
      const response = await authAPI.sendEmailCode({
        email: email,
        purpose: 'register'
      });
      
      console.log('API响应:', response);
      console.log('response.emailVerifyId:', response.emailVerifyId);
      
      setEmailVerifyId(response.emailVerifyId);
      
      console.log('设置的 emailVerifyId:', response.emailVerifyId);
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

  // 移除行为特征采集函数

  const onFinish = async (values: RegisterForm) => {
    console.log('=== 注册表单提交调试信息 ===');
    console.log('emailVerifyId:', emailVerifyId);
    console.log('values.emailCode:', values.emailCode);
    console.log('完整表单数据:', values);
    
    if (!emailVerifyId) {
      console.error('❌ emailVerifyId 为空');
      message.error('请先获取邮箱验证码');
      return;
    }

    if (!values.emailCode) {
      console.error('❌ emailCode 为空');
      message.error('请输入邮箱验证码');
      return;
    }

    if (!values.emailCode.trim()) {
      console.error('❌ emailCode 只包含空格');
      message.error('邮箱验证码不能为空');
      return;
    }
    
    console.log('✅ 验证码验证通过，准备发送注册请求');

    setLoading(true);
    try {
      // 准备注册数据
      const registerData: RegisterRequest = {
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        role: values.role === 'participant' ? UserRole.USER : 
              values.role === 'organizer' ? UserRole.MODERATOR : UserRole.USER,
        inviteCode: values.inviteCode,
        emailVerifyId: emailVerifyId,
        emailCode: values.emailCode
      };

      // 调用注册API
      const response = await authAPI.register(registerData);
      
      message.success('注册成功！正在跳转到登录页面...');
      
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      const errorMessage = handleApiError(error);
      message.error(errorMessage || '注册失败');
    } finally {
      setLoading(false);
    }
  };

  const validatePassword = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error('请输入密码！'));
    }
    if (value.length < 9 || value.length > 20) {
      return Promise.reject(new Error('密码长度必须为9-20个字符！'));
    }
    
    // 检查密码复杂度：至少包含大小写字母、符号、数字四种中的三种
    const hasLowerCase = /[a-z]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumbers = /\d/.test(value);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    
    const complexityCount = [hasLowerCase, hasUpperCase, hasNumbers, hasSymbols].filter(Boolean).length;
    
    if (complexityCount < 3) {
      return Promise.reject(new Error('密码必须至少包含大小写字母、符号、数字四种中的三种！'));
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
            注册账号参加CTF竞赛
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



            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
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