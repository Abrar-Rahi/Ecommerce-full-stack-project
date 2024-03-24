const SubCategorySchema = require("../model/subCategorySchema")

const subCategorayController = async (req,res)=>{
 const {subCategoryName, ownerId, catId} = req.body

 existingSubCategory = await SubCategorySchema.findOne({subCategoryName : subCategoryName})
 
if(existingSubCategory){
    res.send("This SubCategory is Already Exist")
}else{
    let subCategory = new SubCategorySchema({
        subCategoryName : subCategoryName,
        ownerId : ownerId,
        catId : catId
    })
    subCategory.save()
    res.send({success : "Sub Category Created. Wait for Admin Confirmation"})
}

}
module.exports = subCategorayController