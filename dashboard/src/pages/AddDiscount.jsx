import React, { useState } from 'react'
import { Button, Select, Form, Input } from 'antd';
import axios from "axios"

const AddDiscount = () => {

let [cuponType,setCuponType]=useState("")

console.log(cuponType);

    const onFinish = async (values) => {
      console.log(values);
        let data = await axios.post("http://localhost:8000/api/v1/product/createCupon",{
          
        cupon: values.cupon,
        cuponAmount : values.amount,
        cuponRang : values.rang,
        cuponType : cuponType,
 
        })
        console.log("cuponData",data)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const handleChange = (value) => {
        setCuponType(value);
      };

  return (
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
      label="Cupon"
      name="cupon"
      rules={[
        {
          required: true,
          message: 'Please input your cupon!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Amount"
      name="amount"
      rules={[
        {
          required: true,
          message: 'Please input your amount!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Rang"
      name="rang"
      rules={[
        {
          required: true,
          message: 'Please input your rang!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    

    <Select
      defaultValue="select a cupon type"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'cash',
          label: 'cash',
        },
        {
          value: 'percent',
          label: 'percent',
        },
        {
          value: 'freeDelivary',
          label: 'freeDelivary',
        },
        
      ]}
    />
    

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
  )
}

export default AddDiscount