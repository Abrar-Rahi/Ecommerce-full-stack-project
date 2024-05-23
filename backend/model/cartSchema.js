const mongoose = require("mongoose")
const {Schema} = mongoose


const cartSchima = new Schema({
   productId : {
    type : mongoose.Schema.Types.ObjectId,
    ref: "Product",
   },
   quantity : {
    type : Number,
   },
   cartOwnerId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   },
   
   
})

module.exports = mongoose.model("Cart" , cartSchima)