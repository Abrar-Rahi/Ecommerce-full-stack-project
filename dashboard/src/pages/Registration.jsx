import React from 'react'
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {

  let navigate = useNavigate()

    const onFinish = async (values) => {
        let data = await axios.post("http://localhost:8000/api/v1/auth/registration",{
          username : values.username,
          email: values.email,
          password : values.password
        },
        {
          headers :{
            Authorization : "ecommerce api secure"
          }
        }
        )
        console.log(data)
        // navigate(`/otpValidation/${values.email}`) for otp varification
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
          label="Username"
          name="username"
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
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
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
            Submit
          </Button><br /> <br />
          <Link to="/forgotPassword">Forgot password</Link>
          <Link className='login' to="/login">Login?</Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Registration