const CartSchema = require("../model/cartSchema")



const allCart = async (req, res) => {


    allCartItem = await CartSchema.find().populate("productId")

    res.send(allCartItem)

}
module.exports = allCart