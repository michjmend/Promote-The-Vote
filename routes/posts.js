const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")

const User = require("../models/User")
const Posts = require("../models/Posts")

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find({}).sort({ date: -1})
    console.log("Posts in the house ",posts)
    res.json(posts)
  } catch (err) {
    console.error(err.msg)
    res.status(500).send("Server Error")
  }
})
// Get user's posts
router.get("/:id", auth, async (req, res) => {
  console.log("getting the user's posts")
  try {
    const posts = await Posts.find({ user: req.params.id }).sort({ date: -1 })
    res.json(posts)
  } catch (err) {
    console.error(err.msg)
    res.status(500).send("Server Error")
  }
})
// Update post
router.put("/:id", auth, async (req,res) => {
  const { title, story, video } =req.body
  // Build post object
  const postFields = {}
  if(title) postFields.title = title
  if(story) postFields.story = story
  if(video) postFields.video = video
  try {
    let post = await Posts.findById(req.params.id)
    if(!post) return res.status(404).json({ msg: "Post not found"})
    // Make sure post belongs to user
    if(post.user.toString() !== req.user.id){
      return res.status(401).json({ msg: "Not authorized" })
    }
    post = await Posts.findByIdAndUpdate(req.params.id,
      { $set: postFields },
      { new: true }
      )
      res.json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
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