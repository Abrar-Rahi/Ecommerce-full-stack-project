import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const OtpValidation = () => {

  let navigate = useNavigate()
  let param = useParams()

  useEffect(() => {
    async function linkVarify(){
      let data = await axios.post("http://localhost:3000/api/v1/auth/otpVarification",{
        email : param.email,
        otp: param.otp
      }
      )
      console.log(data)
      navigate("/login")
    }
  
    linkVarify()
  },[])
  
    // const onFinish = async (values) => {
    //   let data = await axios.post("http://localhost:3000/api/v1/auth/otpVarification",{
    //     email : param.email,
    //     otp: values.otp
    //   }
    //   )
    //   console.log(data)
    //   navigate("/login")
    //   };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
      <h1>varifiying................ please wait few second</h1>
        {/* <Form
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
          label="Otp Code"
          name="otp"
          rules={[
            {
              required: true,
              message: 'Please input your otp!',
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
      </Form> */}
    </div>
  )
}

export default OtpValidation