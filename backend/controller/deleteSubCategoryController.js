const SubCategorySchema = require("../model/subCategorySchema")


const deleteSubCategoryController = async (req,res)=>{
    
 
 const {id} = req.params
    
     await SubCategorySchema.findOneAndDelete({_id:id})
    
     res.send({message : "Deleted SubCategory"})

}

module.exports = deleteSubCategoryController