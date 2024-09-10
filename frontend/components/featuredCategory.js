'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptop, FaMobileAlt, FaHeadphonesAlt, FaTv, FaGamepad, FaDrone, FaChargingStation, FaVrCardboard, FaCamera, FaWatch, FaCogs, FaGuitar, FaServer, FaTabletAlt, FaWifi, FaMicrochip } from 'react-icons/fa';

const FeaturedCategory = () => {
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    const [isHovered, setIsHovered] = useState(false);



    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`http://localhost:8000/api/v1/product/allcat`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            }
        }
        getData();

        setCategories([
            { icon: FaLaptop },
            { icon: FaMobileAlt },
            { icon: FaTv },
        ]);
    }, []);
    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>

        <Container style={{ padding: '50px 10px', }}>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>Featured Category</h2>
            <p style={{ textAlign: 'center', color: '#808080', marginBottom: '30px' }}>
                Get Your Desired Product from Featured Category!
            </p>
            <Row>
                {data.map((item, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center" style={{ marginBottom: '20px' }}>
                        <Link href={`/category/${item._id}`}>

                            <div
                                style={{ textDecoration: 'none', padding: '20px', borderRadius: '15px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease', cursor: 'pointer', color: '#343a40' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.querySelector('p').style.color = '#ff5722'; // Change the text color to orange
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.querySelector('p').style.color = '#343a40'; // Change the text color back to original
                                  }}
                            >

                                {categories.map((category, index1) => (
                                    <category.icon key={index1} size={30} style={{ color: '#343a40' }} />
                                ))}

                                <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#343a40', textDecoration: 'none',fontSize:'20px' }}>
                                    <span style={{ textDecoration: 'none', display: 'inline-block', color: 'inherit' }}>{item.categoryName}</span>
                                </p>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    )
}

export default FeaturedCategory