// Importing things we need
const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initializing express
const app = express();

// Connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Adding port and simple message after connecting to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
