"use client"

import React from 'react'
import Card from 'react-bootstrap/Card';


import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Link from 'next/link';

const ProCard = ({ item }) => {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  let handleCart = (item) => {
    
    fetch("http://localhost:8000/api/v1/product/addToCart", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        productId: item._id,
        quantity: 1,
        cartOwnerId: "65f575e614b86880d77c0532"
      })
    })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <Card style={{ width: '18rem',height: '32rem' }}>
      <Card.Img variant="top" src={`http://localhost:8000${item.image[0]}`} />
      {console.log(item.image[0])}
      <Card.Body >
        <Card.Title style={{ hight:"5rem" }}>
          <Link href={`/productDetails/${item.slug}`}>{item.productName}</Link>
          </Card.Title>

       <div style={{ marginTop:'2rem' }}>
       {item.sellPrice ?
          <p>
            <del style={{ color: "red", marginRight: "10px" }}><span>{item.productPrice}</span></del>
            <span>{item.sellPrice}</span>
          </p>
          :
          <p>{item.productPrice}</p>}

        <Button onClick={() => handleCart(item)} variant="info" style={{ marginRight: "10px" }}>Add To Cart</Button>
        <>
          <Button ref={target} onClick={() => setShow(!show)}>
            Description
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                <Card.Text dangerouslySetInnerHTML={{ __html: item.description }}>

                </Card.Text>
              </Tooltip>
            )}
          </Overlay>
        </>
       </div>
      </Card.Body>
    </Card>
  )
}

export default ProCard