"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaGooglePlay, FaApple } from 'react-icons/fa';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredIndex1, setHoveredIndex1] = useState(null);
    const [hoveredIndex2, setHoveredIndex2] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseEnter1 = (index) => {
        setHoveredIndex1(index);
    };
    const handleMouseEnter2 = (index) => {
        setHoveredIndex2(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const handleMouseLeave1 = () => {
        setHoveredIndex1(null);
    };
    const handleMouseLeave2 = () => {
        setHoveredIndex2(null);
    };
    return (
        <footer style={{ backgroundColor: '#081621', color: '#ddd', padding: '2rem 0' }}>
            <Container>
                <Row>
                    <Col md={3}>
                        <div style={{ display: 'flex', flexDirection: "column", rowGap: '30px' }}>

                            <h5 style={{ color: '#fff', fontSize: '32px', fontWeight: '600' }}>Support</h5>
                            <div style={{ padding: 0, display: 'flex', flexDirection: "column", rowGap: '30px' }}>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                    border: hover1 ? '1px solid #ff5722' : '1px solid #808080 ',
                                    borderRadius: '40px',
                                    padding: '10px 20px',
                                    maxWidth: '279px',
                                    cursor: 'pointer',
                                    marginBottom: '10px'
                                }}
                                    onMouseEnter={() => setHover1(true)}
                                    onMouseLeave={() => setHover1(false)}>

                                    <div style={{ marginRight: '10px' }}>
                                        <FaMapMarkerAlt style={{ color: '#fff', fontSize: '24px' }} />
                                    </div>
                                    <div style={{ width: '1px', height: '40px', background: '#808080', marginRight: '20px' }}></div>
                                    <div style={{ textAlign: 'center', color: '#fff' }}>
                                        <span style={{ fontSize: '14px', color: '#808080' }}>10AM - 7PM</span>
                                        <br />
                                        <span style={{ fontSize: '24px', color: '#ff5722', fontWeight: '600' }}>16793</span>
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                    border: hover ? '1px solid #ff5722' : '1px solid #808080 ',
                                    borderRadius: '50px',
                                    padding: '10px 20px',
                                    maxWidth: '279px',

                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <div style={{ marginRight: '10px' }}>
                                        <FaPhone style={{ color: '#fff', fontSize: '24px' }} />
                                    </div>
                                    <div style={{ width: '1px', height: '40px', background: '#808080', marginRight: '20px' }}></div>
                                    <div style={{ textAlign: 'center', color: '#fff' }}>
                                        <span style={{ fontSize: '14px', color: '#808080 ' }}>Store Locator</span>
                                        <br />
                                        <span style={{ fontSize: '24px', color: '#ff5722', fontWeight: '600' }}>Find Our Stores</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h5 style={{ color: '#fff', fontSize: '32px', fontWeight: '600', marginBottom: '30px' }}>About Us</h5>
                        <Row>
                            <Col>
                                <ul style={{ listStyle: 'none', color: '#808080', fontSize: '18px', padding: 0, display: 'flex', flexDirection: 'column', rowGap: '20px', }}>
                                    {['EMI Terms', 'Privacy Policy', 'Star Point Policy', 'Contact Us'].map((item, index) => (
                                        <li
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}

                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    borderBottom: hoveredIndex === index ? '1px solid #ff5722' : '1px solid transparent',
                                                    transition: 'border-bottom 0.3s ease',
                                                    cursor: 'pointer',
                                                    color: hoveredIndex === index ? '#ff5722' : '#808080'
                                                }}>{item}</span>

                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul style={{ listStyle: 'none', color: '#808080', fontSize: '18px', padding: 0, display: 'flex', flexDirection: 'column', rowGap: '20px', }}>
                                    {['About Us', 'Terms and Conditions', 'Career', 'Brands'].map((item, index) => (
                                        <li
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter1(index)}
                                            onMouseLeave={handleMouseLeave1}

                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    borderBottom: hoveredIndex1 === index ? '1px solid #ff5722' : '1px solid transparent',
                                                    transition: 'border-bottom 0.3s ease',
                                                    cursor: 'pointer',
                                                    color: hoveredIndex1 === index ? '#ff5722' : '#808080'
                                                }}>{item}</span>

                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul style={{ listStyle: 'none', color: '#808080', fontSize: '18px', padding: 0, display: 'flex', flexDirection: 'column', rowGap: '20px', }}>
                                    {['Online Delivery', 'Refund and Return Policy', 'Blog'].map((item, index) => (
                                        <li
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter2(index)}
                                            onMouseLeave={handleMouseLeave2}

                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    borderBottom: hoveredIndex2 === index ? '1px solid #ff5722' : '1px solid transparent',
                                                    transition: 'border-bottom 0.3s ease',
                                                    cursor: 'pointer',
                                                    color: hoveredIndex2 === index ? '#ff5722' : '#808080'
                                                }}>{item}</span>

                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={3}>
                        <h5 style={{ color: '#fff', fontSize: '32px', fontWeight: '600', marginBottom: '30px' }}>Stay Connected</h5>
                        <address style={{ fontStyle: 'normal', lineHeight: '1.8' }}>
                            <p style={{ color: '#fff', fontSize: '26px', fontWeight: '600', marginBottom: '10px' }}>Star Tech Ltd</p>
                            <p style={{ color: '#fff', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}> Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square, Dhaka 1000</p>
                            Email: <Link href="mailto:webteam@startechbd.com" style={{ color: '#ff5722', textDecoration: 'none' }}>webteam@startechbd.com</Link>
                        </address>
                    </Col>
                </Row>
                <hr style={{ backgroundColor: '#444', marginTop: '50px' }} />


                <Row>
                    <Col>
                        <div style={{ padding: '20px', color: '#808080' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span style={{ fontSize: '18px' }}>Experience Star Tech App on your mobile:</span>

                                <Link
                                    href="#"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        border: '1px solid #808080',
                                        borderRadius: '10px',
                                        padding: '5px 10px',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        transition: 'border 0.3s ease',
                                        fontSize: '18px',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.border = '1px solid #fff')}
                                    onMouseLeave={(e) => (e.currentTarget.style.border = '1px solid #808080')}
                                >
                                    <FaGooglePlay />
                                    <span>Google Play</span>
                                </Link>

                                <Link
                                    href="#"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        border: '1px solid #808080',
                                        borderRadius: '10px',
                                        padding: '5px 10px',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        transition: 'border 0.3s ease',
                                        fontSize: '18px',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.border = '1px solid #fff')}
                                    onMouseLeave={(e) => (e.currentTarget.style.border = '1px solid #808080')}
                                >
                                    <FaApple />
                                    <span>App Store</span>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '15px'  }}>

                            {/* Facebook Icon */}
                            <Link
                                href="#"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1b2b39',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontSize: '24px',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3b5998')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1b2b39')}
                            >
                                <FaFacebookF />
                            </Link>

                            {/* YouTube Icon */}
                            <Link
                                href="#"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1b2b39',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontSize: '24px',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff0000')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1b2b39')}
                            >
                                <FaYoutube />
                            </Link>

                            {/* Instagram Icon */}
                            <Link
                                href="#"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1b2b39',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontSize: '24px',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e1306c')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1b2b39')}
                            >
                                <FaInstagram />
                            </Link>
                        </div>
                    </Col>
                </Row>
                <hr style={{ backgroundColor: '#444', marginBotto: '20px' }} />
                <Row>
                    <Col className="text-center">
                        <p style={{ marginBottom: 0 }}>&copy; 2024 Star Tech Ltd | All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
