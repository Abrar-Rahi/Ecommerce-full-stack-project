import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios"

const AddProduct = () => {

    let [description,setDescription]= useState('')
    let [image,setImage]= useState({})

    const onFinish = async (values) => {
      console.log('Success:', values);
        let data = await axios.post("http://localhost:3000/api/v1/product/createProduct",{
            productName : values.productName,
            description : description,
            avatar : image
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      let handleChange = (e)=>{
        setImage(e.target.files[0]);
      }

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
      label="Product Name"
      name="productName"
      rules={[
        {
          required: true,
          message: 'Please input your Product Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p></p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event,editor ) => {
                        setDescription(editor.getData())
                        console.log(description );
                    } }
                    
                />
            

    <Form.Item
      label="Product Image"
      name="image"
      rules={[
        {
          required: true,
          message: 'Please input your Image!',
        },
      ]}
    >
      <Input onChange={handleChange} type="file" />
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

export default AddProduct