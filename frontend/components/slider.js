"use client"

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

const Slider = () => {
  return (
    <Container>
    <Carousel >
      <Carousel.Item interval={1000}>
        <Image width={1920} height={500} alt='carasol pic' src={`http://localhost:8000/uploads/avatar-1711269706797-727091006-pexels-burst-373883.jpg`}/>
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Image width={1920} height={500} alt='carasol pic' src={`http://localhost:8000/uploads/avatar-1711269706797-727091006-pexels-burst-373883.jpg`}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <Image width={1920} height={500} alt='carasol pic' src={`http://localhost:8000/uploads/avatar-1711269706797-727091006-pexels-burst-373883.jpg`}/>
        
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Slider