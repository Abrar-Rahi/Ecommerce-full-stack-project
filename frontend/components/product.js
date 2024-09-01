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
        <div>
            <Container>
                <h1 className='my-5'>product</h1>
            </Container>


            <Container>
                <Row className=''>
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