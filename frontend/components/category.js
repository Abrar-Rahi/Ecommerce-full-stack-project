// import Link from 'next/link'
// import React from 'react'
// import { Container } from 'react-bootstrap'

// async function getData() {
//   const res = await fetch('http://localhost:8000/api/v1/product/allcat')


//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

// const Category = async () => {

//   const data = await getData()
//   return (
//     <div className='categoryDiv1'>
//       <Container>
//         <div className='categoryDiv'>
//           {data.map(item => (
//             <ul className='categoryUL'>

//               <li key={item._id} className='categoryLi'>
//                 <Link style={{ textDecoration: "none", color: "black", fontWeight:"600" }} href={`/category/${item._id}`}>{item.categoryName}</Link>

//                 <div className='subCategory'>
//                   {item.subCatList.length > 0 && item.subCatList.map(Sitem => (

//                     <p>{Sitem.subCategoryName}</p>
//                   ))}
//                 </div>
//               </li>
//             </ul>
//           ))}


//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Category

'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineArrowRight } from "react-icons/md";




const Category = () => {
  const [data, setData] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
 
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:8000/api/v1/product/allcat`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } 
    }
    getData();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '10px 0', textAlign: 'center', borderBottom: '2px solid #e0e0e0' }}>
    <Container>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        {data.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              padding: '5px 10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: hoveredItem === index ? 'red' : 'black',
              
              transition: 'color 0.3s ease',
            }}
          >
            <Link href={`/category/${item._id}`} >
              <span style={{ textDecoration: 'none',display: 'inline-block',fontWeight:'700',fontSize:'18px', color: hoveredItem === index ? '#ff5722' : 'black', }}>{item.categoryName}</span>
            </Link>
            {item.subCatList && hoveredItem === index && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  padding: '10px',
                  width:'150px',
                  textAlign:'start',
                  
                  borderTop: hoveredItem === index ? '3px solid #ff5722' : 'none',
                  zIndex: 1000,
                }}
              >
                {item.subCatList.map((subItem, subIndex) => (
                  <Row style={{  }} key={subIndex} >
                  <Col md={6} style={{  }}>
                    <p style={{
                      color: 'black',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      fontWeight: '400'
                    }}>
                      {subItem.subCategoryName}
                    </p>
                  </Col>
                  <Col md={1}>
                    <p style={{ marginLeft: '45px'}}><MdOutlineArrowRight /></p>
                  </Col>
                </Row>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </Container>
    </div>
  )
}

export default Category





