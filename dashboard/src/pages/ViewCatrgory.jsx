

import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Typography, Popconfirm, message } from 'antd';
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';
import { CheckOutlined } from '@ant-design/icons';
import { StopOutlined  } from '@ant-design/icons';

const { Title } = Typography;

const ViewCategory = () => {
  const [catData, setCatData] = useState([]);
  const [realTime, setRealTime] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        let response = await axios.get('http://localhost:8000/api/v1/product/allcat');
        let formattedData = response.data.map((item) => ({
          key: item._id,
          name: item.categoryName,
          status : item.status
        }));
        setCatData(formattedData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, [realTime]);

  
  const handleDelete = async (key) => {
    try {
      let data = await axios.post(`http://localhost:8000/api/v1/product/deleteCategory/${key}`)

      console.log(data);
      setRealTime((prev)=>!prev)
      
      message.success("Category Deleted");
      
    } catch (error) {
      console.error('Error during handleDelete from Category:', error);
    }
  };

  const handleApprove = async (item) => {
    const newStatus = item.status === 'pending' ? 'approved' : 'pending';
    try {
      let data = await axios.post(`http://localhost:8000/api/v1/product/updateCategory/${item.key}?status=${item.status}`)

      console.log(data);
      setRealTime((prev)=>!prev)
      
      message.success(`Category ${newStatus === 'approved' ? 'approved' : 'pending'} successfully`);
      
    } catch (error) {
      console.error('Error during handleApprove from viewCategory:', error);
    }
   
  
  };

  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a style={styles.categoryName}>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <a style={styles.status}>{text.charAt(0).toUpperCase() + String(text).slice(1) }</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this category?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              style={styles.deleteButton}
            >
              Delete
            </Button>
            </Popconfirm>
             {/* Approved Button */}
             
          <Button
            type="primary"
            style={styles.approvedButton}
            icon={record.status === "pending"? <CheckOutlined />:<StopOutlined />}
            onClick={() => handleApprove(record)}
          >
           {record.status === "pending" ? "Approved":"pending"} 
          </Button>
          
        </Space>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      <Title level={2} style={styles.title}>Category Management</Title>
      <Table
        columns={columns}
        dataSource={catData}
        bordered
        style={styles.table}
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1e3c72',
  },
  table: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  categoryName: {
    fontSize: '20px',
    color: '#1e3c72',
    fontWeight: '700',
  },
  status: {
    fontSize: '16px',
    color: '#1e3c72',
    fontWeight: '400',
  },
  deleteButton: {
    backgroundColor: '#ff4d4f',
    borderColor: '#ff4d4f',
  },
  approvedButton: {
    backgroundColor: '#28a745', // Green background for approval
    borderColor: '#28a745', // Same border color
    color: '#fff', // White text
    borderRadius: '4px', // Rounded corners
    padding: '0 15px',
    margin : '0 10px' // Bold text
  },
};

export default ViewCategory;






