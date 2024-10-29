// import React, { useEffect, useState } from 'react'
// import { Space, Table, Tag } from 'antd';
// import axios from 'axios';


// const ViewProduce = () => {

//     let [productData, setProductData] = useState([])

//     useEffect(() => {
//         async function allproduct() {
//             let allproductdata = await axios.get("http://localhost:8000/api/v1/product/allproduct")

//             let arr = []
//             allproductdata.data.map(item => {
//                 arr.push(
//                     {
//                         key: item._id,
//                         name: item.productName,
//                         image: item.image,
//                         regularPrice: item.productPrice,
//                         sellPrice: item.sellPrice
//                     }
//                 )
//             })
//             setProductData(arr)
//         }

//         allproduct()
//     }, [])

//     const columns = [
//         {
//             title: 'No',
//             dataIndex: 'no',
//             key: 'no',
//             render: (text,all,index) => <a>{index+1}</a>, //3rd paratmeter give us serial number
//         },
//         {
//             title: 'Product Name',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Image',
//             dataIndex: 'image',
//             key: 'image',
//             render: (_, record) => (    //underScore er value = array item.value
//                 <img style={{ width: "70px" }} src={`http://localhost:8000${_}`} alt="fg" />
//             )

//         },
//         {
//             title: 'Regular Price',
//             dataIndex: 'regularPrice',
//             key: 'regularPrice',
//             render: (_, record) => (

//                 <p style={{ textDecorationLine: "line-through", textDecorationColor: "red" }}>{_}</p>
//             )
//         },
//         {
//             title: 'Sell Price',
//             key: 'sellPrice',
//             dataIndex: 'sellPrice',

//         },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (_, record) => (
//                 <Space size="middle">
//                     {/* <a>Invite {record.name}</a> */}
//                     <a>Delete</a>
//                     <a>Edit</a>
//                 </Space>
//             ),
//         },
//     ];




//     return (
//         <div>
//             <Table columns={columns} dataSource={productData} />;
//         </div>
//     )
// }

// export default ViewProduce




import React, { useEffect, useState } from 'react';
import { Space, Table, Typography, Button ,message} from 'antd';
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';
import { CheckOutlined } from '@ant-design/icons';
import { StopOutlined  } from '@ant-design/icons';

const { Title } = Typography;

const ViewProduct = () => {
    let [productData, setProductData] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [realTime, setRealTime] = useState(false);
    useEffect(() => {
        async function allProduct() {
            try {
                let allProductData = await axios.get("http://localhost:8000/api/v1/product/allproduct");

                let arr = allProductData.data.map((item, index) => ({
                    key: item._id,
                    no: index + 1,
                    name: item.productName,
                    image: item.image,
                    regularPrice: item.productPrice,
                    sellPrice: item.sellPrice,
                    status: item.status
                }));

                setProductData(arr);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }

        allProduct();
    }, [realTime]);

    const handleApprove = async (item) => {
    
        try {
          let data = await axios.post(`http://localhost:8000/api/v1/product/updateProduct/${item.key}?status=${item.status}`)
    
          console.log(data);
          setRealTime((prev)=>!prev)
          if(realTime){
              message.success('Product approved successfully');
            }else{
                message.success('Product Pending successfully');
          }
          
        } catch (error) {
          console.error('Error during handleApprove from viewCategory:', error);
        }
        
      
      };

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image, record) => (
                <img
                    style={{
                        ...styles.productImage,
                        ...(hoveredRow === record.key ? styles.productImageHover : {})
                    }}
                    src={`http://localhost:8000${image[0]}`}
                    alt="Product"
                />
            ),
        },
        {
            title: 'Price',
            key: 'price',
            render: (_, record) => (
                <>
                    {record.sellPrice ? (
                        <>
                            <p style={styles.regularPrice}>{`৳${record.regularPrice}`}</p>
                            <p style={styles.sellPrice}>{`৳${record.sellPrice}`}</p>
                        </>
                    ) : (
                        <p style={styles.sellPrice}>{`৳${record.regularPrice}`}</p>
                    )}
                </>
            ),
        },
        {
            title: 'Status',
            key: 'status',
            render: (_, record) => (
                <p style={styles.status}>{record.status.charAt(0).toUpperCase() + String(record.status).slice(1)}</p>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space
                    size="middle"
                    onMouseEnter={() => setHoveredRow(record.key)}
                    onMouseLeave={() => setHoveredRow(null)}
                >
                    <Button
                        type="link"
                        style={{
                            ...styles.actionButton,
                            ...(hoveredRow === record.key ? styles.actionButtonHover : {})
                        }}
                        icon={record.status === "pending" ? <CheckOutlined /> : <StopOutlined />}
                        onClick={() => handleApprove(record)}
                    >
                        {record.status === "pending" ? "Approved" : "pending"}
                    </Button>
                    
                    <Button
                        type="link"
                        danger
                        style={{
                            ...styles.actionButton,
                            ...(hoveredRow === record.key ? styles.actionButtonHover : {})
                        }}
                        icon={<DeleteOutlined/>}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={styles.container}>
            <Title level={2} style={styles.title}>Product List</Title>
            <Table columns={columns} dataSource={productData} style={styles.table} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
    },
    title: {
        color: '#1e3c72',
        marginBottom: '20px',
    },
    table: {
        width: '90%',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    productImage: {
        width: '70px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease-in', // Added transition effect
    },
    regularPrice: {
        textDecoration: 'line-through',
        color: '#ff4d4f',
    },
    sellPrice: {
        color: '#1e3c72',
        fontWeight: 'bold',
    },
    status: {
        color: '#1e3c72',
    },
    actionButton: {
        color: '#1e3c72',
        transition: 'color 0.3s ease', // Added transition effect
        
    },
    // Added hover effects
    productImageHover: {
        transform: 'scale(1.3)', // Image scaling on hover
    },
    actionButtonHover: {
        color: '#ff0000', // Button color change on hover
    },
};

export default ViewProduct;

