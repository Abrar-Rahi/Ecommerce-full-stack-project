const CuponSchema = require("../model/cuponSchema")



const matchCuponController = async (req, res) => {
 
    let {ccupon} = req.body
    existingCupon = await CuponSchema.find({cupon : ccupon})

    if(existingCupon){
        return res.send(existingCupon[0])
    }else{
        console.log("cupon not matched");
        // return res.send(JSON.stringify("cupon not matched"))
    }

    

}
module.exports = matchCuponController