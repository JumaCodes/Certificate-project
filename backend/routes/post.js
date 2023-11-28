const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const { authenticateToken, validateFile, inputValidationResult, checkIfPostExist } = require('../middleware/AppMiddleWare');
const CreatePostValidator = require('../validations/CreatePostValidator');
const Post = require('../models/Post');
const LikePost = require('../models/LikePost');
const { storage } = require('../Helper');



router.get("/get-post/:id", checkIfPostExist, async function (req, res) {
    let posts = await Post.findOne({ _id: req.params.id });
    res.json({ status: "success", message: posts })
});


router.get("/all-posts", async function (req, res) {
    let posts = await Post.find({}).sort({ created_at: -1 });
    res.json({ status: "success", message: posts })
});



router.get("/all-posts-by-auth-user", authenticateToken, async function (req, res) {
    let posts = await Post.find({ user_id: req.user.sub }).sort({ created_at: -1 });
    res.json({ status: "success", message: posts })
});

router.post("/create-post", authenticateToken, storage().single("profile"), CreatePostValidator, inputValidationResult, validateFile, function (req, res) {
    let post = new Post({
        title: req.body.title.trim(),
        user_id: req.user.sub,
        description: req.body.description.trim(),
        image: req.file.filename,
    });
    post.save();
    return res.json({ status: "success", message: "Successfully uploaded post" });
});


router.post("/edit-post/:id", authenticateToken, storage().single("profile"), checkIfPostExist, CreatePostValidator, inputValidationResult, async function (req, res) {
    let updateData = {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
    };
    if (req.file && req.file.fieldname === "profile") {
        updateData.image = req.file.filename;
        let oldImagePath = path.join(__dirname + "/..", "upload/images", req.oldPost.image);
        console.log(oldImagePath)
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath)
        }
    }
    let post = await Post.findByIdAndUpdate(req.params.id, updateData);
    if (post) {
        return res.json({ status: "success", message: "Successfully updated post" });
    } else {
        return res.json({ status: "error", message: "Something went wrong! please try again" });
    }
});


router.get("/delete-post/:id", authenticateToken, checkIfPostExist, async function (req, res) {
    let posts = await Post.findByIdAndDelete(req.params.id);
    res.json({ status: "success", message: "Successfully deleted post" })
});


router.post("/like-post/:id", authenticateToken, checkIfPostExist, async function (req, res) {
    let likePost = await LikePost.findOne({ post_id: req.params.id, user_id: req.user.sub });
    if (!likePost) {
        likePost = new LikePost({ post_id: req.params.id, user_id: req.user.sub });
        likePost.save();
    }
    res.json({ status: "success", message: "Successfully liked post" })
});

router.post("/auth-user-have-liked-post/:id", authenticateToken, checkIfPostExist, async function (req, res) {
    let likePost = await LikePost.findOne({ post_id: req.params.id, user_id: req.user.sub });
    if (likePost) {
        res.json({ status: "success", message: { hasLiked: true } })
    }
    res.json({ status: "success", message: { hasLiked: false } })
});





module.exports = router;