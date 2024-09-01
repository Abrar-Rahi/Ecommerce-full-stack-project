
const ProductSchema = require("../model/productSchema")

const createProductController = async (req,res)=>{
 const {productName, description , avater,slug, productPrice, sellPrice} = req.body
 

let multipleImage = []
req.files.map(item =>{
   multipleImage.push(`/uploads/${item.filename}`);

})
 let productList = new ProductSchema({
    productName : productName,
    description : description,
    image : multipleImage,
    slug : slug,
    productPrice : productPrice,
    sellPrice : sellPrice
 })

 productList.save()
res.send(productList)

}
module.exports = createProductController