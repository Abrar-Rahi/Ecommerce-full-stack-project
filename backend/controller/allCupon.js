const CuponSchema = require("../model/cuponSchema")



const allCupon = async (req, res) => {


    allCuponItem = await CuponSchema.find()

    res.send(allCuponItem)

}
module.exports = allCupon