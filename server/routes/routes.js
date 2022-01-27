const express = require('express')
const router = express.Router()
const Post = require('./models/Post') //new 

//fetch all posts
router.get('/post', async (req,res) => {
    const posts = await Post.fine()
    res.send(posts)
})


//Create a post
router.get('/posts', async(req,res) => {
    const post = new Post({
        name: req.body.title,
        content: req.body.content
    })

    await post.save()
    res.json(post)
})


module.exports = router