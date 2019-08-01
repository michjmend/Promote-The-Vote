const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")

const User = require("../models/User")
const Posts = require("../models/Posts")

// Get all posts
router.get("/", async (req, res) => {
  console.log("we hit it here")
  try {
    const posts = await Posts.find({}).sort({ date: -1})
    console.log("Posts in the house ",posts)
    res.json(posts)
  } catch (err) {
    console.error(err.msg)
    res.status(500).send("Server Error")
  }
})

// Post new story
router.post("/", auth, async (req, res) => {
  console.log("we hit dis route doe")
  console.log(req.user.id)
  try {
    const { title, story, video } = req.body
    const newPost = new Posts({
      title,
      story,
      video,
      user: req.user.id
    })
    const post = await newPost.save()
    res.json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router