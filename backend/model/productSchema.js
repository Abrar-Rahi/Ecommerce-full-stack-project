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
   }
})

module.exports = mongoose.model("Product" , productSchima)