const express = require('express');
const jwt = require('jsonwebtoken');
const { inputValidationResult } = require('../middleware/AppMiddleWare');
const { authenticateToken } = require('../middleware/AppMiddleWare');
const { body } = require("express-validator");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp@gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'emma.thomas11800@gmail.com',
        pass: 'uoqunlbebgkkfqje',
    }
});


const router = express.Router();
const User = require('../models/User');
const RegisterValidation = require('../validations/RegisterValidation');
const LoginValidation = require('../validations/LoginValidation');
const { generateRandomIntegers } = require('../Helper');

const secretKey = '$2y$10$549sr.xMYoKm.YzraHhZuu/FUA5cmLKvU6bJlOt.HhHplxAtQPTfe';


router.post('/register', RegisterValidation, inputValidationResult, async (req, res) => {
    let exist_user = await User.findOne({ email: req.body.email.trim() });
    if (exist_user) return res.status(200).json({ status: "error", message: "This email has already been registered" });
    let generate_vToken = generateRandomIntegers(1, 100, 4);
    let user = new User({
        "first_name": req.body.first_name.trim(),
        "last_name": req.body.last_name.trim(),
        "join_as": req.body.join_as.trim(),
        "email": req.body.email.trim(),
        "password": req.body.password.trim(),
        "verify_token": generate_vToken.join("")
    });
    user.save();
    const mailOptions = {
        from: {
            name: "Chatter",
            address: "emma.thomas11800@gmail.com"
        },
        to: req.body.email.trim(),
        subject: 'Verification Token',
        text: 'Use this verification code to verify your account ' + generate_vToken.join("")
    };

    await transporter.sendMail(mailOptions);

    const userData = {
        sub: user.id,
        roles: user.join_as
    };

    const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });
    return res.status(200).json({ status: "success", message: "Successfully registered", token });
});

router.post("/verify-email", authenticateToken, [body("code", "Code field is required").trim().not().isEmpty()], async function (req, res) {
    let user_login = await User.findById(req.user.sub);
    console.log(req.body.code)
    if (user_login.verify_token !== req.body.code) {
        return res.status(200).json({ status: "error", message: "Invalid code provided" });
    } else {
        return res.status(200).json({ status: "success", message: "Successfully verified" });
    }
});

router.post("/login", LoginValidation, inputValidationResult, async (req, res) => {
    let user_login = await User.findOne({ email: req.body.email.trim() });
    if (user_login) {
        if (user_login.password !== req.body.password) {
            res.json({ status: "error", message: "Invalid login details" });
        } else {
            const userData = {
                sub: user_login.id,
                roles: user_login.join_as
            };
            const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });
            return res.status(200).json({ status: "success", message: "Successfully logged in", token });
        }
    } else {
        res.json({ status: "error", message: "Invalid login details" });
    }
});


router.post("/check-is-auth", authenticateToken, (req, res) => {
    return res.status(200).json({ authorization: true })
})


router.post("/get-profile", authenticateToken, async (req, res) => {
    const user = await User.findById(req.user.sub);
    res.json({ status: "success", message: user });
})


module.exports = router;