const CategorySchema = require("../model/categorySchema")

const allCatController = async (req,res)=>{
 

 allcat = await CategorySchema.find()
 
res.send(allcat)

}
module.exports = allCatController