
const VarientSchema = require("../model/varientSchema")

const addVarientController = async (req,res)=>{
 const {varientName, avater, regularPrice, sellPrice, productId} = req.body
 const {filename} = req.file

 let varientList = new VarientSchema({
    varientName : varientName,
    image : `/uploads/${filename}`,
    regularPrice : regularPrice,
    sellPrice : sellPrice,
    productId : productId
 })

 varientList.save()
res.send(varientList)

}
module.exports = addVarientController