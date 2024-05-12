const express = require("express")
const multer  = require('multer')
const categorayController = require("../../controller/categorayController")
const subCategorayController = require("../../controller/subCategoryController")
const allCatController = require("../../controller/allCatController")
const allSubCatController = require("../../controller/allSubCatController")
const createProductController = require("../../controller/createProductController")
const allProductController = require("../../controller/allProductController")
const addVarientController = require("../../controller/addVarientController")
const subCatUnderCat = require("../../controller/subCatUnderCatController")
const route = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
      
    }
  })
  
  const upload = multer({ storage: storage })

route.post("/category",categorayController)
route.post("/subcategory",subCategorayController)
route.post("/createProduct", upload.single('avatar'),createProductController)
route.post("/addVarient", upload.single('avatar'),addVarientController)





route.get("/allcat", allCatController)
route.get("/allsubcat", allSubCatController)
route.get("/allproduct", allProductController)
route.get("/subCatUnderCat", subCatUnderCat)

module.exports = route