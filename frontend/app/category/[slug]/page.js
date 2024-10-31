'use client'
import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';

async function getData(id) {
  
  const res = await fetch(`http://localhost:8000/api/v1/product/subCatUnderCat?slug=${id}`)
  

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const Product = async ({params}) => {

  const data = await getData(params.slug)

  let arr = []
    data.map(item =>{
        if(item.status === "approved"){
            arr.push(item)
        }
    })

  return (
    
    <Container style={{ padding: '100px 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        Product Categories
      </h1>
      <Row>
        {arr.length > 0 ? arr.map(item => (
          <Col key={item._id} xs={12} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <Card
              style={{
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                border: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', color: '#007bff' }}>
                  {item.subCategoryName}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))
      :
      <p style={{ textAlign: 'center', color: '#808080' }}>There is no Subcategory here</p>}
      </Row>
    </Container>
  )
}

export default Product