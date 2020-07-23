require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors');
const dbConfig = require('./app/config/db.config')

const db = require('./app/models')
const Role = db.role

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => {
    console.log("Connected to derterberse!")
    initial();
  })
  .catch(err => {
    console.log("Connection errror: ", err)
    process.exit();
  })

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("Error: ", err);
        }
        console.log("Added 'user' to roles collection.")
      })

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("Error: ", err)
        }
        console.log("Added 'moderator' to roles collection.")
      })

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("Error: ", err)
        }
        console.log("Added 'admin' to roles collection.")
      })
    }
  })
}


const router = require('./app/routes/quotes.routes');
const favoritesRouter = require('./app/routes/favorites.routes')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/quotes', router)
app.use('/favorites', favoritesRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server online!"));
