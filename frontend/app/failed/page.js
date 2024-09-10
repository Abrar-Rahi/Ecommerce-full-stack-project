'use client';

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Failed = () => {
  return (
    <Container fluid style={styles.container}>
      <Row className="justify-content-center align-items-center" style={styles.row}>
        <Col xs={12} md={6} lg={12}>
          <Card style={styles.card}>
            <Card.Body>
              <h1 style={styles.header}>Payment Failed</h1>
              <p style={styles.message}>
                Unfortunately, your transaction could not be processed. Please try again or contact customer support if
                the issue persists.
              </p>
              <div style={styles.details}>
                <p style={styles.info}>
                  <strong>Transaction ID:</strong> 987654321
                </p>
                <p style={styles.info}>
                  <strong>Amount:</strong> $99.99
                </p>
              </div>
              <Button variant="danger" style={styles.button} href="/checkout">
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
    color: '#dc3545',
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

export default Failed;
