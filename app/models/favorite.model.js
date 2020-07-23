const mongoose = require('mongoose');

const Favorite = mongoose.model(
  "Favorite",
  new mongoose.Schema({
    quote: String,
    author: String,
    image: String
  })

);



module.exports = Favorite;

