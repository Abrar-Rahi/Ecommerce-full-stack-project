const ModelSchema = require("../model/modelSchema")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const blankInput = require("../helpers/blankInput")
const emailValidator = require("../helpers/emailValidator")
const passValidator = require("../helpers/passValidator")

const regController = async (req, res) => {

    const { username, email, password } = req.body

    if (blankInput(username)) {
        res.send("username require")
    } else if (blankInput(email)) {
        res.send("email require")

    } else if (emailValidator(email)) {
        res.send("valid email require")

    } else if (blankInput(password)) {
        res.send("password require")

    } else if (passValidator(password)) {
        res.send("checks if an uppercase, lowercase, digit and @#$!%*?& are used in the password. It also limits the length to be 6 minimum ")

    } else {
        let existingUser = await ModelSchema.find({ email: email })
        if (existingUser.length > 0) {
            res.send(`${email} is already exist`)
        } else {

            let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

            bcrypt.hash(password, 10, function (err, hash) {
                let user = new ModelSchema({
                    username: username,
                    email: email,
                    password: hash,
                    otp : otp
                })
                user.save()
                res.send(user)
            });
        }


    }


}

module.exports = regController