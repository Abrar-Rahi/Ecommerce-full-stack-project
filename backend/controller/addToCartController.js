
const CartSchema = require("../model/cartSchema")

const addToCartController = async (req,res)=>{
 const {productId,quantity,cartOwnerId} = req.body


 let existintCartProduct = await CartSchema.find({productId : productId})

if(existintCartProduct.length > 0 ){
   
    if(req.query.type == "increase"){

        let data = await CartSchema.findOneAndUpdate({_id : existintCartProduct[0]._id}, {quantity : existintCartProduct[0].quantity+1}, {new:true})
        return res.send(data)
    }else if(req.query.type == "decrease"){

        let data = await CartSchema.findOneAndUpdate({_id : existintCartProduct[0]._id}, {quantity : existintCartProduct[0].quantity-1}, {new:true})
        return res.send(data)
    }
    

}else{

    let cart = new CartSchema({
        productId: productId,
        quantity : 1,
        cartOwnerId : "65f96c4b016204bcaae73aeb"
    })
    cart.save()

    return res.send(cart)
}


}
module.exports = addToCartController