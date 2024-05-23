
const CartSchema = require("../model/cartSchema")

const addToCartController = async (req,res)=>{
 const {productId,quantity,cartOwnerId} = req.body


 let existintCartProduct = await CartSchema.find({productId : productId})

if(existintCartProduct.length > 0 ){
   
    if(req.query.type == "increse"){

        let data = await CartSchema.findOneAndUpdate({_id : existintCartProduct[0]._id}, {quantity : existintCartProduct[0].quantity+1}, {new:true})
        return res.send(data)
    }else if(req.query.type == "decrese"){

        let data = await CartSchema.findOneAndUpdate({_id : existintCartProduct[0]._id}, {quantity : existintCartProduct[0].quantity-1}, {new:true})
        return res.send(data)
    }
    

}else{

    let cart = new CartSchema({
        productId: productId,
        quantity : 1,
        cartOwnerId : "65f575e614b86880d77c0532"
    })
    cart.save()

    return res.send(cart)
}


}
module.exports = addToCartController