
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");


// var router = express.Router();

const express = require("express")
const connectDB = require("./config/db")
const app = express()


// Require all models
var db = require("./client/src/components/Scraper");


app.use("/api/scraper", require("./routes/scraper"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI);


// Connect to our database
connectDB()

// Init middleware
app.use(express.json({ extended: false }))
app.get("/", (req,res) =>
  res.json({ msg: "Welcome to the Promote-the-Vote API" })
)
// Routes
app.use("/api/users", require("./routes/users"))
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "/client/public/index.html"));
// });

// app.use(router)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`API server started on port ${PORT}`))
