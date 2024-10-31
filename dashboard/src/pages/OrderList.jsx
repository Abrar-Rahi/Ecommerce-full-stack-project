import React, { useEffect, useState, useRef } from 'react';
import { Table, Typography, Button } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { Title } = Typography;

const OrderList = () => {
    const [data, setData] = useState([]);
    const userInfo = useSelector((state) => state.currentUser.value);
    const id = userInfo.id;

    // Ref to the printable content
    const printRef = useRef(null);

    useEffect(() => {
        async function fetchOrderList() {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/product/orderList/${id}`);
                const formattedData = response.data.map((order, index) => ({
                    key: index,
                    tran_id: order.tran_id,
                    amount: `${order.amount} BDT`,
                    cus_name: order.cus_name,
                    wonerId: order.wonerId,
                }));
                setData(formattedData);
            } catch (error) {
                console.error('Error fetching Order data:', error);
            }
        }
        fetchOrderList();
    }, [id]);

    // Table columns
    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'tran_id',
            key: 'tran_id',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Customer Name',
            dataIndex: 'cus_name',
            key: 'cus_name',
        },
        
    ];

    // Handle print function
    const handlePrint = () => {
        // Open a new window to print only the order list
        const printContent = printRef.current.innerHTML;

        // const mainContent = document.body.innerHTML
        // document.body.innerHTML = printContent
        // window.print()
                   //or
                   
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
        <html><head><title>Print Order List</title><style>body{font-family:Arial,sans-serif;padding:20px}table{width:100%;border-collapse:collapse;margin-top:20px}td,th{padding:10px;border:1px solid #ddd;text-align:center}th{background-color:#f4f4f4}h2{text-align:center}</style></head><body><h2>Order List</h2>${printContent}</body></html>
        `);
        newWindow.document.close();
        newWindow.onload = () => {
            newWindow.print();
            newWindow.close();
        };
    };

    return (
        <div style={{ padding: '20px',  margin: 'auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Order List</Title>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <Button type="primary" onClick={handlePrint}>
                Print Order List
            </Button>

            </div>

            {/* Printable Table */}
            <div ref={printRef}>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={{ pageSize: 5 }}
                    style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                />
            </div>
        </div>
    );
};

export default OrderList;
