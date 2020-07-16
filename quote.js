const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  quote: String,
  author: String
},
{
  collection: "quotes"
});

module.exports = mongoose.model('Quote', quoteSchema, "quotes");

