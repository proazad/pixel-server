const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const postCollection = require('../model/PostsSchema');

/**
 * Posts Related All API Start here 
 *   
 * */
// Get All Posts API
router.get("/posts", async (req, res) => {
    try {
        const result = await postCollection.find();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//Post Single
router.post("/posts", async (req, res) => {
    try {
        const post = req.body;
        const result = await postCollection.create(post);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});



// Get Single Post by Id  okay
router.get('/posts/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const result = await postCollection.findOne(query);
    res.send(result);
});

// Update Single Post By Id 
router.put("/posts/:id", async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    const filter = { _id: id }
    const updateDoc = {
        $set: {
            title: course.title,
            afterImage: post.afterImage,
            beforeImage: post.beforeImage,
            views: post.views,
            love: post.love,
            description: post.description,
        }
    }
    const result = await postCollection.findByIdAndUpdate(filter, updateDoc)
    res.send(result);
});



// Delete Single Post By ID  Okay
router.delete("/posts/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: id }
    const result = await postCollection.deleteOne(filter);
    res.send(result);
});


module.exports = router