const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken');

const db = require('../models/index');

// Create new user and his empty profile:
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = db.User.create({
        email: req.body.email,
        password: hash,
      });
      return user;
    })
    .then((user) => {
      req.session.user = user.id;
      db.User.findOne({ where: { email: req.body.email } }).then((user) => {
        db.Profil.create({ userId: user.id });
      });
    })
    .then(() =>
      res.status(201).json({ message: 'User and his profil created.' })
    )
    .catch((error) => res.status(400).json({ error }));
};

// Connect user:
exports.signin = (req, res, next) => {
  db.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error });
          }
          req.session.user = user.id;
          console.log(req.session);
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, 'TOKEN_SECRET_PHRASE', {
              expiresIn: '24h',
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

// Logout :
exports.logout = (req, res, next) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        res.status(400).json({ message: 'Unable to logout.' });
      } else {
        res.status(200).json({ message: 'Logout successful.' });
      }
    });
  } else {
    res.end();
  }
};

// Changement de mot de passe:
exports.changePassword = (req, res, next) => {};
