// import React, { useState } from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import axios from "axios"
// import slugify from 'react-slugify';

// const AddProduct = () => {

//   let [description, setDescription] = useState('')
//   let [image, setImage] = useState([])
//   let [slugText, setSlugText] = useState("")

//   const onFinish = async (values) => {
//     console.log('Success:', values,image);

//     const formData = new FormData()

//     formData.append('productName',values.productName)
//     formData.append('description',description)
//     formData.append('slug',slugText)
//     formData.append('productPrice',values.productPrice)
//     formData.append('sellPrice',values.sellPrice)

//     image.forEach(file =>{
//       formData.append('photos', file)
//     })

//     let data = await axios.post("http://localhost:8000/api/v1/product/createProduct", 
//       formData
//     ,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       })
//       console.log(data);

//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   let handleChange = (e) => {
//     setImage([...e.target.files]);
//   }

//   let handleSlugify = (e) => {
//     setSlugText(slugify(e.target.value));
    
//   }

//   return (
//     <div>
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
//           label="Product Name"
//           name="productName"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your Product Name!',
//             },
//           ]}
//         >
//           <Input onChange={handleSlugify}/>
//         </Form.Item>
 
        
          
//         <div style={{display:"flex", alignItems:"center", gap:"10px", width:"70%", marginLeft:"160px", marginBottom:"30px"}}>
//          <span>Slug:</span> <Input  value={slugText} disabled/>

//         </div>
        

//         <Form.Item
//          label="Description"
//          name="Description"
//          rules={[
//            {
//              required: true,
//              message: 'Please input your Description!',
//            },
//          ]}>

//           <CKEditor
//             editor={ClassicEditor}
//             data="<p></p>"
//             onReady={editor => {
//               // You can store the "editor" and use when it is needed.
//               console.log('Editor is ready to use!', editor);
//             }}
//             onChange={(event, editor) => {
//               setDescription(editor.getData())
//               console.log(description);
//             }}

//           />
//         </Form.Item>

//         <Form.Item
//           label="Product Price"
//           name="productPrice"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your Product Price!',
//             },
//           ]}
//         >
//           <Input/>
//         </Form.Item>

//         <Form.Item
//           label="Sell Price"
//           name="sellPrice"
//           rules={[
//             {
              
//               message: 'Please input your Sell Price!',
//             },
//           ]}
//         >
//           <Input/>
//         </Form.Item>


//         <Form.Item
//           label="Product Image"
//           name="image"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your Image!',
//             },
//           ]}
//         >
//           <Input onChange={handleChange} type="file" multiple/>
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

// export default AddProduct




import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import slugify from 'react-slugify';

const { Title } = Typography;

const AddProduct = () => {
  let [description, setDescription] = useState('');
  let [image, setImage] = useState([]);
  let [slugText, setSlugText] = useState("");

  const onFinish = async (values) => {
    console.log('Success:', values, image);
    const formData = new FormData();
    formData.append('productName', values.productName);
    formData.append('description', description);
    formData.append('slug', slugText);
    formData.append('productPrice', values.productPrice);
    formData.append('sellPrice', values.sellPrice);

    image.forEach(file => {
      formData.append('photos', file);
    });

    let data = await axios.post("http://localhost:8000/api/v1/product/createProduct", 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    console.log(data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let handleChange = (e) => {
    setImage([...e.target.files]);
  };

  let handleSlugify = (e) => {
    setSlugText(slugify(e.target.value));
  };

  return (
    <div style={styles.container}>
      <Title level={2} style={styles.title}>Add New Product</Title>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 800,
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
          <Input onChange={handleSlugify} />
        </Form.Item>
        
        <div style={styles.slugContainer}>
          <span style={styles.slugLabel}>Slug:</span> 
          <Input value={slugText} disabled style={styles.slugInput} />
        </div>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your Description!',
            },
          ]}
        >
          <CKEditor
            editor={ClassicEditor}
            data="<p></p>"
            onChange={(event, editor) => {
              setDescription(editor.getData());
            }}
          />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="productPrice"
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
              message: 'Please input your Sell Price!',
            },
          ]}
        >
          <Input />
        </Form.Item>

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
          <Input onChange={handleChange} type="file" multiple />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={styles.submitButton}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f5f7',
    padding: '0 50px',
    minHeight: '100vh',
  },
  title: {
    color: '#1e3c72',
    marginBottom: '20px',
    marginLeft:'250px'
  },
  slugContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    marginLeft: '160px',
  },
  slugLabel: {
    marginRight: '10px',
    fontWeight: 'bold',
  },
  slugInput: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#1e3c72',
    borderColor: '#1e3c72',
  },
};

export default AddProduct;
