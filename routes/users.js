const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")

const User = require("../models/User")

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post("/", [
  check("username", "Please enter a username")
    .not()
    .isEmpty(),
  check("password", "Please enter a password with 6 or more characters")
    .isLength({ min: 6 }),
  check("firstname", "Please enter your first name")
    .not()
    .isEmpty(),
  check("lastname", "Please enter your last name")
    .not()
    .isEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check("address1", "Please enter your street address")
    .not()
    .isEmpty(),
  check("zip", "Please enter your zipcode")
    .not()
    .isEmpty(),
],
async (req,res) => {
  console.log("pinkus")
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  const { username, password, firstname, lastname, email, address1, address2, city, state, zip, picture } = req.body

  try{
    let user = await User.findOne({ email })
    if(user){
      return res.status(400).json({ msg: "User already exists"})
    }
    user = new User({
      username,
      password,
      firstname,
      lastname,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      picture
    })
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()
    const payload = {
      user: {
        id: user.id
      }
    }
    jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 360000
    }, (err, token) => {
      if(err) throw err
      res.json({ token })
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

module.exports = router