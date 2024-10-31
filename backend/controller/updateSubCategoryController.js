const SubCategorySchema = require("../model/subCategorySchema")


const updateSubCategoryController = async (req,res)=>{
    
 
 const {id} = req.params
 const {status} = req.query
    
     await SubCategorySchema.findOneAndUpdate({_id:id},{status: status=== "pending" ? "approved" : "pending"})
    
     res.send({message : "status changed"})

}

module.exports = updateSubCategoryController