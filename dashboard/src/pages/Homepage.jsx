import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
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
  let user = JSON.parse(localStorage.getItem("user")) 
  let navigate = useNavigate()
  const onClick = (e) => {
    console.log('click ', e);
    navigate(e.key)
  };

  const items = [
    user.role == "admin" &&
    getItem('USER', 'sub1', <MailOutlined />, [
      getItem('Merchant', 'g1',),
      getItem('User', 'g2',),
    ]),
    {
      type: 'divider',
    },
    getItem('PRODUCTS', 'sub2', <AppstoreOutlined />, [
      getItem('Add Products', '/dashboard/addProduct'),
      getItem('View Products', '/dashboard/viewProduct'),
      getItem('Add varient', '/dashboard/addVarient'),
      getItem('View varient', '/dashboard/viewVarient'),
    ]),
    {
      type: 'divider',
    },
    getItem('CATEGOTY & SUB CATEGORY', 'sub4', <AppstoreOutlined />, [
      getItem('Add Category', '/dashboard/createCategory'),
      getItem('Add Subcategory', '/dashboard/createSubCategory'),
      getItem('View Category', '/dashboard/viewCategory'),
      getItem('View Subcategory', '/dashboard/viewSubCategory'),
    ]),

    {
      type: 'divider',
    },
    getItem('DISCOUNT', 'sub5', <AppstoreOutlined />, [
      getItem('Add Discount', '/dashboard/addDiscount'),
      getItem('View Discount', '12'),
    ]),
    {
      type: 'divider',
    },
    getItem('APPLIATE', 'sub6', <AppstoreOutlined />, [
      getItem('Affiliate Product', '/dashboard/affiliate'),
    ]),
  ];
  return (
    <div>
      <Row>
      <Col span={6}>
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
      </Col>
      <Col span={18}>
        <Outlet/>
      </Col>
    </Row>
       
    </div>
  )
}

export default Homepage