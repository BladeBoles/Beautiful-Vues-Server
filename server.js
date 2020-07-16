require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
const router = require('./quotes');
const favoritesRouter = require('./favorites')


db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to dertrberse!!'))

server.use(express.json());
server.use(cors());

server.use('/quotes', router)
server.use('/favorites', favoritesRouter)

const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Server online!"));
