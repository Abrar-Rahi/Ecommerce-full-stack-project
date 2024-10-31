// import React, { useEffect, useState } from 'react';
// import { Space, Table, Tag } from 'antd';
// import axios from 'axios';

// const ViewSubCat = () => {
//     const columns = [
//         {
//           title: 'Sub Category Name',
//           dataIndex: 'name',
//           key: 'name',
//           render: (text) => <a>{text}</a>,
//         },
       
//         {
//           title: 'Action',
//           key: 'action',
//           render: (_, record) => (
//             <Space size="middle">
//               <a>Delete</a>
//               <a> {record.name}</a>
//             </Space>
//           ),
//         },
//       ];
      
//       let [subCatData,setSubCatData] = useState([])
//       useEffect(() => {
//           async function allcat(){
//             let allsubcatdata = await axios.get("http://localhost:8000/api/v1/product/allsubcat")
            
//             let arr=[]
//             allsubcatdata.data.map(item =>{
//               arr.push(
//                 {
//                   key: item._id ,
//                   name: item.subCategoryName,
//                 }
//               )
//             })
//             setSubCatData(arr)
//           }
        
//           allcat()
//         }, [])
//   return (
//     <Table columns={columns} dataSource={subCatData} />
//   )
// }

// export default ViewSubCat




import React, { useEffect, useState } from 'react';
import { Space, Table, Typography, Button, Popconfirm, message } from 'antd';
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';
import { CheckOutlined } from '@ant-design/icons';
import { StopOutlined  } from '@ant-design/icons';

const { Title } = Typography;

const ViewSubCat = () => {
  const [subCatData, setSubCatData] = useState([]);
  const [realTime, setRealTime] = useState(false);

  useEffect(() => {
    async function fetchSubCategories() {
      try {
        let response = await axios.get('http://localhost:8000/api/v1/product/allsubcat');
        let formattedData = response.data.map((item) => ({
          key: item._id,
          name: item.subCategoryName,
          catName : item.catId.categoryName,
          status : item.status
        }));
        setSubCatData(formattedData);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    }
    fetchSubCategories();
  }, [realTime]);

  const handleDelete = async (key) => {
    try {
      let data = await axios.post(`http://localhost:8000/api/v1/product/deleteSubCategory/${key}`)

      console.log(data);
      setRealTime((prev)=>!prev)
      
      message.success("Sub Category Deleted");
      
    } catch (error) {
      console.error('Error during handleDelete from viewSubcategory:', error);
    }
  };

  const handleApprove = async (item) => {
    const newStatus = item.status === 'pending' ? 'approved' : 'pending';
    try {
      let data = await axios.post(`http://localhost:8000/api/v1/product/updateSubCategory/${item.key}?status=${item.status}`)

      console.log(data);
      setRealTime((prev)=>!prev)
      
      message.success(`Subcategory ${newStatus === 'approved' ? 'approved' : 'pending'} successfully`);
      
    } catch (error) {
      console.error('Error during handleApprove from viewSubcategory:', error);
    }
   
  
  };

  const columns = [
    {
      title: 'Sub Category Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a style={styles.subCategoryName}>{text}</a>,
    },
    {
      title: 'Category Name',
      dataIndex: 'catName',
      key: 'catName',
      render: (text) => <a style={styles.subCategoryName}>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this subcategory?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              style={styles.deleteButton}
            >
              Delete
            </Button>
          </Popconfirm>
          <Button
            type="primary"
            style={styles.approvedButton}
            icon={record.status === "pending"? <CheckOutlined />:<StopOutlined />}
            onClick={() => handleApprove(record)}
          >
           {record.status === "pending" ? "Approved":"pending"} 
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      <Title level={2} style={styles.title}>Subcategory Management</Title>
      <Table
        columns={columns}
        dataSource={subCatData}
        bordered
        style={styles.table}
        pagination={{ pageSize: 8 }}
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1e3c72',
  },
  table: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  subCategoryName: {
    color: '#1e3c72',
    fontWeight: '700',
  },
  deleteButton: {
    backgroundColor: '#ff4d4f',
    borderColor: '#ff4d4f',
  },
  approvedButton: {
    backgroundColor: '#28a745', // Green background for approval
    borderColor: '#28a745', // Same border color
    color: '#fff', // White text
    borderRadius: '4px', // Rounded corners
    padding: '0 15px',
    margin : '0 10px' // Bold text
  },
};

export default ViewSubCat;






