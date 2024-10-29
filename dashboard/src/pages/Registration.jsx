import React from 'react';
import axios from 'axios';
import { Button, Form, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Registration = () => {
  let navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      let data = await axios.post("http://localhost:8000/api/v1/auth/registration", {
        username: values.username,
        email: values.email,
        password: values.password
      },
      {
        headers: {
          Authorization: "ecommerce api secure"
        }
      });
      console.log(data);
      // navigate(`/otpValidation/${values.email}`) for otp verification
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <Title level={2} style={styles.title}>Register</Title>
        <Text style={styles.description}>Create an account to access the dashboard</Text>
        <Form
          name="basic"
          layout="vertical"
          style={styles.form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input style={styles.input} placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input style={styles.input} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password style={styles.input} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              Register
            </Button>
          </Form.Item>
          <div style={styles.links}>
            <Link to="/forgotPassword" style={styles.link}>Forgot password?</Link>
            <Link to="/login" style={{ ...styles.link, marginLeft: '1rem' }}>Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  formWrapper: {
    width: '400px',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#1890ff',
  },
  description: {
    marginBottom: '2rem',
    color: '#888',
  },
  form: {
    width: '100%',
  },
  input: {
    height: '40px',
    borderRadius: '4px',
  },
  submitButton: {
    width: '100%',
    height: '40px',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
    borderRadius: '4px',
  },
  links: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  link: {
    color: '#1890ff',
    fontSize: '14px',
  },
};

export default Registration;
