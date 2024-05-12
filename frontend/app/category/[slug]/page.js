import React from 'react'

async function getData(id) {
  
  const res = await fetch(`http://localhost:8000/api/v1/product/subCatUnderCat?slug=${id}`)
  

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Product = async ({params}) => {

  const data = await getData(params.slug)

  return (
    
    data.map(item=>(
      <ul>

        <li key={item._id}>{item.subCategoryName}</li>
      </ul>
    ))
    
  )
}

export default Product