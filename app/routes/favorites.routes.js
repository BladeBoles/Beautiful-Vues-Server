const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorite.model');
const { mongoose } = require('../models');

router.get('/myfavorites/:id', async (req, res) => {

  let owner = req.params.id
  console.log("hello favorites ", owner)
  try {
    const favorite = await Favorite.find({ owner });
    res.json(favorite);
  } catch (err) {
    console.log("Error: ", err)
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  console.log("posting...", req.body)
  const favorite = new Favorite({
    "quote": req.body.quote,
    "author": req.body.author,
    "image": req.body.image,
    "owner": req.body.owner
  });

  try {
    const newFavorite = await favorite.save();
    res.status(201).json(newFavorite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  console.log("Trying to delete...")
  const idToDelete = req.params.id
  console.log(idToDelete)
  try {
    const successfulDeletion = await Favorite.findByIdAndDelete(idToDelete)
    res.status(200).json(successfulDeletion);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router;