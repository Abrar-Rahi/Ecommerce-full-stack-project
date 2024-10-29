import React from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu, Layout, Typography } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Homepage = () => {
  let user = JSON.parse(localStorage.getItem("user")); 
  let navigate = useNavigate();

  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key);
  };

  const items = [
    user.role === "admin" &&
    getItem('USER', 'sub1', <MailOutlined />, [
      getItem('Merchant', '/dashboard/merchant'),
      getItem('User', '/dashboard/user'),
    ]),
    { type: 'divider' },
    getItem('PRODUCTS', 'sub2', <AppstoreOutlined />, [
      getItem('Add Products', '/dashboard/addProduct'),
      getItem('View Products', '/dashboard/viewProduct'),
      getItem('Add Variant', '/dashboard/addVariant'),
      getItem('View Variant', '/dashboard/viewVariant'),
    ]),
    { type: 'divider' },
    getItem('CATEGORY & SUBCATEGORY', 'sub3', <AppstoreOutlined />, [
      getItem('Add Category', '/dashboard/createCategory'),
      getItem('Add Subcategory', '/dashboard/createSubCategory'),
      getItem('View Category', '/dashboard/viewCategory'),
      getItem('View Subcategory', '/dashboard/viewSubCategory'),
    ]),
    { type: 'divider' },
    getItem('DISCOUNT', 'sub4', <AppstoreOutlined />, [
      getItem('Add Discount', '/dashboard/addDiscount'),
      getItem('View Discount', '/dashboard/viewDiscount'),
    ]),
    { type: 'divider' },
    getItem('AFFILIATE', 'sub5', <AppstoreOutlined />, [
      getItem('Affiliate Product', '/dashboard/affiliate'),
      getItem('Affiliate Balance', '/dashboard/affiliateBalance'),
    ]),
  ];

  return (
    <Layout style={styles.layout}>
      <Sider style={styles.sider} width={256}>
        <Title level={3} style={styles.title}>Dashboard</Title>
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
          style={styles.menu}
          theme="dark"
        />
      </Sider>
      <Layout style={styles.contentLayout}>
        <Header style={styles.header}>
          <Title level={4} style={styles.headerTitle}>Welcome to Dashboard</Title>
        </Header>
        <Content style={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

const styles = {
  layout: {
    minHeight: '100vh',
    backgroundColor: '#f4f5f7',
  },
  sider: {
    background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)', // Gradient background for a modern look
    padding: '1rem 0',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  menu: {
    backgroundColor: 'transparent', // Transparent to show the gradient background
    color: '#ffffff',
    borderRight: 0,
  },
  contentLayout: {
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: '0 16px',
    borderBottom: '1px solid #e8e8e8',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Light shadow for elevation
  },
  headerTitle: {
    margin: 0,
    color: '#1e3c72',
  },
  content: {
    padding: '24px',
    minHeight: 280,
    backgroundColor: '#f4f5f7', // Light background for contrast
  },
};

export default Homepage;
