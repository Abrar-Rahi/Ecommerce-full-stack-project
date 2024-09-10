const axios = require("axios")

const paymentController =  async (req, res) => {


    let { cus_name, cus_email, cus_phone, cus_add, cus_city, cus_postcode, cus_country, amount } = req.body

    const data = {
        "store_id": "aamarpaytest",
        "tran_id": Math.floor(Math.random() * 10000),
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
    res.send({payment_url:response.data.payment_url})


}
module.exports = paymentController