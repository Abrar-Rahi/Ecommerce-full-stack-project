import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import axios from "axios"

const AddVarient = () => {

    let [image, setImage] = useState({})
    let [proData, setProData] = useState([])
    let [productId, setProductId] = useState("")

    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:3000/api/v1/product/addVarient", {
            varientName: values.varientName,
            avatar: image,
            regularPrice: values.regularPrice,
            sellPrice: values.sellPrice,
            productId: productId,
        },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        console.log(data);

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    let handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    // select item
    const onChange = (value) => {
        setProductId(value);
    };
    const onSearch = (value) => {
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

        useEffect(() => {
            async function allpro(){
              let allprodata = await axios.get("http://localhost:3000/api/v1/product/allproduct")
              
              let arr=[]
              allprodata.data.map(item =>{
                arr.push(
                  {
                    value: item._id ,
                    label: item.productName,
                  }
                )
              })
              setProData(arr)
            }
          
            allpro()
          }, [])


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

                <Form.Item label="First Select a Product"
                    name="SelectProduct"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>

                    <Select
                        showSearch
                        placeholder="Select a Product"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={proData}
                    />
                </Form.Item>

                <Form.Item
                    label="Varient Name"
                    name="varientName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your varient Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    label="Regular Price"
                    name="regularPrice"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Product Price!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Sell Price"
                    name="sellPrice"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Sell Price!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Varient Image"
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


export default AddVarient