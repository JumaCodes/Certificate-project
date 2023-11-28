const { body } = require("express-validator");
const express = require("express")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const validate =  [
    body("title", "title field  is required").trim().not().isEmpty(),
    body("description", "description field  is required").trim().not().isEmpty()
]
module.exports = validate;