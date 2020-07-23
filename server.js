require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
const router = require('./routes/quotes.routes');
const favoritesRouter = require('./routes/favorites.routes')


db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to dertrberse!!'))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/quotes', router)
app.use('/favorites', favoritesRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server online!"));
