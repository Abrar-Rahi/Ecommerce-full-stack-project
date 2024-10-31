"use client"

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const ApplyCupon = ({cuponApply,setCuponApply,handleCupon}) => {

   

    let handleCuponChange = (e) => {
        setCuponApply(e.target.value);
    }



    return (
        <InputGroup size="sm" className="m-3" style={{ maxWidth: '500px', margin: 'auto'}}>
            <InputGroup.Text id="inputGroup-sizing-sm" style={{ backgroundColor: '#f0f0f0', fontWeight: '600' }}>
                Have a Coupon?
            </InputGroup.Text>
            <Form.Control
                style={{ width: '60%' }}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter coupon code"
                value={cuponApply}
                onChange={handleCuponChange}
            />
            <Button
                onClick={handleCupon}
                variant="primary"
                style={{ fontWeight: '600', padding: '0 20px' }}
            >
                Apply
            </Button>
        </InputGroup>
    )
}

export default ApplyCupon