const mongoose = require('mongoose');
// We will be creating schema so we create variable for it
const Schema = mongoose.Schema;

// Creating schema
const ItemSchema = new Schema({
  // Adding items for schema that are name and date
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Exporting this and also model for mongoose with this schema
module.exports = Item = mongoose.model('item', ItemSchema);
