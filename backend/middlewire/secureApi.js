let security = process.env.SECURE_API

let secureApi = (req,res,next)=>{
    if(req.headers.authorization == security){
        next()
    }else{
        res.status(401).send("you are not a valid user")
    }
}

module.exports = secureApi