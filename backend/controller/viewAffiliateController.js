const AffiliateSchema = require("../model/affiliatSchema")



const viewAffiliateController = async (req, res) => {


    allAffiliateData = await AffiliateSchema.find().populate("affiliatOwnerId").populate("productId")

    res.send(allAffiliateData)

}
module.exports = viewAffiliateController