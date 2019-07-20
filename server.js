
const express = require("express")
const connectDB = require("./config/db")
const app = express()


// Connect to our database


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI  || connectDB();

// "mongodb://promotethevote:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7";

mongoose.connect(MONGODB_URI);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}


// Init middleware
app.use(express.json({ extended: false }))
app.get("/", (req,res) =>
 res.json({ msg: "Welcome to the Promote-the-Vote API" })
)
// Routes
app.use("/api/users", require("./routes/users"))
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, “/client/public/index.html”));
// });

// app.use(router)




const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`API server started on port ${PORT}`))
