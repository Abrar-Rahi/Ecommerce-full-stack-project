const ModelSchema = require("../model/modelSchema")
const bcrypt = require('bcrypt');


const loginController = async (req, res) => {

    const { email, password } = req.body

    let existingUser = await ModelSchema.findOne({ email: email })

    if (existingUser) {
        bcrypt.compare(password, existingUser.password, function (err, result) {
            if (result) {
                res.send({
                    id : existingUser._id,
                    username : existingUser.username,
                    email : existingUser.email,
                    role : existingUser.role,
                    isEmailVarified : existingUser.isEmailVarified,
                })
            } else {
                res.send("credinytial unmatched")
            }

        });
    } else {
        res.send("credinytial unmatched")

    }
}

module.exports = loginController