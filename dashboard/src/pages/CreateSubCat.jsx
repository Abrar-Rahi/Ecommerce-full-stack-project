// import React, { useEffect, useState } from 'react'
// import { Button, Select, Form, Input } from 'antd';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import FormItem from 'antd/es/form/FormItem';

// const CreateSubCat = () => {

//   let [catData,setCatData] = useState([])
//   let [catId,setCatId] = useState("")

//   let userInfo = useSelector(state => state.currentUser.value)

//   const onFinish = async (values) => {

//     let data = await axios.post("http://localhost:8000/api/v1/product/subcategory", {

//       subCategoryName: values.subCategoryName,
//       ownerId: userInfo.id,
//       catId: catId
//     }
//     )
//     console.log(data)
//   };



//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   // select item
//   const onChange = (value) => {
//     setCatId(value)
//   };
//   const onSearch = (value) => {
//   };

//   // Filter `option.label` match the user type `input`
//   const filterOption = (input, option) =>
//     (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

//     useEffect(() => {
//       async function allcat(){
//         let allcatdata = await axios.get("http://localhost:8000/api/v1/product/allcat")

//         let arr=[]
//         allcatdata.data.map(item =>{
//           arr.push(
//             {
//               value: item._id ,
//               label: item.categoryName,
//             }
//           )
//         })
//         setCatData(arr)
//       }

//       allcat()
//     }, [])


//   return (
//     <div>
//      <Form name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         style={{
//           maxWidth: 600,
//         }}
//         initialValues={{
//           remember: true,
//         }}>
//           <Form.Item  label="First Select a Category"
//           name="SelectCategory"
//           rules={[
//             {
//               required: true,
//             },
//           ]}>

//         <Select
//           showSearch
//           placeholder="Select a Category"
//           optionFilterProp="children"
//           onChange={onChange}
//           onSearch={onSearch}
//           filterOption={filterOption}
//           options={catData}
//         />
//           </Form.Item>

//      </Form>



//       <Form
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         style={{
//           maxWidth: 600,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="sub Category name"
//           name="subCategoryName"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your Subcategory Name!',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   )
// }

// export default CreateSubCat


// import React, { useEffect, useState } from 'react';
// import { Button, Select, Form, Input, Typography, message } from 'antd';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const { Title } = Typography;

// const CreateSubCat = () => {
//   const [form] = Form.useForm();
//   let [catData, setCatData] = useState([]);
//   let [catId, setCatId] = useState('');
//   let userInfo = useSelector((state) => state.currentUser.value);

//   const onFinish = async (values) => {
//     try {
//       let data = await axios.post('http://localhost:8000/api/v1/product/subcategory', {
//         subCategoryName: values.subCategoryName,
//         ownerId: userInfo.id,
//         catId: catId,
//       });
      
//       message.success("Product added successfully!");
//       console.log(data);
//       form.resetFields();
//       setCatId('');
//     } catch (error) {
//       console.error('Error creating subcategory:', error);
//       message.error("Failed to add product. Please try again.");
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   const onChange = (value) => {
//     setCatId(value);
//   };

//   const onSearch = (value) => { };

//   const filterOption = (input, option) =>
//     (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

//   useEffect(() => {
//     async function allcat() {
//       try {
//         let allcatdata = await axios.get('http://localhost:8000/api/v1/product/allcat');
//         let arr = [];
//         allcatdata.data.map((item) => {
//           arr.push({
//             value: item._id,
//             label: item.categoryName,
//           });
//         });
//         setCatData(arr);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     }

//     allcat();
//   }, []);

//   return (
//     <div style={styles.container}>
//       <div style={styles.formWrapper}>
//         <Title level={2} style={styles.title}>Create New Subcategory</Title>
//         <Form
//         form={form}
//           name="categorySelection"
//           labelCol={{ span: 8 }}
//           wrapperCol={{ span: 16 }}
//           style={styles.form}
//           initialValues={{ remember: true }}
//         >
//           <Form.Item
//             label="Select a Category"
//             name="SelectCategory"
//             rules={[{ required: true, message: 'Please select a category!' }]}
//           >
//             <Select
//               showSearch
//               placeholder="Select a Category"
//               optionFilterProp="children"
//               onChange={onChange}
//               onSearch={onSearch}
//               filterOption={filterOption}
//               options={catData}
//             />
//           </Form.Item>

//         </Form>

//         <Form
//         form={form}
//           name="basic"
//           labelCol={{ span: 8 }}
//           wrapperCol={{ span: 16 }}
//           style={styles.form}
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item
//             label="Subcategory Name"
//             name="subCategoryName"
//             rules={[{ required: true, message: 'Please input the subcategory name!' }]}
//           >
//             <Input placeholder="Enter subcategory name" />
//           </Form.Item>

//           <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//             <Button type="primary" htmlType="submit" style={styles.submitButton}>
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: '100vh',
//     backgroundColor: '#f0f2f5',
//   },
//   formWrapper: {
//     width: '600px', // Fixed width for the form
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '30px',
//     color: '#1e3c72',
//   },
//   form: {
//     width: '100%',
//   },
//   submitButton: {
//     width: '100%',
//     backgroundColor: '#1890ff',
//     borderColor: '#1890ff',
//   },
// };

// export default CreateSubCat;





import React, { useEffect, useState } from 'react';
import { Button, Select, Form, Input, Typography, message } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { Title } = Typography;

const CreateSubCat = () => {
  const [form] = Form.useForm();  // Create a form instance
  let [catData, setCatData] = useState([]);
  let [catId, setCatId] = useState('');
  let userInfo = useSelector((state) => state.currentUser.value);

  const onFinish = async (values) => {
    try {
      let data = await axios.post('http://localhost:8000/api/v1/product/subcategory', {
        subCategoryName: values.subCategoryName,
        ownerId: userInfo.id,
        catId: catId,
      });
      
      message.success("SubCategory added successfully!");
      console.log(data);
      
      // Reset form fields and state
      form.resetFields();
      setCatId('');
      
    } catch (error) {
      console.error('Error creating subcategory:', error);
      message.error("Failed to add SubCategory. Please try again.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (value) => {
    setCatId(value);
  };

  const onSearch = (value) => { };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    async function allcat() {
      try {
        let allcatdata = await axios.get('http://localhost:8000/api/v1/product/allcat');
        let arr = [];
        allcatdata.data.map((item) => {
          arr.push({
            value: item._id,
            label: item.categoryName,
          });
        });
        setCatData(arr);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    allcat();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <Title level={2} style={styles.title}>Create New Subcategory</Title>
        <Form
          form={form}  // Attach the form instance
          name="categorySelection"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={styles.form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Select a Category"
            name="SelectCategory"
            rules={[{ required: true, message: 'Please select a category!' }]}
          >
            <Select
              showSearch
              placeholder="Select a Category"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={catData}
            />
          </Form.Item>

          <Form.Item
            label="Subcategory Name"
            name="subCategoryName"
            rules={[{ required: true, message: 'Please input the subcategory name!' }]}
          >
            <Input placeholder="Enter subcategory name" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f0f2f5',
    
  },
  formWrapper: {
    width: '600px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#1e3c72',
  },
  form: {
    width: '100%',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
  },
};

export default CreateSubCat;

