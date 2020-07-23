const db = require('../models')
const ROLES = db.ROLES
const User = db.user

checkDuplicateUserOrEmail = (req, res, next) => {
  // Username check using mongoose built in functions
  User.findOne({ username: req.body.username })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err })
        return;
      }
      if (user) {
        res.status(400).send({ message: "This username is already in use!" })
        return;
      }
    })

  // Email check using mongoose functions
  User.findOne({ email: req.body.email })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err })
        return;
      }
      if (user) {
        res.status(400).send({ message: "This email is already in use!" })
        return;
      }

      next();
    })
}