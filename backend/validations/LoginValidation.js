const {body} =  require('express-validator');

module.exports = [
    body("email","email field is required").trim().not().isEmpty(), 
    body("password","password field is required").trim().not().isEmpty(), 
];