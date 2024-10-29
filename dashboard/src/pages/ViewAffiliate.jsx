import React, { useEffect, useState } from 'react';
import { Table, Typography, Tag, Button, Space, Popconfirm, message } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const ViewAffiliate = () => {
  const [affiliateData, setAffiliateData] = useState([]);

  useEffect(() => {
    async function fetchAffiliates() {
      try {
        let response = await axios.get('http://localhost:8000/api/v1/product/affiliate');
        
        // Map and format the response data for the table
        const formattedData = response.data.map((affiliate, index) => ({
          key: index,
          name: affiliate.affiliatOwnerId.username,
          amount: `${affiliate.amount} BDT`,
          productName: affiliate.productId.productName,
        }));
        
        setAffiliateData(formattedData);
      } catch (error) {
        console.error('Error fetching affiliate data:', error);
      }
    }
    fetchAffiliates();
  }, []);

  const columns = [
    {
      title: 'Affiliate Customer',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a style={styles.categoryName}>{text}</a>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => <span style={styles.amount}>{amount}</span>,
    },
    {
      title: 'Product',
      dataIndex: 'productName',
      key: 'productName',
      render: (product) => <span style={styles.product}>{product}</span>,
    },
    // {
    //   title: 'Actions',
    //   key: 'actions',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <Popconfirm
    //         title="Are you sure to delete this affiliate?"
    //         onConfirm={() => handleDelete(record.key)}
    //         okText="Yes"
    //         cancelText="No"
    //       >
    //         <Button type="primary" danger>Delete</Button>
    //       </Popconfirm>
    //     </Space>
    //   ),
    // },
  ];

//   const handleDelete = (key) => {
//     setAffiliateData((prevData) => prevData.filter((item) => item.key !== key));
//     message.success('Affiliate deleted successfully');
//   };

  return (
    <div style={styles.container}>
      <Title level={2} style={styles.title}>Affiliate Balance</Title>
      <Table
        columns={columns}
        dataSource={affiliateData}
        bordered
        style={styles.table}
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f7f9fb',
    padding: '30px',
    borderRadius: '10px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1e3c72',
  },
  table: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  categoryName: {
    fontSize: '18px',
    color: '#1e3c72',
    fontWeight: '700',
  },
  amount: {
    fontSize: '16px',
    color: '#4caf50',
    fontWeight: '600',
  },
  product: {
    fontSize: '16px',
    color: '#1e3c72',
    fontWeight: '500',
  },
};

export default ViewAffiliate;
