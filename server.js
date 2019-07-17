const express = require("express")

const app = express()
const router = require("express").Router();
// Connect to our database

// Init middleware
app.use(express.json({ extended: false }))

// Routes

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.use(router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`API server started on port ${PORT}`))
