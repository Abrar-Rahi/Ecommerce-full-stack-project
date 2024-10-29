const mongoose = require("mongoose")
const {Schema} = mongoose


const productSchima = new Schema({
   productName : {
    type : String,
    require : true,
    unique : true
   },
   description : {
    type : String
   },
   image: {
    type : [String]
   },
   slug: {
    type : String
   },
   productPrice: {
      type : String,
      require : true,
   },
   sellPrice: {
      type : String,
   },
   status : {
      type : String,
      enum : ["pending", "rejected", "approved"],
      default : "pending"
     }
})

module.exports = mongoose.model("Product" , productSchima)