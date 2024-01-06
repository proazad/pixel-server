const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostsSchema = new Schema({
    title: {
        type: String,
    },
    featureImage: {
        type: String,
    },
    afterImage: {
        type: String,
    },
    beforeImage: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    views: {
        type: Number,
    },
    love: {
        type: Number,
    }

});

const postCollection = model("posts", PostsSchema);
module.exports = postCollection;
