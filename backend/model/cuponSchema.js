const mongoose = require("mongoose")
const {Schema} = mongoose


const cuponSchima = new Schema({
   cupon : {
    type : String,
    require : true,
    unique : true
   },
   cuponAmount : {
    type : Number,
    require : true,
   },
   cuponRang : {
    type : Number,
    require : true,
   },
   cuponType : {
    type : String,
   },
   
   
})

module.exports = mongoose.model("Cupon" , cuponSchima)