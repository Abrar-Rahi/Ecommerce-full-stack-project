const SubCategorySchema = require("../model/subCategorySchema")



const allSubCatController = async (req,res)=>{
 

 allsubcat = await SubCategorySchema.find()
 
res.send(allsubcat)

}
module.exports = allSubCatController