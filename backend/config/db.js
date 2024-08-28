const mongoose = require('mongoose');

async function connectDB() {
    try {
        // Ensure MONGODB_URI is not undefined
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,  // Optional: If using an older version of MongoDB
            useUnifiedTopology: true,  // Optional: Ensures new Server Discover and Monitoring engine is used
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);  // Exit the process if connection fails
    }
}

module.exports = connectDB;
