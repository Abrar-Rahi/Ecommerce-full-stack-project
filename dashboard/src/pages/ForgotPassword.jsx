import React from 'react'
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';

const ForgotPassword = () => {
    const onFinish = async (values) => {

        let data = await axios.post("http://localhost:8000/api/v1/auth/forgotpass",{
          
          email: values.email,
        }
        )
        console.log(data)
      };
      const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };

  return (
    <div>
         <Form
        name="basic"
        labelCol={{ span: 8, }}
        wrapperCol={{ span: 16, }}
        style={{ maxWidth: 600, }}
        initialValues={{ remember: true, }}
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
              message: 'Please input your email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ForgotPassword