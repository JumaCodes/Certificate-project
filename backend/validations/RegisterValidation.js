const {body} = require("express-validator");

module.exports = [
    body("first_name","First name field is required").trim().not().isEmpty(),
    body("last_name","Last name field is required").trim().not().isEmpty(),
    body("join_as","Join As field is required").trim().not().isEmpty(),
    body("email","Invalid email address").trim().not().isEmpty().isEmail(),
    body("password","Password is not strong").trim().isLength({min:8}),
];