const ModelSchema = require("../model/modelSchema")

const otpController = async (req,res)=>{
 const {email,otp} = req.body
 let existingUser = await ModelSchema.findOne({email:email})
 
 if(existingUser.otp == otp){
    await ModelSchema.findOneAndUpdate({email:email}, {otp:""})
    res.send({success:"otp varification done"})
}else{
     res.send({error:"wrong otp"})

 }
}

module.exports = otpController