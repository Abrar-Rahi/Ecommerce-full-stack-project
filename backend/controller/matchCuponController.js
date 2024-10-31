const CuponSchema = require("../model/cuponSchema")



const matchCuponController = async (req, res) => {
 
    let {ccupon} = req.body
    existingCupon = await CuponSchema.findOne({cupon : ccupon})

    if(existingCupon){
        return res.send(existingCupon)
    }else{
        return res.send(JSON.stringify("cupon not matched"))
    }

    

}
module.exports = matchCuponController