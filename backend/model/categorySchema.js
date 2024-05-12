const mongoose = require("mongoose")
const {Schema} = mongoose


const catSchima = new Schema({
   categoryName : {
    type : String,
    require : true,
    unique : true
   },
   ownerId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   },
   subCatList :[
      {
         type : mongoose.Schema.Types.ObjectId,
         ref : "SubCategory"
      }
   ],
   status : {
    type : String,
    enum : ["pending", "rejected", "approved"],
    default : "pending"
   }
})

module.exports = mongoose.model("Category" , catSchima)