'use client'
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "react-bootstrap";

const ProductDetailsSlider = ({ images }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <>
            {images.length == 1 ?

                images.map(item => (
                    <div style={{ marginBottom: '30px' }}>

                        <Image
                            src={`http://localhost:8000${item}`}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                ))

                :

                <div className="slider-container">
                    <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} >
                        {images.map((item,index) => (
                            <div style={{ marginBottom: '30px' }}>
                                <Image
                                    key={index}
                                    src={`http://localhost:8000${item}`}
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        ))}
                    </Slider>

                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        {images.map(item => (
                            images.length !== 1 ?
                                <div>
                                    <Image
                                        src={`http://localhost:8000${item}`}
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </div>
                                :
                                ""
                        ))}


                    </Slider>
                </div>
            }
        </>
    )
}

export default ProductDetailsSlider