const mongoose = require("mongoose")
const {Schema} = mongoose


const paymentSchema = new Schema({
    tran_id : {
    type : Number,
    require : true,
    unique : true
   },
    cus_name : {
    type : String,
    require : true
   },
   cus_email : {
    type : String,
    require : true,
   },
   cus_phone : {
    type : String,
    require : true,
   },
   cus_add : {
    type : String,
   },
   cus_city : {
    type : String,
   },
   cus_postcode : {
    type : String,
   },
   cus_country : {
    type : String,
   },
   wonerId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   },

})

module.exports = mongoose.model("Payment" , paymentSchema)