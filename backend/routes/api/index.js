const express = require("express")
const route = express.Router()
const registrationRoute = require("./registrationRoute")


route.use("/auth",registrationRoute)

module.exports = route