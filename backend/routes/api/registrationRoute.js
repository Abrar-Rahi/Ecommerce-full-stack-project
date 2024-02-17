const express = require("express")
const route = express.Router()
const regController = require("../../controller/regController")
const secureApi = require("../../middlewire/secureApi")

route.post("/registration",secureApi,regController)

module.exports = route