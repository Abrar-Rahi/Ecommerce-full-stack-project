const Product = require("../model/productSchema")

const searchController = async (req, res) => {
    const { slug } = req.params

    let data = await Product.find({
        $or: [
            { productName: { $regex: slug, $options: "i" } },
            { description: { $regex: slug, $options: "i" } },
        ]
    })
    res.send({data: data})
}


module.exports = searchController