const express = require('express');
const router = express.Router();
const Post = require('../models/Post')



// GET all posts
router.get('/', async (req, res) => {
  try{
      const posts = await Post.find()
  }catch{
      res.status(res.json({message:err.message}))
  }
});

// Create posts
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        content: req.body.content
    })
    try{
        const newPost = await post.save()
        res.status(201).json(newPost)
    }catch(err){
        res.status(400).json({message: err.message})
    }

});

//Update one

//Delete one

module.exports = router;
