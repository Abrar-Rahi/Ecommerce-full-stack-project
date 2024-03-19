const ModelSchema = require("../model/modelSchema")
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const blankInput = require("../helpers/blankInput")
const emailValidator = require("../helpers/emailValidator")
const passValidator = require("../helpers/passValidator")

const nodemailer = require("nodemailer");

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


            let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "rahiabrar177@gmail.com",
                    pass: "fcen kmox lmrc ongq",
                },
            });

            // otp varification
            // const info = await transporter.sendMail({
            //     from: 'rahiabrar177@gmail.com', // sender address
            //     to: email, // list of receivers
            //     subject: "OTP varification",
            //     html: `OTP is : ${otp}`, // html body
            // });


            //mail Link varification
            const info = await transporter.sendMail({
                from: 'rahiabrar177@gmail.com', // sender address
                to: email, // list of receivers
                subject: "OTP varification",
                html: `<a href="http://localhost:5173/otpValidation/${email}/${otp}">please click here for varify your email.</a>`, // html body
            });

            bcrypt.hash(password, 10, function (err, hash) {
                let user = new ModelSchema({
                    username: username,
                    email: email,
                    password: hash,
                    otp: otp
                })
                user.save()
                res.send(user)
            });
        }


    }


}

module.exports = regController