const PaymentSchema = require('../model/paymentSchema')
const CartSchema = require('../model/cartSchema');
const ProductSchema = require('../model/productSchema');
const AffiliatSchema = require('../model/affiliatSchema');
const axios = require("axios")
const nodemailer = require('nodemailer');

const paymentController = async (req, res) => {

    

    let { cus_name, cus_email, cus_phone, cus_add, cus_city, cus_postcode, cus_country, amount, wonerId, cartId, userId, slug } = req.body

    const tranId = Math.floor(Math.random() * 10000)

    const data = {
        "store_id": "aamarpaytest",
        "tran_id": tranId ,
        "success_url": "http://localhost:3000/success",
        "fail_url": "http://localhost:3000/failed",
        "cancel_url": "http://localhost:3000/cancled",
        "amount": amount,
        "currency": "BDT",
        "signature_key": "dbb74894e82415a2f7ff0ec3a97e4183",
        "desc": "Merchant Registration Payment",
        "cus_name": cus_name,
        "cus_email": cus_email,
        "cus_phone": cus_phone,
        "cus_add": cus_add,
        "cus_city": cus_city,
        "cus_postcode": cus_postcode,
        "cus_country": cus_country,
        "type": "json"
    }

    let response = await axios.post("https://​sandbox​.aamarpay.com/jsonpost.php",
        data,
        headers = {
            'Content-Type': 'application/json'
        }

    )
    const payment = new PaymentSchema({

        "tran_id": tranId,
        "amount": amount,
        "cus_name": cus_name,
        "cus_email": cus_email,
        "cus_phone": cus_phone,
        "cus_add": cus_add,
        "cus_city": cus_city,
        "cus_postcode": cus_postcode,
        "cus_country": cus_country,
        wonerId: wonerId,
    })
    payment.save()

    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);



    const cartData = await CartSchema.find({ cartOwnerId: wonerId }).populate("productId");
    function productInfoCart() {

        return cartData.map((item) => {
            const unitPrice = item.productId.sellPrice || item.productId.productPrice;
            const totalPrice = unitPrice * item.quantity;

            return `
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">${item.productId.productName}</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${unitPrice}</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${totalPrice}</td>
                    </tr>`;
        }).join('');

    }

    const productData = await ProductSchema.find({ slug: slug })
    function productInfoAffiliate() {

        return productData.map((item) => {
            const unitPrice = item.sellPrice || item.productPrice;
            const totalPrice = unitPrice * item.quantity;
            return `
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">${item.productName}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${unitPrice}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${totalPrice}</td>
            </tr>`;
        }).join('');

    }
   
    var productId 
     productData.map(item=>{
        productId = item._id
     })

    if (userId) {
        const percentage = (amount * 10) / 100
        affiliat = new AffiliatSchema({
            affiliatOwnerId: userId,
            productId : productId,
            amount: percentage
        })
        affiliat.save()
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "rahiabrar177@gmail.com",
            pass: "fcen kmox lmrc ongq",
        },
    });

    const mailOptions = {
        from: 'rahiabrar177@gmail.com',
        to: cus_email,
        subject: "Purchase Invoice",
        html: `
        <table width="50%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #333; margin: 0 auto; text-align: center;">
            <tr>
                <td style="padding: 20px 0; text-align: center;">
                    <h2 style="margin: 0; color: #007bff;">Invoice</h2>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 5px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Invoice No:</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${tranId}</td>
                        </tr>
                        <tr>
                            <td style="padding: 5px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Date:</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${formattedDate}</td>
                        </tr>
                        <tr>
                            <td style="padding: 5px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Bill To:</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${cus_name}<br>${cus_add}<br>${cus_city}, ${cus_country}, ${cus_postcode}</td>
                        </tr>
                        <tr>
                            <td style="padding: 5px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Ship To:</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">StarTech<br>5678 Oak Avenue<br>Dhanmondi, Dhaka, 1200</td>
                        </tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                        <thead>
                            <tr>
                                <th style="padding: 10px; border: 1px solid #ddd; background-color: #007bff; color: #fff;">Product</th>
                                <th style="padding: 10px; border: 1px solid #ddd; background-color: #007bff; color: #fff;">Quantity</th>
                                <th style="padding: 10px; border: 1px solid #ddd; background-color: #007bff; color: #fff;">Unit Price</th>
                                <th style="padding: 10px; border: 1px solid #ddd; background-color: #007bff; color: #fff;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${userId ? productInfoAffiliate() : productInfoCart()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3" style="padding: 10px; border: 1px solid #ddd; text-align: right; font-weight: bold;">Subtotal</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${amount}</td>
                            </tr>
                        </tfoot>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px; text-align: center; font-size: 12px; color: #888;">
                    <p>Thank you for your business!</p>
                    <p>If you have any questions, please contact us at support@example.com</p>
                </td>
            </tr>
        </table>`
    };


    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }


    res.send({ payment_url: response.data.payment_url })


}
module.exports = paymentController