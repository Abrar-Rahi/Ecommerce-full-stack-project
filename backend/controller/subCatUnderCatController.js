const SubCategorySchema = require("../model/subCategorySchema")



const subCatUnderCat = async (req,res)=>{


 allsubcat = await SubCategorySchema.find({catId:req.query.slug}).populate("ownerId")
 
res.send(allsubcat)

}
module.exports = subCatUnderCat