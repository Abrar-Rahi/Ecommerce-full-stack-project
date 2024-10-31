import React, { useEffect, useState } from 'react'
import { Card, Button } from 'antd';

const ViewDiscount = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`http://localhost:8000/api/v1/product/allCupon`);
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

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px'

        }}>
            {data.map((item, index) => (

                <Card
                    style={{
                        width: '300px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                        margin: '15px',
                        textAlign: 'center',
                        backgroundColor: '#f5f5f5',
                        padding: '20px',
                        border: '1px solid #d9d9d9',

                    }}

                >
                    <h2 style={{ color: '#1890ff', fontSize: '24px', fontWeight: 'bold' }}>{item.cupon}</h2>
                    {item.cuponType === "freeDelivary" ?
                    <>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#52c41a' }}>Free Delivary</p>
                    </>
                        :

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#52c41a' }}>Discount: {`${item.cuponAmount}${item.cuponType === "cash" ? " Taka Less" : " percent" }`}</p>
                    }

                    <p style={{ fontSize: '16px', color: '#595959' }}>Range: {item.cuponRang}</p>
                    <p style={{ fontSize: '16px', color: '#595959' }}>Type: {item.cuponType}</p>

                </Card>
            ))}
        </div>
    )
}

export default ViewDiscount