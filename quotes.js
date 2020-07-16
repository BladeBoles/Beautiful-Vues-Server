const express = require('express');
const router = express.Router();
const Quote = require('./quote');

router.get('/', async (req, res) => {
  console.log("hello")
  try {
    const quotes = await Quote.find();
    res.json(quotes[Math.floor(Math.random() * quotes.length)]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const quote = new Quote({
    "quote": req.body.quote,
    "author": req.body.author
  });

  try {
    const newQuote = await quote.save();
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;