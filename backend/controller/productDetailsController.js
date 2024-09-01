const Product = require("../model/productSchema")



const productDetails = async (req, res) => {


    
    pro = await Product.find({ slug: req.query.slug })
    
    
    res.send(pro)
    
   

}
module.exports = productDetails