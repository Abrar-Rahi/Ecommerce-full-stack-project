const mongoose = require("mongoose")
const {Schema} = mongoose


const varientSchema = new Schema({
   varientName : {
    type : String,
    require : true,
    unique : true
   },
   image: {
    type : String
   },
   
   regularPrice: {
      type : String,
      require : true,
   },
   sellPrice: {
      type : String,
   },
   productId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product"
   },
})

module.exports = mongoose.model("Varient" , varientSchema)