const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  quote: String,
  author: String,
  image: String
},
{
  collection: "favorites"
});

module.exports = mongoose.model('Favorite', favoriteSchema, "favorites");

