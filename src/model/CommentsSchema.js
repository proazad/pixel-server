const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CommentsSchema = new Schema({
    author: {
        type: String,
    },
    authoImage: {
        type: String,
    },
    authorEmail: {
        type: String,
    },
    postID: {
        type: String,
    },
    date: {
        type: Date,
    },
    comment: {
        type: Number,
    }

});

const commentsCollection = model("comments", CommentsSchema);
module.exports = commentsCollection;
