// Importing things we need
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Function to connect MongoDB to our app
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit app if there is failure to connect
    process.exit(1);
  }
};

module.exports = connectDB;
