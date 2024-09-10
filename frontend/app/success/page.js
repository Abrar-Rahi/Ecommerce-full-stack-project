'use client';

import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Success = () => {
  return (
    <Container fluid style={styles.container}>
      <Row className="justify-content-center align-items-center" style={styles.row}>
        <Col xs={12} md={6} lg={12}>
          <Card style={styles.card}>
            <Card.Body>
              <h1 style={styles.header}>Payment Successful!</h1>
              <p style={styles.message}>
                Thank you for your payment. Your transaction has been completed, and a receipt has been emailed to you.
              </p>
              <div style={styles.details}>
                <p style={styles.info}>
                  <strong>Transaction ID:</strong> 123456789
                </p>
                <p style={styles.info}>
                  <strong>Amount Paid:</strong> $99.99
                </p>
              </div>
              <div>

              <Button variant="success" style={styles.button} href="/">
                Go to Homepage
              </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const styles = {
    container: {
        padding: '200px 25px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
    },
    row: {
      height: '100%',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      textAlign: 'center',
    },
    header: {
      color: '#28a745',
      fontSize: '24px',
      marginBottom: '20px',
    },
    message: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '30px',
    },
    details: {
      textAlign: 'left',
      marginBottom: '30px',
    },
    info: {
      fontSize: '14px',
      color: '#333',
      marginBottom: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      width: '100%',
    },
  };

export default Success