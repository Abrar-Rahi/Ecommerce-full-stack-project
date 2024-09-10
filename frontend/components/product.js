import Image from 'next/image'
import React from 'react'
import ProCard from './proCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allproduct')


    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Product = async () => {

    const data = await getData()

    return (
        <div style={{backgroundColor: '#f5f5f5', paddingTop:'50px',paddingBottom:'50px'}}>
            <Container>
                <div style={{paddingBottom:'10px', textAlign:'center'}}>
                <h1 style={{fontSize:'40px',fontWeight:"700"}}>Featured Products</h1>
                <p style={{fontSize:'20px',fontWeight:"600"}}>Check & Get Your Desired Product!</p>

                </div>
            </Container>


            <Container>
                <Row>
                    {data.map(item => (
                        <Col xs lg="3" style={{ marginBottom: "20px" }}>
                            <ProCard item={item} />

                        </Col>
                    ))}
                </Row>
            </Container>



        </div>
    )
}

export default Product