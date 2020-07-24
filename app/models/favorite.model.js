const mongoose = require('mongoose');

const Favorite = mongoose.model(
  "Favorite",
  new mongoose.Schema({
    quote: String,
    author: String,
    image: String,
    hd_image: String,
    comment: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  })

);



module.exports = Favorite;

