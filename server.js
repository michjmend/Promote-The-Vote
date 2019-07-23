const express = require("express")
const path = require('path'); // NEW
const connectDB = require("./config/db")
const app = express()
const cloudinary = require("./config/cloudinaryConnect")
const DIST_DIR = path.join(__dirname, './client/build/'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

// Connect to our database and image api
const performConnections = async () => { 
  try {
    await connectDB()
  } catch (error) {
    serverError(error, "Closing MongoDB server")
  }
  try {
    await cloudinary.connect()
  } catch (error) {
    serverError(error, "Closing Cloudinary connection")
  }

}
performConnections()

// Init middleware
app.use(express.json({ extended: false }))

// app.get("/test", (req,res) =>
//   res.json({ test: "Welcome to the Promote-the-Vote API" })
// )

// Routes
app.get("/", (req,res) =>
  res.json({ msg: "Welcome to the Promote the Vote API" })
)
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
// app.use("api/posts", require("./routes/posts"))
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, “/client/public/index.html”));
// });

// app.use(router)
if(process.env.NODE_ENV === "production") {
app.use(express.static(DIST_DIR)); // NEW
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
 });
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`API server started on port ${PORT}`))
