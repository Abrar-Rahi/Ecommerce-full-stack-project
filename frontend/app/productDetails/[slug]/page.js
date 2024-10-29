import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import ProductDetailsSlider from '@/components/productDetailsSlider';
import Link from 'next/link';


async function getData(slug) {

  const res = await fetch(`http://localhost:8000/api/v1/product/productDetails?slug=${slug}`)


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const ProductDatails = async ({ params, searchParams }) => {

  const userId = searchParams.userid;

  const data = await getData(params.slug)

  return (
    <Container>
      <Row style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        {data.map((item, index) => (
          <>
            <Col key={index} style={{ marginLeft: '170px', width: '50%' }}>

              <ProductDetailsSlider images={item.image} />

            </Col>
            <Col style={{ marginTop: '100px' }}>
              <h5 style={{ color: 'blue' }}>{item.productName}</h5>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>

                <div style={{ backgroundColor: '#F5F5FC', display: 'inline-block', borderRadius: '20px', paddingTop: '5px', paddingRight: '10px', paddingLeft: '10px' }}>
                  <p style={{ marginTop: '5px' }}>Price: <span style={{ fontWeight: '600' }}>{ item.sellPrice || item.productPrice}৳</span> </p>
                </div>

                {item.sellPrice &&
                  <div style={{ backgroundColor: '#F5F5FC', display: 'inline-block', borderRadius: '20px', paddingTop: '5px', paddingRight: '10px', paddingLeft: '10px' }}>
                    <p style={{ marginTop: '5px' }}>Regular Price: <span style={{ fontWeight: '600' }} > <del>{item.productPrice}৳</del></span> </p>
                  </div>
                }
              </div>
              <Row>
                <Col >
                  <Button style={{ marginRight: '20px', fontWeight: '600' }} variant="info" >Add To Cart</Button>

                  {userId ?
                    <Button style={{ fontWeight: '600' }} variant="info" ><Link href={`/checkout?userid=${userId}&slug=${params.slug}`}>Buy Now With Affiliat</Link> </Button>
                    :
                    <Button style={{ fontWeight: '600' }} variant="info" >Buy Now</Button>
                  }
                </Col>
              </Row>
              <Row style={{ paddingTop: '10px', }}>
                <Col >
                  <Button style={{ marginRight: '5px', fontWeight: '600' }} variant="outline-success">+</Button>
                  <span style={{ fontWeight: '600' }}>1</span>
                  <Button style={{ marginLeft: '5px', fontWeight: '600' }} variant="outline-danger">-</Button>
                </Col>
              </Row>

            </Col>
            <div style={{ marginTop: '100px' }}>
              <h5 style={{ marginBottom: '30px', fontSize: '24px', fontWeight: '700' }}>Key Features / Product Information</h5>
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          </>
        ))}
      </Row>
    </Container>


  )
}

export default ProductDatails