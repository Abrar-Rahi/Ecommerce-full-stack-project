import React from 'react'
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate()

    const onFinish = async (values) => {
        let data = await axios.post("http://localhost:3000/api/v1/auth/login",{
          email: values.email,
          password : values.password
        },
        {
          headers :{
            Authorization : "ecommerce api secure"
          }
        }
        )
        console.log(data);
        navigate("/home")
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div>
         <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login