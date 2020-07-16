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
  const quote = new Quote({
    "quote": req.body.quote,
    "author": req.body.author,
    "image": req.body.image
  });

  try {
    const newQuote = await quote.save();
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;