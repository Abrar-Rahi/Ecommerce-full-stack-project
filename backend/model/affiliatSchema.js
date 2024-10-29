const mongoose = require("mongoose")
const { Schema } = mongoose


const affiliatSchema = new Schema({
    affiliatOwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    amount: {
        type: String,
    },



})

module.exports = mongoose.model("Affiliat", affiliatSchema)