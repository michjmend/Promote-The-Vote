const express = require("express")
const path = require('path'); // NEW
// const connectDB = require("./config/db")
const mongoose = require("mongoose")
const app = express()
const DIST_DIR = path.join(__dirname, './client/build/'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

const configDB = "mongodb://localhost/PromoteTheVote"
// Connect to our database
// connectDB()
mongoose.connect(process.env.MONGODB_URI || configDB, {useNewUrlParser: true})
// Init middleware
app.use(express.json({ extended: false }))
app.use(express.static(DIST_DIR)); // NEW
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
 });
// Routes
app.get("/test", (req,res) =>
  res.json({ test: "Welcome to the Promote-the-Vote API" })
)

app.use("/api/users", require("./routes/users"))
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, “/client/public/index.html”));
// });

// app.use(router)




const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`API server started on port ${PORT}`))
