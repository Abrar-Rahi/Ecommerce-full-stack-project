const SubCategorySchema = require("../model/subCategorySchema")



const allSubCatController = async (req,res)=>{
 

 allsubcat = await SubCategorySchema.find().populate('catId')
 
res.send(allsubcat)

}
module.exports = allSubCatController