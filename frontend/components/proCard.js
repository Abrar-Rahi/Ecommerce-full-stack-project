"use client";

import React, { useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Link from 'next/link';

const ProCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [hover, setHover] = useState(false);
  

  const handleCart = (item) => {
    fetch("http://localhost:8000/api/v1/product/addToCart", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: item._id,
        quantity: 1,
        cartOwnerId: "65f575e614b86880d77c0532",
      }),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Card style={{ width: '316px', height: '100%', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Image */}
      <div style={{ flex: '0 0 10rem' }}>
        <Card.Img
          variant="top"
          src={`http://localhost:8000${item.image[0]}`}
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Card Body */}
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
      <Card.Title style={{ textAlign: 'center', minHeight: '3rem' }}>
          <Link href={`/productDetails/${item.slug}`} >
            <span
              style={{
                display: 'inline-block',
                color: hover ? 'blue' : 'black',
                fontWeight: '700',
                textDecoration: hover ? 'underline' : 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease, text-decoration 0.3s ease'
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {item.productName}
            </span>
          </Link>
        </Card.Title>

        {/* Price and Buttons in Column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
          {/* Price */}
          <div style={{ margin: '5px', textAlign: 'center',fontWeight:'600',fontSize:'22px' }}>
            {item.sellPrice ? (
              <p>
                <del style={{ color: "#353839", marginRight: "10px",fontSize:'16px' }}>
                  <span>{item.productPrice}৳</span>
                </del>
                <span  style={{ color: "#ff5a36" }}>{item.sellPrice}৳</span>
              </p>
            ) : (
              <p style={{ color: "#ff5a36" }}>{item.productPrice}৳</p>
            )}
          </div>

        </div>
          {/* Buttons */}
          <Button style={{width: '100%',fontWeight:'600',fontSize:'16px' }} onClick={() => handleCart(item)} variant="info" size="sm">
            Add To Cart
          </Button>

          <Button
            ref={target}
            onClick={() => setShow(!show)}
            variant="secondary"
            size="sm"
            style={{ marginTop: '0.5rem', width: '100%',fontWeight:'600',fontSize:'16px' }}
          >
            Description
          </Button>

          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                <Card.Text dangerouslySetInnerHTML={{ __html: item.description }} />
              </Tooltip>
            )}
          </Overlay>
      </Card.Body>
    </Card>
  );
};

export default ProCard;
