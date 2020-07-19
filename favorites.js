const express = require('express');
const router = express.Router();
const Favorite = require('./favorite');

router.get('/', async (req, res) => {
  console.log("hello")
  try {
    const favorite = await Favorite.find();
    res.json(favorite);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  console.log("posting")
  const favorite = new Favorite({
    "quote": req.body.quote,
    "author": req.body.author,
    "image": req.body.image
  });

  try {
    const newFavorite = await favorite.save();
    res.status(201).json(newFavorite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/', async (req, res) => {
  console.log("Trying to delete...")
  const idToDelete = req.body.id
  try {
    const successfulDeletion = await favorite.findByIdAndDelete(idToDelete)
    res.status(201).json(successfulDeletion);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router;