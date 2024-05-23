
import Image from 'next/image';
import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartIncre from '@/components/cartIncre';

async function getData() {

  const res = await fetch(`http://localhost:8000/api/v1/product/cartItem`)


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Cart = async () => {
  const data = await getData()

  let totolPrice = 0;

  data.map(item =>{
    totolPrice += item.productId.sellPrice ? item.productId.sellPrice * item.quantity : item.productId.productPrice * item.quantity
  })

 
  return (
    <Container>
{data.length == 0 ?
 <h1>cart is empty</h1>
:
<>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (

            <tr>
              <td> <Image width={50} height={50} alt='proImg' src={`http://localhost:8000${item.productId.image}`} /></td>
              <td>{item.productId.productName}</td>
              <td>
                
                <CartIncre productId={item.productId._id} type={"increse"}/>
                {item.quantity}
                <CartIncre productId={item.productId._id} type={"decrese"}/>
                


              </td>
              <td>{item.productId.sellPrice ? item.productId.sellPrice : item.productId.productPrice}</td>
              <td>{item.productId.sellPrice ? item.productId.sellPrice * item.quantity : item.productId.productPrice * item.quantity}</td>
            </tr>

          ))}

        </tbody>
      </Table>

      <Row>
        <Col></Col>
        <Col>
          <p>Total Price = {totolPrice}$</p>
          <p>Tax(15%) ={Math.round(totolPrice*(15/100))} $ </p>
          <p>Delivary Charge = 10$</p>
          <p>SubTotal = {Math.round(totolPrice+(totolPrice*15/100)+10)}$</p>
          
        </Col>
      </Row>
      </>
}


    </Container>
  )
}

export default Cart