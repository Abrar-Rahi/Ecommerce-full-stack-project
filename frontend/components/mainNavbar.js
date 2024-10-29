'use client';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Link from 'next/link';
import { SiCarto } from "react-icons/si";
import { useRouter } from 'next/navigation';

const MainNavbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setErrorMessage('Please enter a search term.');
      return;
    }
    setErrorMessage(''); // Clear error message if search term is valid
    router.push(`/search/${searchTerm}`);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (errorMessage) setErrorMessage(''); // Clear error if the user starts typing
  };

  return (
    <Navbar expand="lg" style={{
      backgroundColor: '#081621',
      borderBottom: '1px solid #e0e0e0',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
      <Container>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}>
          <span style={{
            color: '#ff5722',
            fontSize: '1.8rem',
            fontWeight: '700',
          }}>STAR</span>
          <span style={{
            color: '#007bff',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}>TECH</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            {/* Input field with Search button */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <Form.Control
                  type="search"
                  placeholder="Search products..."
                  className="me-2"
                  aria-label="Search"
                  style={{
                    width: '400px',
                    borderRadius: '10px',
                    padding: '8px 12px',
                  }}
                  value={searchTerm}
                  onChange={handleChange}
                />
                <Button variant="primary" onClick={handleSearch} style={{
                  borderRadius: '10px',
                  padding: '8px 16px',
                  marginLeft: '8px',
                }}>Search</Button>
              </Form>
              {/* Conditionally render error message */}
              {errorMessage && (
                <Alert variant="danger" style={{
                  position: 'absolute',
                  top: '100%',
                  left: '400px',
                  width: '45%',
                  textAlign: 'center',
                  marginTop: '5px',
                  borderRadius: '5px',
                  zIndex: '10px'
                }}>
                  {errorMessage}
                </Alert>
              )}
            </div>
            <Link href="/pc-builder" style={{
              textDecoration: 'none',
              marginLeft: '15px',
            }}>
              <Button style={{
                fontSize: '18px',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '10px',
              }}>PC Builder</Button>
            </Link>
            <Link href="/cart" style={{
              textDecoration: 'none',
              marginLeft: '20px',
            }}>
              <SiCarto style={{
                fontSize: '50px',
                color: '#ff5722',
                cursor: 'pointer',
              }} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
