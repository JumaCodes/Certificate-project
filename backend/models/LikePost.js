const mongoose = require('mongoose');

const LikePostSchema = new mongoose.Schema({
    post_id: {
        type: String
    },
    user_id: {
        type: String
    }
});


let LikePost = mongoose.model("LikePost", LikePostSchema);

module.exports = LikePost;