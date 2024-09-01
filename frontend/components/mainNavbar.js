
'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { SiCarto } from "react-icons/si";

const MainNavbar = () => {
  return (
    <Navbar expand="lg" style={{
      backgroundColor: '#ffffff',       // White background for a clean look
      borderBottom: '1px solid #e0e0e0', // Light border at the bottom
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    }}>
      <Container>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}>
          <span style={{
            color: '#ff5722',                // A warm orange color for the primary brand text
            fontSize: '1.8rem',              // Adjusted font size for a balanced look
            fontWeight: '700',               // Slightly bolder weight for emphasis
          }}>STAR</span>
          <span style={{
            color: '#333',                   // Dark color for contrast with the primary brand text
            fontSize: '1.5rem',              // Slightly smaller secondary text
            fontWeight: '700',               // Consistent weight with the primary text
          }}>TECH</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Link href="/pc-builder" style={{
              textDecoration: 'none',
              marginLeft: '15px',              // Spacing between nav items
            }}>
              <Button variant="outline-primary" style={{
                fontSize: '1rem',                // Consistent font size
                fontWeight: '500',               // Medium weight for clarity
                padding: '8px 16px',             // Padding for a balanced button size
                borderRadius: '20px',            // Rounded corners for a modern look
              }}>PC Builder</Button>
            </Link>
            <Link href="/cart" style={{
              textDecoration: 'none',
              marginLeft: '20px',              // Space between the cart icon and buttons
            }}>
              <SiCarto style={{
                fontSize: '30px',                // Smaller cart icon for a balanced design
                color: '#007bff',                // Primary blue color for the cart icon
                cursor: 'pointer',               // Pointer cursor for interactivity
              }} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
