// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// import { Card } from 'antd';
// import { Col, Divider, Row } from 'antd';
// const style = {

//     padding: '8px 0',
// };

// const Affiliate = () => {

//     let [allpro, setAllpro] = useState([])

//     const { Meta } = Card;

//     useEffect(() => {
//         async function allPro() {
//             let data = await axios.get("http://localhost:8000/api/v1/product/allproduct")
//             setAllpro(data.data);
//         }
//         allPro()
//     }, [])

//     return (
//         <>
//                 <Row gutter={[16, 24]}>
//             {allpro.map(item => (
//                     <Col className="gutter-row" span={6}>
//                     <div style={style}>
//                         <Card
//                             hoverable
//                             style={{
//                                 width: 270,
//                             }}
//                             cover={<img alt="example" src={`http://localhost:8000${item.image}`} />}
//                         >
//                             <Meta title={item.productName} description="www.instagram.com" />
//                         </Card>
//                     </div>

//                     </Col>


//             ))}
//                 </Row>


//         </>
//     )
// }

// export default Affiliate


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Badge, Button } from 'antd';
import { DeleteOutlined, InfoCircleOutlined, CloseOutlined,CopyOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Affiliate = () => {
    const [allPro, setAllPro] = useState([]);
    const [activeProductId, setActiveProductId] = useState(null); // State to track which product's details are visible
    let userInfo = useSelector((state) => state.currentUser.value);
console.log(userInfo);
    const { Meta } = Card;

    useEffect(() => {
        async function fetchAllProducts() {
            try {
                let response = await axios.get('http://localhost:8000/api/v1/product/allproduct');
                setAllPro(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchAllProducts();
    }, []);

    // Function to show details and hide the card
    const showDetails = (productId) => {
        setActiveProductId(productId);
    };

    // Function to hide details and show the card
    const hideDetails = () => {
        setActiveProductId(null);
    };

    const copyToClipboard = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            alert("Link copied to clipboard!");
        }).catch((error) => {
            console.error("Failed to copy the link:", error);
        });
    };

    return (
        <div style={{ padding: '40px', backgroundColor: '#f7f7f9', minHeight: '100vh' }}>
            <Row gutter={[16, 24]} justify="center">
                {allPro.map((item) => (
                    <Col key={item._id} xs={24} sm={12} md={8} lg={6}>
                        {console.log(item)}
                        {activeProductId === item._id ? (
                            // Detailed view
                            <div
                                style={{
                                    width: "100%" ,
                                    padding: '20px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    backgroundColor: '#fff',
                                    position: 'absolute',
                                    top:'0',
                                    left: '0',
                                    zIndex:'10'
                                }}
                            >
                                <Button
                                    icon={<CloseOutlined />}
                                    onClick={hideDetails}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: '#ff4d4f',
                                        color: '#fff',
                                        border: 'none',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                    }}
                                />
                                <p><strong>Description:</strong>  <div
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                /></p>
                                {/* Add more product details as needed */}
                            </div>
                        ) : (
                            // Card view
                            <Badge.Ribbon text="Affiliate" color="green">
                                <Card
                                    hoverable
                                    style={{
                                        width: 300,
                                        borderRadius: 12,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        marginBottom: '20px',
                                        backgroundColor: '#ffffff',
                                    }}
                                    cover={
                                        <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                                            <img
                                                alt={item.productName}
                                                src={`http://localhost:8000${item.image[0]}`}
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    transition: 'transform 0.3s',
                                                }}
                                            />
                                        </div>
                                    }
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
                                        e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                                    }}
                                >
                                    <Meta
                                        title={item.productName}
                                        description={`Price: $${item.sellPrice || item.productPrice}`}
                                        style={{ textAlign: 'center', padding: '10px 0' }}
                                    />
                                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                        <Button
                                            type="primary"
                                            icon={<DeleteOutlined />}
                                            style={{
                                                marginRight: '10px',
                                                borderRadius: '5px',
                                                backgroundColor: '#ff3333',
                                                borderColor: '#ff3333',
                                            }}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            type="default"
                                            icon={<InfoCircleOutlined />}
                                            style={{
                                                borderRadius: '5px',
                                                borderColor: '#1890ff',
                                                color: '#1890ff',
                                            }}
                                            onClick={() => showDetails(item._id)} // Show details on click
                                        >
                                            Details
                                        </Button>
                                    </div>
                                </Card>
                            </Badge.Ribbon>
                        )}
                        
                        <div style={{ marginTop: '10px', textAlign: 'center' }}>
                            <Button
                                type="primary"
                                icon={<CopyOutlined />}
                                onClick={() => copyToClipboard(`http://localhost:3000/productDetails/${item.slug}?userid=${userInfo.id}`)}
                                style={{ marginTop: '5px' }}
                            >
                                Copy Link For Affiliate
                            </Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Affiliate;



