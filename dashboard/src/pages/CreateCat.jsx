// import React from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const CreateCat = () => {
//     let userInfo = useSelector(state=> state.currentUser.value)
//     console.log(userInfo.id);
//     const onFinish = async (values) => {

//         let data = await axios.post("http://localhost:8000/api/v1/product/category",{
          
//           categoryName: values.categoryName,
//           ownerId : userInfo.id 
//         }
//         )
//         console.log(data)
//       };
//       const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//       };
//   return (
//     <div>
//          <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="category name"
//       name="categoryName"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your category Name!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
//     </div>
//   )
// }

// export default CreateCat



import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { Title } = Typography;

const CreateCat = () => {
    let userInfo = useSelector((state) => state.currentUser.value);

    const onFinish = async (values) => {
        try {
            let data = await axios.post("http://localhost:8000/api/v1/product/category", {
                categoryName: values.categoryName,
                ownerId: userInfo.id,
            });
            console.log(data);
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <Title level={2} style={styles.title}>Create New Category</Title>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={styles.form}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Category Name"
                        name="categoryName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your category name!',
                            },
                        ]}
                    >
                        <Input placeholder="Enter category name" />
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
        width: '600px', // Fixed width for the form
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

export default CreateCat;

