const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/index');

// Create new user:
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = db.User.create({
        email: req.body.email,
        password: hash,
      });
      req.session.user = user;
      return user;
    })
    .then(() => res.status(201).json({ message: 'User created.' }))
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
          req.session.user = user;
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
exports.changePassword = (req, res, next) => {
  
};
