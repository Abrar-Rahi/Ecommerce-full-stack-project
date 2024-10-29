const ProductSchema = require("../model/productSchema")


const updateProductController = async (req,res)=>{
    
 
 const {id} = req.params
 const {status} = req.query
    
     await ProductSchema.findOneAndUpdate({_id:id},{status: status=== "pending" ? "approved" : "pending"})
    
     res.send({message : "status changed"})

}

module.exports = updateProductController