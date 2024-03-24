import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

const ViewSubCat = () => {
    const columns = [
        {
          title: 'Sub Category Name',
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
      
      let [subCatData,setSubCatData] = useState([])
      useEffect(() => {
          async function allcat(){
            let allsubcatdata = await axios.get("http://localhost:3000/api/v1/product/allsubcat")
            
            let arr=[]
            allsubcatdata.data.map(item =>{
              arr.push(
                {
                  key: item._id ,
                  name: item.subCategoryName,
                }
              )
            })
            setSubCatData(arr)
          }
        
          allcat()
        }, [])
  return (
    <Table columns={columns} dataSource={subCatData} />
  )
}

export default ViewSubCat





