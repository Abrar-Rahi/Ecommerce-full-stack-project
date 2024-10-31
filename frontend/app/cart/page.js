'use client';

import ApplyCupon from '@/components/applyCupon';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let [cuponApply, setCuponApply] = useState("")
  let [cuponContent, setCuponContent] = useState("")

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
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);


  const handleIncreDecre = async (id, type) => {

    let updateData = data.map(item =>
      item.productId._id === id ?
        { ...item, quantity: item.quantity + (type === "increase" ? 1 : -1) }
        :
        item
    )

    setData(updateData)


    try {
      const response = await fetch(`http://localhost:8000/api/v1/product/addToCart?type=${type}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: id,
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to update cart: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Cart updated successfully:', data);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  let totalPrice = 0;

  data.forEach(item => {
    totalPrice += (item.productId.sellPrice || item.productId.productPrice) * item.quantity;
  });

  const tax = Math.round(totalPrice * 0.15);
  
  const deliveryCharge = (cuponContent.cuponType === "freeDelivary"? 0 : 100)

  const subTotal = Math.round(
    cuponContent.cuponType === "cash"?
    (totalPrice - cuponContent.cuponAmount) + tax + deliveryCharge
    :
    cuponContent.cuponType === "percent" ?
    ((totalPrice*cuponContent.cuponAmount)/100) + tax + deliveryCharge
    :
    totalPrice + tax + deliveryCharge
    );
  
  localStorage.setItem("cartlength",JSON.stringify(data.length))

  localStorage.setItem("totalPrice",JSON.stringify(subTotal))

  let handleCupon = () => {

    (async () => {
        const rawResponse = await fetch('http://localhost:8000/api/v1/product/matchCupon', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ccupon : cuponApply})
        });
        const content = await rawResponse.json();
        setCuponContent(content)
      })();

      setCuponApply("")
      
    }
    
  

  return (
    <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
      <div>
        {loading && (<h1 style={{ color: '#ff9800', fontSize: '2rem', textAlign: 'center', padding: '20px', animation: 'pulse 1.5s infinite' }}>Loading...</h1>
        )}

        {error && (<h1 style={{ color: '#f44336', fontSize: '2rem', textAlign: 'center', padding: '20px', backgroundColor: '#ffeeee', borderRadius: '10px', }}>Error: {error}</h1>
        )}
        <style>
          {`
          @keyframes pulse {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        `}
        </style>
      </div>

      {data.length === 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1
            style={{
              color: '#f44336',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '20px',
              backgroundColor: '#fff3f3',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '80%',
              margin: '0 auto',
            }}
          >
            Cart is empty
          </h1>
        </div>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.productId._id}>
                  
                  <td>
                    <Image
                      width={50}
                      height={50}
                      alt="Product Image"
                      src={`http://localhost:8000${item.productId.image[0]}`}
                      style={{ objectFit: 'cover' }}
                    />
                  </td>
                  <td>{item.productId.productName}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <button
                        onClick={() => handleIncreDecre(item.productId._id, 'decrease')}
                        disabled={item.quantity === 1}
                        style={{
                          backgroundColor: item.quantity === 1 ? '#ccc' : '#f45f90',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          cursor: item.quantity === 1 ? 'not-allowed' : 'pointer',
                          fontSize: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        -
                      </button>
                      <span style={{ padding: '0 15px', fontSize: '16px' }}>{item.quantity}</span>
                      <button
                        onClick={() => handleIncreDecre(item.productId._id, 'increase')}
                        style={{
                          backgroundColor: '#4CAF90',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          cursor: 'pointer',
                          fontSize: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        +
                      </button>
                    </div>

                  </td>
                  <td>{item.productId.sellPrice || item.productId.productPrice}৳</td>
                  <td>
                    {(item.productId.sellPrice || item.productId.productPrice) * (item.quantity)}৳
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          

          <Row className="justify-content-center">
            <Col md={6}>
            <Row >

            <Col>
              <ApplyCupon cuponApply={cuponApply} setCuponApply={setCuponApply} handleCupon={handleCupon}/>
            </Col>
          </Row>

              <Card style={{ marginTop: '20px', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '20px' }}>Order Summary</Card.Title>
                  <hr />
                  <Row style={{ marginBottom: '10px' }}>
                    <Col>Total Price:</Col>
                    <Col style={{ textAlign: 'right' }}>{totalPrice}৳</Col>
                  </Row>
                  <Row style={{ marginBottom: '10px' }}>
                    <Col>Tax (15%):</Col>
                    <Col style={{ textAlign: 'right' }}>{tax}৳</Col>
                  </Row>
                  <Row style={{ marginBottom: '10px' }}>
                    <Col>Delivery Charge:</Col>
                    <Col style={{ textAlign: 'right' }}>{deliveryCharge}৳</Col>
                  </Row>
                  <hr />
                  <Row style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    <Col>SubTotal:</Col>
                    <Col style={{ textAlign: 'right' }}>{subTotal}৳</Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center" style={{ marginTop: '20px' }}>
            <Col md={6} style={{ textAlign: 'center' }}>
              <Link
                href={'/checkout'}
                style={{
                  textDecoration:'none',
                  backgroundColor: '#4CAF50', 
                  color: 'white',             
                  border: 'none',            
                  padding: '10px 20px',       
                  fontSize: '16px',   
                  fontWeight:'600',        
                  borderRadius: '5px',      
                  cursor: 'pointer',        
                  transition: 'background-color 0.3s ease', 
                }}
                onClick={() => {
                  // Add your checkout logic here
                  console.log('Proceeding to checkout...');
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'} // Darken button on hover
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'} // Revert to original color when not hovered
              >
                Proceed to Checkout
              </Link>
            </Col>
          </Row>



          
        </>
      )}
    </Container>
  );
};

export default Cart;
