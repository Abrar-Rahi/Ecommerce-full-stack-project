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
const addToCartController = require("../../controller/addToCartController")
const allCart = require("../../controller/allCart")
const createCuponController = require("../../controller/createCuponController")
const allCupon = require("../../controller/allCupon")
const matchCuponController = require("../../controller/matchCuponController")
const productDetails = require("../../controller/productDetailsController")
const paymentController = require("../../controller/paymentController")
const updateCategoryController = require("../../controller/updateCategoryController")
const updateProductController = require("../../controller/updateProductController")
const searchController = require("../../controller/searchController")
const viewAffiliateController = require("../../controller/viewAffiliateController")
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
route.post("/updateCategory/:id",updateCategoryController)
route.post("/subcategory",subCategorayController)
route.post("/createProduct", upload.array('photos', 12),createProductController)
route.post("/updateProduct/:id",updateProductController)
route.post("/addVarient", upload.single('avatar'),addVarientController)
route.post("/addToCart", addToCartController)
route.post("/createCupon", createCuponController)
route.post("/matchCupon", matchCuponController)
route.post("/payment", paymentController)





route.get("/allcat", allCatController)
route.get("/allsubcat", allSubCatController)
route.get("/allproduct", allProductController)
route.get("/subCatUnderCat", subCatUnderCat)
route.get("/productDetails", productDetails)
route.get("/cartItem", allCart)
route.get("/allCupon", allCupon)
route.get("/affiliate", viewAffiliateController)
route.get("/search/:slug", searchController)

module.exports = route