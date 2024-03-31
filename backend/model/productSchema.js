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
    type : String
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
   }
})

module.exports = mongoose.model("Product" , productSchima)