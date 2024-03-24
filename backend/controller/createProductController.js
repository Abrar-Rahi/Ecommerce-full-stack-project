
const ProductSchema = require("../model/productSchema")

const createProductController = async (req,res)=>{
 const {productName, description , avater} = req.body
 const {filename} = req.file
console.log(filename);
 let productList = new ProductSchema({
    productName : productName,
    description : description,
    image : `/uploads/${filename}`
 })

 productList.save()
res.send(productList)

}
module.exports = createProductController