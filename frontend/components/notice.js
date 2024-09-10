import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Notice = () => {
  return (
    <div style={{backgroundColor: '#f5f5f5'}}>

    <Container style={{ backgroundColor: '#f6f8fc', padding: '10px' }}>
    <Row>
      <Col style={{
        backgroundColor: '#fff',
        borderRadius: '30px',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'flex-end',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <marquee style={{ color: '#8c8c8c', fontSize: '16px', fontWeight:'600' }}>
        6th September Friday, all our outlets are open except Khulna, Rangpur, Rajshahi, and Chattogram Agrabad outlets. Additionally, our online activities are open and operational.
        </marquee>
      </Col>
    </Row>
  </Container>
    </div>
  )
}

export default Notice