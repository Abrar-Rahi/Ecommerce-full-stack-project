import Image from 'next/image'
import React from 'react'

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allproduct')


    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Product = async () => {

    const data = await getData()

    return (
        <div>
            <h1>product</h1>

            {data.map(item => (
                <>
                    <p>{item.productName}</p>
                    <Image
                        src={`http://localhost:8000${item.image}`}
                        alt="Picture of the author"
                        width={200}
                        height={200}

                    />
                    <p>
                        <del>{item.productPrice}</del>
                        {item.sellPrice && 
                        <span>{item.sellPrice}</span>
                        }
                    </p>
                </>

            ))}

        </div>
    )
}

export default Product