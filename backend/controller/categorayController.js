const CategorySchema = require("../model/categorySchema")

const categorayController = async (req,res)=>{
 const {categoryName, ownerId} = req.body

 existingCategory = await CategorySchema.findOne({categoryName : categoryName})
 
if(existingCategory){
    res.send("This Category is Already Exist")
}else{
    let category = new CategorySchema({
        categoryName : categoryName,
        ownerId : ownerId
    })
    category.save()
    res.send({success : "Category Created. Wait for Admin Confirmation"})
}

}
module.exports = categorayController