"use client"

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const ApplyCupon = () => {

    let [cuponApply, setCuponApply] = useState("")
    // let [cuponContent, setCuponContent] = useState("")

    let handleCuponChange = (e) => {
        setCuponApply(e.target.value);
    }

    let handleCupon = () => {
        console.log(cuponApply);

        (async () => {
            const rawResponse = await fetch('http://localhost:8000/api/v1/product/matchCupon', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ccupon : cuponApply})
            });
            const content = await rawResponse.json();
          
            console.log(content);
          })();

        // fetch("http://localhost:8000/api/v1/product/matchCupon", {
        //   method: "post",
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },

        //   //make sure to serialize your JSON body
        //   body: JSON.stringify({
        //     ccupon : cuponApply,
        //   })
        // })
        //   .then((response) => {
        //     console.log(response);
        //   });
    }


    return (
        <InputGroup onChange={handleCuponChange} size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Have a Cupon?</InputGroup.Text>
            <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
            />
            <Button onClick={handleCupon} variant="primary">Apply</Button>
        </InputGroup>
    )
}

export default ApplyCupon