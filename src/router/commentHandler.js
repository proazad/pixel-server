const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const commentsCollection = require('../model/CommentsSchema');

/**
 * Comments Related All API Start here 
 *   
 * */

// Get All Comments API
router.get("/comments", async (req, res) => {
    try {
        const result = await commentsCollection.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Get All Comments by Post ID
router.get("/comments/post/:postid", async (req, res) => {
    try {
        const postID = req.params.postid;
        const query = { postID: postID };
        const result = await commentsCollection.find(query);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//Post Single Comments 
router.post("/comments", async (req, res) => {
    try {
        const comment = req.body;
        const result = await commentsCollection.create(comment);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});



// Get Single comment by Id  okay
router.get('/comments/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const result = await commentsCollection.findOne(query);
    res.send(result);
});

// Update Single Comment By Id 
router.put("/comments/:id", async (req, res) => {
    const id = req.params.id;
    const comment = req.body;
    const filter = { _id: id }
    const updateDoc = {
        $set: {
            author: comment.author,
            authoImage: comment.authoImage,
            authorEmail: comment.authorEmail,
            postID: comment.postID,
            date: comment.date,
            comment: comment.comment,
        }
    }
    const result = await commentsCollection.findByIdAndUpdate(filter, updateDoc)
    res.send(result);
});



// Delete Single Comment By ID  Okay
router.delete("/comments/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: id }
    const result = await commentsCollection.deleteOne(filter);
    res.send(result);
});


module.exports = router