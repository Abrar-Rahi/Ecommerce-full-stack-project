import React from 'react'
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activeUser } from '../slices/userSlice';

const Login = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()
    const onFinish = async (values) => {
       try {
        let data = await axios.post("http://localhost:8000/api/v1/auth/login",{
          email: "rahiabrar177@gmail.com",
          password : "1@Aaaaaaaaaa"
        },
        {
          headers :{
            Authorization : "ecommerce api secure"
          }
        }
        )
        console.log(data);

        if(data.data.isEmailVarified == false){
          console.log("please verify your email");
        }else if(data.data.role == "user"){
          console.log("You Have not permission to Login");
        }else{
          dispatch(activeUser(data.data))
          localStorage.setItem("user", JSON.stringify(data.data))
          navigate("/dashboard")
        }

       } catch (error) {
        console.log(error);
       }
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
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your username!',
      //   },
      // ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your password!',
      //   },
      // ]}
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