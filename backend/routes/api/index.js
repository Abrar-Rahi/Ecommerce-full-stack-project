const express = require("express")
const route = express.Router()
const registrationRoute = require("./registrationRoute")
const productRoute = require("./productRoute")


route.use("/auth",registrationRoute)
route.use("/product", productRoute)

module.exports = route