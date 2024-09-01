import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/product/allcat')


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Category = async () => {

  const data = await getData()
  return (
    <div className='categoryDiv1'>
      <Container>
        <div className='categoryDiv'>
          {data.map(item => (
            <ul className='categoryUL'>

              <li key={item._id} className='categoryLi'>
                <Link style={{ textDecoration: "none", color: "black" }} href={`/category/${item._id}`}>{item.categoryName}</Link>

                <div className='subCategory'>
                  {item.subCatList.length > 0 && item.subCatList.map(Sitem => (

                    <p>{Sitem.subCategoryName}</p>
                  ))}
                </div>
              </li>
            </ul>
          ))}


        </div>
      </Container>
    </div>
  )
}

export default Category





