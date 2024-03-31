
const ProductSchema = require("../model/productSchema")

const createProductController = async (req,res)=>{
 const {productName, description , avater,slug, productPrice, sellPrice} = req.body
 const {filename} = req.file
console.log(filename);
 let productList = new ProductSchema({
    productName : productName,
    description : description,
    image : `/uploads/${filename}`,
    slug : slug,
    productPrice : productPrice,
    sellPrice : sellPrice
 })

 productList.save()
res.send(productList)

}
module.exports = createProductController