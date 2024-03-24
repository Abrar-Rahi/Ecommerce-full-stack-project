import React, { useEffect, useState } from 'react'
import { Button, Select, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import FormItem from 'antd/es/form/FormItem';

const CreateSubCat = () => {

  let [catData,setCatData] = useState([])
  let [catId,setCatId] = useState("")

  let userInfo = useSelector(state => state.currentUser.value)
  
  const onFinish = async (values) => {

    let data = await axios.post("http://localhost:3000/api/v1/product/subcategory", {

      subCategoryName: values.subCategoryName,
      ownerId: userInfo.id,
      catId: catId
    }
    )
    console.log(data)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // select item
  const onChange = (value) => {
    setCatId(value)
  };
  const onSearch = (value) => {
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    useEffect(() => {
      async function allcat(){
        let allcatdata = await axios.get("http://localhost:3000/api/v1/product/allcat")
        
        let arr=[]
        allcatdata.data.map(item =>{
          arr.push(
            {
              value: item._id ,
              label: item.categoryName,
            }
          )
        })
        setCatData(arr)
      }
    
      allcat()
    }, [])
    

  return (
    <div>
     <Form name="basic"
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
        }}>
          <Form.Item  label="First Select a Category"
          name="SelectCategory"
          rules={[
            {
              required: true,
            },
          ]}>

        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={catData}
        />
          </Form.Item>
     
     </Form>
     


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
          label="sub Category name"
          name="subCategoryName"
          rules={[
            {
              required: true,
              message: 'Please input your Subcategory Name!',
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

export default CreateSubCat