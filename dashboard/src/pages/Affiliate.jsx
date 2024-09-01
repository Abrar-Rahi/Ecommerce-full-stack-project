import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Card } from 'antd';
import { Col, Divider, Row } from 'antd';
const style = {
    
    padding: '8px 0',
};

const Affiliate = () => {

    let [allpro, setAllpro] = useState([])

    const { Meta } = Card;

    useEffect(() => {
        async function allPro() {
            let data = await axios.get("http://localhost:8000/api/v1/product/allproduct")
            setAllpro(data.data);
        }
        allPro()
    }, [])

    return (
        <>
                <Row gutter={[16, 24]}>
            {allpro.map(item => (
                    <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{
                                width: 270,
                            }}
                            cover={<img alt="example" src={`http://localhost:8000${item.image}`} />}
                        >
                            <Meta title={item.productName} description="www.instagram.com" />
                        </Card>
                    </div>
                        
                    </Col>
                 

            ))}
                </Row>


        </>
    )
}

export default Affiliate