// 调试注册流程的脚本
const API_BASE = 'http://localhost:3001/api/v1';

async function debugRegisterFlow() {
  console.log('=== 调试注册流程 ===');
  
  try {
    // 1. 发送邮箱验证码
    console.log('\n1. 发送邮箱验证码...');
    const emailResponse = await fetch(`${API_BASE}/auth/send-email-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'chasemouzi@foxmail.com',
        purpose: 'register'
      })
    });
    
    const emailData = await emailResponse.json();
    console.log('邮箱验证码响应:', emailData);
    
    if (!emailResponse.ok) {
      console.error('发送验证码失败:', emailData);
      return;
    }
    
    const verifyId = emailData.emailVerifyId;
    console.log('获得 emailVerifyId:', verifyId);
    
    // 2. 测试用一个假的验证码看看错误信息
    console.log('\n2. 测试错误的验证码...');
    const testRegisterResponse = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'testuser123',
        email: 'chasemouzi@foxmail.com',
        password: 'TestPassword123!',
        confirmPassword: 'TestPassword123!',
        role: 'participant',
        emailVerifyId: verifyId,
        emailCode: '123456' // 假的验证码
      })
    });
    
    const testRegisterData = await testRegisterResponse.json();
    console.log('\n测试注册响应状态:', testRegisterResponse.status);
    console.log('测试注册响应数据:', testRegisterData);
    
    console.log('\n请查看邮箱获取真实验证码，然后手动测试注册。');
    console.log('emailVerifyId:', verifyId);
    
  } catch (error) {
    console.error('调试过程中出错:', error);
  }
}

debugRegisterFlow();