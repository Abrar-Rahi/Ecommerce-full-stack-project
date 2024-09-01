"use client"

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import slider from "../public/slider.webp"
import slider1 from "../public/slider2.webp"
import slider2 from "../public/slider3.webp"

const Slider = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Container >
        <Carousel >
          <Carousel.Item interval={1000}>
            <Image width={1920} height={500} alt='carasol pic' src={slider} />

          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Image width={1920} height={500} alt='carasol pic' src={slider1} />

          </Carousel.Item>
          <Carousel.Item>
            <Image width={1920} height={500} alt='carasol pic' src={slider2} />

          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default Slider