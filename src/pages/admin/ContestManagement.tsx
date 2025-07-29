import React, { useState } from 'react';
import { Table, Card, Button, Space, Tag, Modal, Form, Input, DatePicker, message, Popconfirm, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, SearchOutlined, EyeOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

interface Contest {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: 'upcoming' | 'running' | 'ended';
  participants: number;
  maxParticipants?: number;
  type: 'public' | 'private';
  createdBy: string;
  createdAt: string;
}

const ContestManagement: React.FC = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingContest, setEditingContest] = useState<Contest | null>(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');

  const handleAddContest = () => {
    setEditingContest(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditContest = (contest: Contest) => {
    setEditingContest(contest);
    form.setFieldsValue({
      ...contest,
      timeRange: [dayjs(contest.startTime), dayjs(contest.endTime)]
    });
    setIsModalVisible(true);
  };

  const handleDeleteContest = (contestId: string) => {
    setContests(contests.filter(contest => contest.id !== contestId));
    message.success('比赛删除成功');
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      const [startTime, endTime] = values.timeRange;
      
      const contestData = {
        ...values,
        startTime: startTime.format('YYYY-MM-DD HH:mm:ss'),
        endTime: endTime.format('YYYY-MM-DD HH:mm:ss'),
        status: getContestStatus(startTime, endTime)
      };
      
      delete contestData.timeRange;
      
      if (editingContest) {
        // 编辑比赛
        setContests(contests.map(contest => 
          contest.id === editingContest.id ? { ...contest, ...contestData } : contest
        ));
        message.success('比赛更新成功');
      } else {
        // 添加新比赛
        const newContest: Contest = {
          id: Date.now().toString(),
          ...contestData,
          participants: 0,
          createdBy: 'admin',
          createdAt: new Date().toLocaleString()
        };
        setContests([...contests, newContest]);
        message.success('比赛添加成功');
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

  const getContestStatus = (startTime: any, endTime: any): 'upcoming' | 'running' | 'ended' => {
    const now = dayjs();
    if (now.isBefore(startTime)) return 'upcoming';
    if (now.isAfter(endTime)) return 'ended';
    return 'running';
  };

  const filteredContests = contests.filter(contest => 
    contest.title.toLowerCase().includes(searchText.toLowerCase()) ||
    contest.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: '比赛名称',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record: Contest) => (
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-gray-500 truncate" style={{ maxWidth: 200 }}>
            {record.description}
          </div>
        </div>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusConfig = {
          upcoming: { color: 'blue', text: '即将开始' },
          running: { color: 'green', text: '进行中' },
          ended: { color: 'gray', text: '已结束' }
        };
        const config = statusConfig[status as keyof typeof statusConfig];
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag color={type === 'public' ? 'green' : 'orange'}>
          {type === 'public' ? '公开' : '私有'}
        </Tag>
      )
    },
    {
      title: '参与人数',
      dataIndex: 'participants',
      key: 'participants',
      render: (participants: number, record: Contest) => (
        <span>
          {participants}
          {record.maxParticipants && ` / ${record.maxParticipants}`}
        </span>
      )
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime'
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime'
    },
    {
      title: '创建者',
      dataIndex: 'createdBy',
      key: 'createdBy'
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Contest) => (
        <Space size="middle">
          <Button 
            type="link" 
            icon={<EyeOutlined />}
            size="small"
          >
            查看
          </Button>
          <Button 
            type="link" 
            icon={<EditOutlined />} 
            onClick={() => handleEditContest(record)}
            size="small"
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除这个比赛吗？"
            onConfirm={() => handleDeleteContest(record.id)}
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
      <Card title="比赛管理">
        <div className="mb-4 flex justify-between items-center">
          <Input.Search
            placeholder="搜索比赛名称或描述"
            allowClear
            style={{ width: 300 }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAddContest}>
            创建比赛
          </Button>
        </div>
        
        <Table
          columns={columns}
          dataSource={filteredContests}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 个比赛`
          }}
        />
      </Card>

      <Modal
        title={editingContest ? '编辑比赛' : '创建比赛'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            type: 'public'
          }}
        >
          <Form.Item
            name="title"
            label="比赛名称"
            rules={[
              { required: true, message: '请输入比赛名称' },
              { min: 3, message: '比赛名称至少3个字符' }
            ]}
          >
            <Input placeholder="请输入比赛名称" />
          </Form.Item>
          
          <Form.Item
            name="description"
            label="比赛描述"
            rules={[{ required: true, message: '请输入比赛描述' }]}
          >
            <TextArea rows={4} placeholder="请输入比赛描述" />
          </Form.Item>
          
          <Form.Item
            name="timeRange"
            label="比赛时间"
            rules={[{ required: true, message: '请选择比赛时间' }]}
          >
            <RangePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder={['开始时间', '结束时间']}
              style={{ width: '100%' }}
            />
          </Form.Item>
          
          <Form.Item
            name="type"
            label="比赛类型"
            rules={[{ required: true, message: '请选择比赛类型' }]}
          >
            <Select placeholder="请选择比赛类型">
              <Option value="public">公开比赛</Option>
              <Option value="private">私有比赛</Option>
            </Select>
          </Form.Item>
          
          <Form.Item
            name="maxParticipants"
            label="最大参与人数"
          >
            <Input type="number" placeholder="不限制请留空" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ContestManagement;