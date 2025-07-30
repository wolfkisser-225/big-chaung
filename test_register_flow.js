// 测试注册流程的脚本
const API_BASE = 'http://localhost:3001/api/v1';

async function testRegisterFlow() {
  console.log('=== 测试注册流程 ===');
  
  try {
    // 1. 发送邮箱验证码
    console.log('\n1. 发送邮箱验证码...');
    const emailResponse = await fetch(`${API_BASE}/auth/send-email-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        purpose: 'register'
      })
    });
    
    const emailData = await emailResponse.json();
    console.log('邮箱验证码响应:', emailData);
    
    if (!emailResponse.ok) {
      throw new Error(`发送验证码失败: ${emailData.error}`);
    }
    
    const verifyId = emailData.verifyId;
    console.log('获得 verifyId:', verifyId);
    
    // 2. 模拟用户输入验证码（这里需要手动输入实际收到的验证码）
    const testCode = '123456'; // 这里需要替换为实际的验证码
    console.log('\n2. 测试注册...');
    
    const registerResponse = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'testuser' + Date.now(),
        email: 'test@example.com',
        password: 'TestPassword123!',
        confirmPassword: 'TestPassword123!',
        role: 'USER',
        emailVerifyId: verifyId,
        emailCode: testCode
      })
    });
    
    const registerData = await registerResponse.json();
    console.log('注册响应:', registerData);
    
    if (!registerResponse.ok) {
      console.log('注册失败:', registerData.error);
    } else {
      console.log('注册成功!');
    }
    
  } catch (error) {
    console.error('测试失败:', error.message);
  }
}

// 如果在Node.js环境中运行
if (typeof fetch === 'undefined') {
  console.log('请在浏览器控制台中运行此脚本');
} else {
  testRegisterFlow();
}