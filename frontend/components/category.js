import Link from 'next/link'
import React from 'react'

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
    <div>
     <h1>category</h1>

        {data.map(item =>(
           <ul className='categoryUL'>

            <li key={item._id} className='categoryLi'>
                <Link href={`/category/${item._id}`}>{item.categoryName}</Link>

            <div className='subCategory'>
              {item.subCatList.length > 0 && item.subCatList.map(Sitem=>(

              <p>{Sitem.subCategoryName}</p>
              ))}
              
            </div>   
             
                
            </li>
           </ul>
        ))}
    
    </div>
  )
}

export default Category