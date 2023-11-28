const jwt = require('jsonwebtoken');
const secretKey = '$2y$10$549sr.xMYoKm.YzraHhZuu/FUA5cmLKvU6bJlOt.HhHplxAtQPTfe';
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const Post = require('../models/Post');


module.exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(200).json({ authorization: false })
        req.user = user;
        next();
    });
}

module.exports.validateFile = (req, res, next) => {
    if (!req.file) {
        return res.json({ status: "error", message: "Image is required" });
    }
    next();
}; 

module.exports.inputValidationResult = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        if (req.file && req.file.fieldname === "profile") {
            const uploadedImage = path.join(__dirname + "/..", "upload/images", req.file.filename)
            if (fs.existsSync(uploadedImage)) {
                fs.unlinkSync(uploadedImage)
            }
        }
        return res.json({ status: "error", message: error.array()[0].msg })
    } else {
        next();
    }
}

module.exports.checkIfPostExist = async (req, res, next) => {
    try {
        let oldPost = await Post.findById(req.params.id);
        if (oldPost) {
            req.oldPost = oldPost;
            next();
        } else {
            return res.json({ status: "error", message: "Post with this id does not exist" });
        }
    } catch (err) {
        return res.json({ status: "error", message: "Post with this id does not exist" });
    }

}
