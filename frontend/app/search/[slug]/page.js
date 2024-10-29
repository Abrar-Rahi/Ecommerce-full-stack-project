import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProCard from '@/components/proCard';

async function getData(id) {
    const res = await fetch(`http://localhost:8000/api/v1/product/search/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const Search = async ({ params }) => {
    const data = await getData(params.slug);

    let arr = [];
    data?.data?.map(item => {
        if (item.status === 'approved') {
            arr.push(item);
        }
    });

    return (
        <div style={{
            backgroundColor: '#f9f9f9',
            minHeight: '100vh',
            padding: '40px 0',
            fontFamily: 'Arial, sans-serif'
        }}>
            <Container>
                <Row style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px'
                }}>
                    {arr.length > 0 ? (
                        arr.map((item,index) => (
                            <Col
                                xs lg="3"
                                style={{
                                    marginBottom: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    transition: 'transform 0.3s ease'
                                }}
                                key={index}
                            >
                                <ProCard item={item} />
                            </Col>
                        ))
                    ) : (
                        <h1 style={{
                            textAlign: 'center',
                            color: '#808080',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginTop: '40px'
                        }}>
                            There is no product here
                        </h1>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Search;
