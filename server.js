// Importing things we need
const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Creating const that collects any API request to that file
const items = require('./routes/api/items');

// Initializing express
const app = express();

// Connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Use routes that will be stored at './routes/api/items'
app.use('/api/items', items);

// Adding port and simple message after connecting to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
