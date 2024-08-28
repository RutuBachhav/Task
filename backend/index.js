const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Use CORS middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Use the router for API routes
app.use("/api", router);

// Set PORT from environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
}).catch(err => {
    console.error('Error connecting to DB:', err);
});
