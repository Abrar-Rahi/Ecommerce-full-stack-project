const express = require("express")
const route = express.Router()
const regController = require("../../controller/regController")
const secureApi = require("../../middlewire/secureApi")
const otpController = require("../../controller/otpController")

route.post("/registration",secureApi,regController)
route.post("/otpVarification", otpController)

module.exports = route