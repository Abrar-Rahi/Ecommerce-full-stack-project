const ModelSchema = require("../model/modelSchema")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const updatePassword = async (req,res)=>{
    
 const {token,password} = req.body
 
 let decoded = jwt.verify(token, 'shhhhh');
 bcrypt.hash(password, 10, async function (err, hash) {
    
     await ModelSchema.findOneAndUpdate({email:decoded.email},{password:hash})
    
     res.send("password changed")
});

}

module.exports = updatePassword