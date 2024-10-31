const OrderList = require("../model/paymentSchema")



const allOrderListController = async (req, res) => {

    const {id} = req.params

    order = await OrderList.find({wonerId : id})

    res.send(order)

}
module.exports = allOrderListController