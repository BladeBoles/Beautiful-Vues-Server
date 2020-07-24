const mongoose = require('mongoose');

const Quote = mongoose.model(
  "Quote",
  new mongoose.Schema({
    quote: String,
    author: String
  })
)

module.exports = Quote

