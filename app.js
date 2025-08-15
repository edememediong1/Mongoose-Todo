const express = require('express')
const cors = require('cors');
const connectDB = require('./config/db.js');
const todoRoutes = require('./routes/todoRoutes.js')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();


app.use(express.json()) //Middleware to parse JSON
app.use(cors()) //allow cross-origin requests


//Routes
app.use('/api/todos', todoRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
