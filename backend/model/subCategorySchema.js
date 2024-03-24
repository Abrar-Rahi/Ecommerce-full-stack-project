const mongoose = require("mongoose")
const {Schema} = mongoose


const subCatSchima = new Schema({
   subCategoryName : {
    type : String,
    require : true,
    unique : true
   },
   ownerId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   },
   catId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Category"
   },
   status : {
    type : String,
    enum : ["pending", "rejected", "approved"],
    default : "pending"
   }
})

module.exports = mongoose.model("SubCategory" , subCatSchima)