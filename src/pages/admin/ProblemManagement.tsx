import React, { useState } from 'react';
import { Table, Card, Button, Space, Tag, Modal, Form, Input, Select, message, Popconfirm, Upload, InputNumber } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, SearchOutlined, EyeOutlined, UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

interface Problem {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'pwn' | 'crypto' | 'reverse' | 'misc';
  difficulty: 'easy' | 'medium' | 'hard';
  score: number;
  flag: string;
  hints?: string[];
  attachments?: string[];
  solvedCount: number;
  totalAttempts: number;
  createdBy: string;
  createdAt: string;
  status: 'active' | 'inactive';
}

const ProblemManagement: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProblem, setEditingProblem] = useState<Problem | null>(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleAddProblem = () => {
    setEditingProblem(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditProblem = (problem: Problem) => {
    setEditingProblem(problem);
    form.setFieldsValue(problem);
    setIsModalVisible(true);
  };

  const handleDeleteProblem = (problemId: string) => {
    setProblems(problems.filter(problem => problem.id !== problemId));
    message.success('题目删除成功');
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      
      if (editingProblem) {
        // 编辑题目
        setProblems(problems.map(problem => 
          problem.id === editingProblem.id ? { ...problem, ...values } : problem
        ));
        message.success('题目更新成功');
      } else {
        // 添加新题目
        const newProblem: Problem = {
          id: Date.now().toString(),
          ...values,
          solvedCount: 0,
          totalAttempts: 0,
          createdBy: 'admin',
          createdAt: new Date().toLocaleString(),
          status: 'active'
        };
        setProblems([...problems, newProblem]);
        message.success('题目添加成功');
      }
      
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchText.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryOptions = [
    { value: 'all', label: '全部分类' },
    { value: 'web', label: 'Web安全' },
    { value: 'pwn', label: '二进制漏洞' },
    { value: 'crypto', label: '密码学' },
    { value: 'reverse', label: '逆向工程' },
    { value: 'misc', label: '杂项' }
  ];

  const difficultyColors = {
    easy: 'green',
    medium: 'orange',
    hard: 'red'
  };

  const difficultyLabels = {
    easy: '简单',
    medium: '中等',
    hard: '困难'
  };

  const categoryColors = {
    web: 'blue',
    pwn: 'red',
    crypto: 'purple',
    reverse: 'orange',
    misc: 'green'
  };

  const categoryLabels = {
    web: 'Web安全',
    pwn: '二进制漏洞',
    crypto: '密码学',
    reverse: '逆向工程',
    misc: '杂项'
  };

  const columns = [
    {
      title: '题目名称',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record: Problem) => (
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-gray-500 truncate" style={{ maxWidth: 200 }}>
            {record.description}
          </div>
        </div>
      )
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      render: (category: keyof typeof categoryColors) => (
        <Tag color={categoryColors[category]}>
          {categoryLabels[category]}
        </Tag>
      )
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (difficulty: keyof typeof difficultyColors) => (
        <Tag color={difficultyColors[difficulty]}>
          {difficultyLabels[difficulty]}
        </Tag>
      )
    },
    {
      title: '分值',
      dataIndex: 'score',
      key: 'score',
      render: (score: number) => <span className="font-medium">{score}</span>
    },
    {
      title: '解题情况',
      key: 'solveStats',
      render: (_: any, record: Problem) => (
        <div className="text-sm">
          <div>解决: {record.solvedCount}</div>
          <div>尝试: {record.totalAttempts}</div>
        </div>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '启用' : '禁用'}
        </Tag>
      )
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Problem) => (
        <Space size="middle">
          <Button 
            type="link" 
            icon={<EyeOutlined />}
            size="small"
          >
            预览
          </Button>
          <Button 
            type="link" 
            icon={<EditOutlined />} 
            onClick={() => handleEditProblem(record)}
            size="small"
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除这个题目吗？"
            onConfirm={() => handleDeleteProblem(record.id)}
            okText="确定"
            cancelText="取消"
          >
            <Button 
              type="link" 
              danger 
              icon={<DeleteOutlined />}
              size="small"
            >
              删除
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <div className="p-6">
      <Card title="题目管理">
        <div className="mb-4 flex justify-between items-center">
          <Space>
            <Input.Search
              placeholder="搜索题目名称或描述"
              allowClear
              style={{ width: 300 }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              prefix={<SearchOutlined />}
            />
            <Select
              value={selectedCategory}
              onChange={setSelectedCategory}
              style={{ width: 150 }}
            >
              {categoryOptions.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Space>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAddProblem}>
            添加题目
          </Button>
        </div>
        
        <Table
          columns={columns}
          dataSource={filteredProblems}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 个题目`
          }}
        />
      </Card>

      <Modal
        title={editingProblem ? '编辑题目' : '添加题目'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            category: 'web',
            difficulty: 'easy',
            score: 100,
            status: 'active'
          }}
        >
          <Form.Item
            name="title"
            label="题目名称"
            rules={[
              { required: true, message: '请输入题目名称' },
              { min: 3, message: '题目名称至少3个字符' }
            ]}
          >
            <Input placeholder="请输入题目名称" />
          </Form.Item>
          
          <Form.Item
            name="description"
            label="题目描述"
            rules={[{ required: true, message: '请输入题目描述' }]}
          >
            <TextArea rows={6} placeholder="请输入题目描述，支持Markdown格式" />
          </Form.Item>
          
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="category"
              label="题目分类"
              rules={[{ required: true, message: '请选择题目分类' }]}
            >
              <Select placeholder="请选择题目分类">
                <Option value="web">Web安全</Option>
                <Option value="pwn">二进制漏洞</Option>
                <Option value="crypto">密码学</Option>
                <Option value="reverse">逆向工程</Option>
                <Option value="misc">杂项</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="difficulty"
              label="难度等级"
              rules={[{ required: true, message: '请选择难度等级' }]}
            >
              <Select placeholder="请选择难度等级">
                <Option value="easy">简单</Option>
                <Option value="medium">中等</Option>
                <Option value="hard">困难</Option>
              </Select>
            </Form.Item>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="score"
              label="题目分值"
              rules={[{ required: true, message: '请输入题目分值' }]}
            >
              <InputNumber
                min={1}
                max={1000}
                placeholder="请输入分值"
                style={{ width: '100%' }}
              />
            </Form.Item>
            
            <Form.Item
              name="status"
              label="题目状态"
              rules={[{ required: true, message: '请选择题目状态' }]}
            >
              <Select placeholder="请选择题目状态">
                <Option value="active">启用</Option>
                <Option value="inactive">禁用</Option>
              </Select>
            </Form.Item>
          </div>
          
          <Form.Item
            name="flag"
            label="Flag"
            rules={[{ required: true, message: '请输入Flag' }]}
          >
            <Input.Password placeholder="请输入Flag" />
          </Form.Item>
          
          <Form.Item
            name="hints"
            label="提示信息"
          >
            <TextArea rows={3} placeholder="请输入提示信息，每行一个提示" />
          </Form.Item>
          
          <Form.Item
            name="attachments"
            label="附件上传"
          >
            <Upload
              multiple
              beforeUpload={() => false}
              showUploadList={{ showRemoveIcon: true }}
            >
              <Button icon={<UploadOutlined />}>选择文件</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProblemManagement;