'use client';

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Canceled = () => {
  return (
    <Container fluid style={styles.container}>
      <Row className="justify-content-center align-items-center" style={styles.row}>
        <Col xs={12} md={6} lg={12}>
          <Card style={styles.card}>
            <Card.Body>
              <h1 style={styles.header}>Transaction Canceled</h1>
              <p style={styles.message}>
                Your transaction has been canceled. No payment was processed. If this was a mistake, please retry your payment.
              </p>
              <div style={styles.details}>
                <p style={styles.info}>
                  <strong>Transaction ID:</strong> 000112233
                </p>
                <p style={styles.info}>
                  <strong>Amount:</strong> $99.99
                </p>
              </div>
              <Button variant="primary" style={styles.button} href="/checkout">
                Retry Payment
              </Button>
              <Button variant="secondary" style={styles.secondaryButton} href="/">
                Go to Homepage
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    padding: '200px 25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
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
    color: '#007bff',
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
    marginBottom: '10px',
  },
  secondaryButton: {
    padding: '10px 20px',
    fontSize: '16px',
    width: '100%',
  },
};

export default Canceled;
