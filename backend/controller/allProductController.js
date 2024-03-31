const ProductSchema = require("../model/productSchema")

const allProductController = async (req,res)=>{
 

 allProduct = await ProductSchema.find()
 
res.send(allProduct)

}
module.exports = allProductController