import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CreateCat = () => {
    let userInfo = useSelector(state=> state.currentUser.value)
    console.log(userInfo.id);
    const onFinish = async (values) => {

        let data = await axios.post("http://localhost:8000/api/v1/product/category",{
          
          categoryName: values.categoryName,
          ownerId : userInfo.id 
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
      label="category name"
      name="categoryName"
      rules={[
        {
          required: true,
          message: 'Please input your category Name!',
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

export default CreateCat