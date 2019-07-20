const express = require("express")
// const connectDB = require("./config/db")
const mongoose = require("mongoose")
const app = express()

const configDB = "mongodb://localhost/PromoteTheVote"
// Connect to our database
// connectDB()
mongoose.connect(process.env.MONGODB_URI || configDB, {useNewUrlParser: true})
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
