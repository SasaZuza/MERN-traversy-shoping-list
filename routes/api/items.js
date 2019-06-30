const express = require('express');
const router = express.Router();

// Requiring Item model
const Item = require('../../models/Item');

// Route to get all items - GET request
// We use '/' because we are in this main file for router and don't need to add '/api/items'
router.get('/', (req, res) => {
  // Connecting to idem module, sorting data by date and getting data as json
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Route to create a post - POST request
// We use '/' because we are in this main file for router and don't need to add '/api/items'
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// Exporting this file so other files can use it
module.exports = router;
