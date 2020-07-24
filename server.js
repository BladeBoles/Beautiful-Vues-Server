require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors');
// const dbConfig = require('./app/config/db.config')

const db = require('./app/models')
const Role = db.role



db.mongoose
  .connect(process.env.DATABASE_URL,
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


const quotesRouter = require('./app/routes/quotes.routes');
const favoritesRouter = require('./app/routes/favorites.routes')
// const authRouter = require('./app/routes/auth.routes')
// const userRouter = require('./app/routes/user.routes')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

// app.use('/api/auth', authRouter)
// app.use('/api/user', userRouter)
app.use('/quotes', quotesRouter)
app.use('/favorites', favoritesRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server online at port ", port));
