import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contest from '../pages/Contest';
import ContestDetail from '../pages/ContestDetail';
import ChallengeDetail from '../pages/ChallengeDetail';
import Profile from '../pages/Profile';
import Features from '../pages/Features';
import Training from '../pages/Training';
import Leaderboard from '../pages/Leaderboard';

// 404页面组件
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
          页面未找到
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          抱歉，您访问的页面不存在。
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          返回首页
        </a>
      </div>
    </div>
  );
};

// 管理后台页面组件
const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          管理后台
        </h1>
        
        {/* 管理功能模块 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">用户管理</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">管理平台用户、权限设置</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              进入管理
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">比赛管理</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">创建、编辑、管理比赛</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              进入管理
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">题目管理</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">添加、编辑、分类题目</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              进入管理
            </button>
          </div>
        </div>
        
        {/* 监控中心 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6">监控中心</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">在线用户</h4>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200">活跃比赛</h4>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">0</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">异常检测</h4>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">0</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-200">安全警报</h4>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">0</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">实时监控</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">行为特征监控功能正在开发中...</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">异常日志</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">暂无异常记录</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* 公共路由 */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* 需要布局的路由 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contests" element={<Contest />} />
        <Route path="contests/:id" element={<ContestDetail />} />
        <Route path="challenges/:id" element={<ChallengeDetail />} />
        <Route path="training" element={<Training />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="features" element={<Features />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      
      {/* 404页面 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;