'use client'
import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Row, Table, Col, Card } from 'react-bootstrap';



const Checkout = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:8000/api/v1/product/cartItem`);
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
  }, []);


  const [formData, setFormData] = useState({
    cus_name: '',
    cus_email: '',
    cus_phone: '',
    cus_add: '',
    cus_city: '',
    cus_postcode: '',
    cus_country: 'Bangladesh',
    amount: `${localStorage.getItem("totalPrice")}`,
    // paymentMethod: '',
    // cardNumber: '',
  });

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    
    
    try {
      const response = await fetch(`http://localhost:8000/api/v1/product/payment`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
           formData
        )
      });

      let url = await response.json()
      
      window.location.href = url.payment_url

      if (!response.ok) {
        throw new Error(`Failed to payment: ${response.statusText}`);
      }

    } catch (error) {
      console.error('Error:', error.message);
    }
    

  };

  let totalPrice = 0;

  data.forEach(item => {
    totalPrice += (item.productId.sellPrice || item.productId.productPrice) * item.quantity;
  });

  const tax = Math.round(totalPrice * 0.15);
  const deliveryCharge = (totalPrice > 1000 ? 0 : 10)

  const subTotal = Math.round(totalPrice + tax + deliveryCharge);

  return (
    <div style={{backgroundColor: '#f5f5f5' }}>
      <Container style={{ paddingTop: '50px', paddingBottom: '50px'}}>
        <Row>
          <Col md={4} style={{backgroundColor: '#fff',borderRadius:'15px', padding:'20px', marginRight: '15px' }}>
            <h2 style={{ marginBottom: '30px' }}>Checkout Form</h2>
            <Form >
              <Row>
                <Col md={6}>
                  <Form.Group controlId="cus_name" style={{ marginBottom: '15px' }}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="cus_name"
                      placeholder="Enter first name"
                      value={formData.cus_name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="cus_email" style={{ marginBottom: '15px' }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="cus_email"
                      placeholder="Enter email"
                      value={formData.cus_email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="cus_phone" style={{ marginBottom: '15px' }}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="cus_phone"
                  placeholder="Enter phone number"
                  value={formData.cus_phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="cus_add" style={{ marginBottom: '15px' }}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="cus_add"
                  placeholder="Enter your details address"
                  value={formData.cus_add}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="cus_city" style={{ marginBottom: '15px' }}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="cus_city"
                      placeholder="Enter city"
                      value={formData.cus_city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="cus_postcode" style={{ marginBottom: '15px' }}>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="cus_postcode"
                      placeholder="Enter postal code"
                      value={formData.cus_postcode}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="cus_country" style={{ marginBottom: '15px' }}>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="cus_country"
                  placeholder="Enter country"
                  value={formData.cus_country}
                  onChange={handleChange}
                  required
                  defaultValue={"Bangladesh"}
                />
              </Form.Group>

              <Form.Group controlId="amount" style={{ marginBottom: '15px' }}>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="text"
                  name="amount"
                  placeholder="Enter Amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  disabled
                />
              </Form.Group>

              
            </Form>
          </Col>

          <Col md={7} style={{backgroundColor: '#fff',borderRadius:'15px', padding:'20px', marginLeft: '15px' }}>
            <div style={{ padding: '20px' }}>
              <Row>
                <Col>
                  <h5 style={{ color: '#ff4d4f', display: 'inline-block', marginRight: '10px' }}>{data.length}</h5>
                  <h4 style={{ display: 'inline-block', fontWeight: 'bold' }}>Order Overview</h4>
                </Col>
              </Row>
              <Table striped hover style={{ marginTop: '20px' }}>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.productId.productName}
                      </td>
                      <td>{item.productId.sellPrice || item.productId.productPrice}৳ × {item.quantity}</td>
                      <td>{(item.productId.sellPrice || item.productId.productPrice) * (item.quantity)}৳</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Row style={{ marginTop: '20px' }}>
                <Col md={6}><strong>Tax:</strong></Col>
                <Col md={6} style={{ textAlign: 'right', color: '#f5222d', fontWeight: 'bold' }}>
                  {tax}৳
                </Col>
              </Row>
              <Row style={{ marginTop: '10px' }}>
                <Col md={6}><strong>Home Delivery:</strong></Col>
                <Col md={6} style={{ textAlign: 'right', color: '#fa8c16' }}>
                  {deliveryCharge}৳
                </Col>
              </Row>
              <hr />
              <Row style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                <Col md={6}>Total:</Col>
                <Col md={6} style={{ textAlign: 'right', color: '#f5222d' }}>
                  {subTotal}৳
                </Col>
              </Row>
            </div>

            <div style={{textAlign:'end'}}>
            <Button onClick={handleSubmit} variant="primary" type="button" style={{ marginTop: '20px' }}>
                Confirm Oredr

              </Button>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Checkout