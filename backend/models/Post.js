// const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    user_id: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});


const Post = mongoose.model("Post", postSchema);
module.exports = Post;