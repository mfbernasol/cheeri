const express = require('express');
const router = express.Router();
const Post = require('./models/Post'); //new

//fetch all posts
router.get('/', async (req, res) => {
  const posts = await Post.fine();
  res.send(posts);
});

//Create a post
router.post('/posts', async (req, res) => {
  try {
    const newPost = new Post({
      name: req.body.title,
      content: req.body.content,
    });

    await newPost.save();
    res.json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).send('server error');
  }
});

module.exports = router;
