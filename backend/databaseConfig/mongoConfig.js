const mongoose = require('mongoose');
let mongoConfig = ()=>{

    mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.skerrfb.mongodb.net/${process.env.PROJECT_NAME}?retryWrites=true&w=majority`).then(()=>{console.log("database connected")})
}

module.exports =mongoConfig


