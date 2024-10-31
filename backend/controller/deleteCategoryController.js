const CategorySchema = require("../model/categorySchema")
const SubCategorySchema = require("../model/subCategorySchema")


const deleteCategoryController = async (req,res)=>{
    
 
 const {id} = req.params
    
     await CategorySchema.findOneAndDelete({_id:id})
     await SubCategorySchema.deleteMany({catId:id})
    
     res.send({message : "Deleted Category"})

}

module.exports = deleteCategoryController