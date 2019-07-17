const express = require("express")

const app = express()

// Connect to our database

// Init middleware
app.use(express.json({ extended: false }))

// Routes

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`API server started on port ${PORT}`))