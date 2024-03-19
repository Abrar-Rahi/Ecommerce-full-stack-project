const express = require("express")
const route = express.Router()
const regController = require("../../controller/regController")
const secureApi = require("../../middlewire/secureApi")
const otpController = require("../../controller/otpController")
const jwtForgotPassController = require("../../controller/jwtForgotPassController")
const updatePassword = require("../../controller/updatePassword")
const loginController = require("../../controller/loginController")

route.post("/registration",secureApi,regController)
route.post("/login",secureApi,loginController)
route.post("/otpVarification", otpController)
route.post("/forgotpass", jwtForgotPassController)
route.post("/updatepass", updatePassword)

module.exports = route