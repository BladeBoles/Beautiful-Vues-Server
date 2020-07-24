const db = require('../models')
const ROLES = db.ROLES
const User = db.user

// Why are the findOnes nested?  Seems like they should be separate...
checkDuplicateUsernameOrEmail = (req, res, next) => {
  console.log("The request body is: ", req.body)
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      console.log("Error: ", err)
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        console.log("Error: ", err)
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
}

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp