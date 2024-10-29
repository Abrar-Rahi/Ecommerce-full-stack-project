const CategorySchema = require("../model/categorySchema")


const updateCategoryController = async (req,res)=>{
    
 
 const {id} = req.params
 const {status} = req.query
    
     await CategorySchema.findOneAndUpdate({_id:id},{status: status=== "pending" ? "approved" : "pending"})
    
     res.send({message : "status changed"})

}

module.exports = updateCategoryController