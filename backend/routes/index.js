const express = require("express")
const route = express.Router()
const apiRoute = require("./api")

let api = process.env.API_BASE_URL

route.use(api,apiRoute)

route.use(api,(req,res)=>res.send("select wrong api"))

module.exports = route