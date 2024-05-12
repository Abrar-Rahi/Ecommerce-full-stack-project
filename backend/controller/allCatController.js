const CategorySchema = require("../model/categorySchema")

const allCatController = async (req,res)=>{
 

 allcat = await CategorySchema.find().populate( "subCatList")
 
res.send(allcat)

}
module.exports = allCatController