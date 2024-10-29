// import React, { useState } from 'react'
// import { Button, Select, Form, Input } from 'antd';
// import axios from "axios"

// const AddDiscount = () => {

// let [cuponType,setCuponType]=useState("")

// console.log(cuponType);

//     const onFinish = async (values) => {
//       console.log(values);
//         let data = await axios.post("http://localhost:8000/api/v1/product/createCupon",{
          
//         cupon: values.cupon,
//         cuponAmount : values.amount,
//         cuponRang : values.rang,
//         cuponType : cuponType,
 
//         })
//         console.log("cuponData",data)
//       };
//       const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//       };
//       const handleChange = (value) => {
//         setCuponType(value);
//       };

//   return (
//     <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Cupon"
//       name="cupon"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your cupon!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Amount"
//       name="amount"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your amount!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Rang"
//       name="rang"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your rang!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

    

//     <Select
//       defaultValue="select a cupon type"
//       style={{
//         width: 120,
//       }}
//       onChange={handleChange}
//       options={[
//         {
//           value: 'cash',
//           label: 'cash',
//         },
//         {
//           value: 'percent',
//           label: 'percent',
//         },
//         {
//           value: 'freeDelivary',
//           label: 'freeDelivary',
//         },
        
//       ]}
//     />
    

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>

   
//   </Form>
//   )
// }

// export default AddDiscount


import React, { useState } from 'react';
import { Button, Select, Form, Input, Card, Typography, message } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const AddDiscount = () => {
  const [cuponType, setCuponType] = useState('');

  const onFinish = async (values) => {
    try {
      let response = await axios.post('http://localhost:8000/api/v1/product/createCupon', {
        cupon: values.cupon,
        cuponAmount: values.amount,
        cuponRang: values.rang,
        cuponType: cuponType,
      });
      message.success('Coupon created successfully!');
      console.log('cuponData', response.data);
    } catch (error) {
      message.error('Failed to create coupon!');
      console.error('Error:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (value) => {
    setCuponType(value);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={3} style={styles.title}>Add Discount Coupon</Title>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Coupon Code"
            name="cupon"
            rules={[
              {
                required: true,
                message: 'Please input your coupon code!',
              },
            ]}
          >
            <Input placeholder="Enter coupon code" style={styles.input} />
          </Form.Item>

          <Form.Item
            label="Discount Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: 'Please input your discount amount!',
              },
            ]}
          >
            <Input placeholder="Enter discount amount" style={styles.input} />
          </Form.Item>

          <Form.Item
            label="Range"
            name="rang"
            rules={[
              {
                required: true,
                message: 'Please input your range!',
              },
            ]}
          >
            <Input placeholder="Enter range" style={styles.input} />
          </Form.Item>

          <Form.Item label="Coupon Type" name="cuponType" rules={[{ required: true, message: 'Please select a coupon type!' }]}>
            <Select
              placeholder="Select a coupon type"
              onChange={handleChange}
              style={styles.select}
              options={[
                { value: 'cash', label: 'Cash' },
                { value: 'percent', label: 'Percent' },
                { value: 'freeDelivery', label: 'Free Delivery' },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f4f5f7',
  },
  card: {
    maxWidth: 600,
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1e3c72',
  },
  input: {
    borderRadius: '4px',
  },
  select: {
    width: '100%',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#1e3c72',
    borderColor: '#1e3c72',
    borderRadius: '4px',
  },
};

export default AddDiscount;
