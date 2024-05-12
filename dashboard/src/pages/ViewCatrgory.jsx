import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

const ViewCatrgory = () => {
    const columns = [
        {
          title: 'Category Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
       
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Delete</a>
              <a> {record.name}</a>
            </Space>
          ),
        },
      ];
      
      let [catData,setCatData] = useState([])
      useEffect(() => {
          async function allcat(){
            let allcatdata = await axios.get("http://localhost:8000/api/v1/product/allcat")
            
            let arr=[]
            allcatdata.data.map(item =>{
              arr.push(
                {
                  key: item._id ,
                  name: item.categoryName,
                }
              )
            })
            setCatData(arr)
          }
        
          allcat()
        }, [])
  return (
    <Table columns={columns} dataSource={catData} />
  )
}

export default ViewCatrgory





