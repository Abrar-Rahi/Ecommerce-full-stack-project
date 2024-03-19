const ModelSchema = require("../model/modelSchema")
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

const jwtForgotPassController = async (req,res)=>{
 const {email} = req.body

 let existingUser = await ModelSchema.findOne({email:email})
 
 if(existingUser){
    
    let token = jwt.sign({ email: email }, 'shhhhh');

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rahiabrar177@gmail.com",
            pass: "fcen kmox lmrc ongq",
        },
    });

   
    const info = await transporter.sendMail({
        from: 'rahiabrar177@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Recovery pasword",
        html: `<a href="http://localhost:5173/newpass/${token}">please click here for Recovery password.</a>`, // html body
    });
 }else{
    res.send("email not found")
 }
}

module.exports = jwtForgotPassController