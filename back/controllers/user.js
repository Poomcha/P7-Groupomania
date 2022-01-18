const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/index');

// Create new user:
// exports.signup = (req, res, next) => {
//   bcrypt
//     .hash(req.body.password, 10)
//     .then((hash) => {
//       const user = db.User.create({
//         email: req.body.email,
//         password: hash,
//       });
//       return user;
//     })
//     .then(() => res.status(201).json({ message: 'User created.' }))
//     .catch((error) => res.status(400).json({ error }));
// };

exports.signup = (req, res, next) => {
  const userLogs = { email: '', password: '' };
  bcrypt
    .hash(req.body.email, 10)
    .then((hash) => {
      userLogs.email = hash;
    })
    .then(() =>
      bcrypt.hash(req.body.password, 10).then((hash) => {
        userLogs.password = hash;
      })
    )
    .then(() =>
      db.User.create({
        email: userLogs.email,
        password: userLogs.password,
      })
    )
    .then(() => res.status(201).json({ message: 'User created.' }))
    .catch((error) => res.status(400).json({ error }));
};

// Connect user:
// exports.signin = (req, res, next) => {
//   db.User.findOne({ where: { email: req.body.email } })
//     .then((user) => {
//       if (!user) {
//         return res.status(401).json({ error });
//       }
//       bcrypt
//         .compare(req.body.password, user.password)
//         .then((valid) => {
//           if (!valid) {
//             return res.status(401).json({ error });
//           }
//           res.status(200).json({
//             userId: user.id,
//             token: jwt.sign({ userId: user.id }, 'TOKEN_SECRET_PHRASE', {
//               expiresIn: '24h',
//             }),
//           });
//         })
//         .catch((error) => res.status(500).json({ error }));
//     })
//     .catch((error) => res.status(500).json({ error }));
// };

exports.signin = (req, res, next) => {
  const encryptEmails = [];
  db.User.findAll({ atttributes: ['email'] })
    .then((users) => {
      for (user of users) {
        encryptEmails.push(user.dataValues.email);
      }
    })
    .then(() => {
      for (email of encryptEmails) {
        bcrypt
          .compare(req.body.email, email)
          .then((valid) => {
            if (valid) {
              db.User.findOne({ where: { email: email } })
                .then((user) => {
                  if (!user) {
                    return res.status(401).json({ error });
                  }
                  bcrypt
                    .compare(req.body.password, user.password)
                    .then((valid) => {
                      if (!valid) {
                        res.status(200).json({ message: 'Password mismatch' });
                      }
                      res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                          { userId: user.id },
                          'TOKEN_SECRET_PHRASE',
                          {
                            expiresIn: '24h',
                          }
                        ),
                      });
                    })
                    .catch((error) => res.status(400).json({ error }));
                })
                .catch((error) => res.status(400).json({ error }));
            }
          })
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(404).json({ error }));
};
