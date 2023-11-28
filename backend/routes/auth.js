const express = require('express');
const jwt = require('jsonwebtoken');
const { inputValidationResult } = require('../middleware/AppMiddleWare');
const { authenticateToken } = require('../middleware/AppMiddleWare');


const router = express.Router();
const User = require('../models/User');
const RegisterValidation = require('../validations/RegisterValidation');
const LoginValidation = require('../validations/LoginValidation');

const secretKey = '$2y$10$549sr.xMYoKm.YzraHhZuu/FUA5cmLKvU6bJlOt.HhHplxAtQPTfe';


router.post('/register', RegisterValidation, inputValidationResult, async (req, res) => {
    let exist_user = await User.findOne({ email: req.body.email.trim() });
    if (exist_user) return res.status(200).json({ status: "error", message: "This email has already been registered" });
    let user = new User({
        "first_name": req.body.first_name.trim(),
        "last_name": req.body.last_name.trim(),
        "join_as": req.body.join_as.trim(),
        "email": req.body.email.trim(),
        "password": req.body.password.trim(),
    });
    user.save();
    const userData = {
        sub: user.id,
        roles: user.join_as
    };
    const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });
    return res.status(200).json({ status: "success", message: "Successfully registered", token });
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
            return res.status(422).json({ status: "success", message: "Successfully logged in", token });
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