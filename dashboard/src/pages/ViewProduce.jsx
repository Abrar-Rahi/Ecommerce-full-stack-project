import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios';


const ViewProduce = () => {

    let [productData, setProductData] = useState([])

    useEffect(() => {
        async function allproduct() {
            let allproductdata = await axios.get("http://localhost:3000/api/v1/product/allproduct")

            let arr = []
            allproductdata.data.map(item => {
                arr.push(
                    {
                        key: item._id,
                        name: item.productName,
                        image: item.image,
                        regularPrice: item.productPrice,
                        sellPrice: item.sellPrice
                    }
                )
            })
            setProductData(arr)
        }

        allproduct()
    }, [])

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            render: (text,all,index) => <a>{index+1}</a>, //3rd paratmeter give us serial number
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (_, record) => (    //underScore er value = array item.value
                <img style={{ width: "70px" }} src={`http://localhost:3000${_}`} alt="fg" />
            )

        },
        {
            title: 'Regular Price',
            dataIndex: 'regularPrice',
            key: 'regularPrice',
            render: (_, record) => (

                <p style={{ textDecorationLine: "line-through", textDecorationColor: "red" }}>{_}</p>
            )
        },
        {
            title: 'Sell Price',
            key: 'sellPrice',
            dataIndex: 'sellPrice',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* <a>Invite {record.name}</a> */}
                    <a>Delete</a>
                    <a>Edit</a>
                </Space>
            ),
        },
    ];




    return (
        <div>
            <Table columns={columns} dataSource={productData} />;
        </div>
    )
}

export default ViewProduce