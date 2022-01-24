const db = require('../models/index');

// Get all profile:
exports.getAllProfile = (req, res, next) => {
  db.Profil.findAll()
    .then((profiles) => {
      res.status(200).json({ profiles });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Get a profile by userId:
exports.getProfileById = (req, res, next) => {
  db.Profil.findOne({ where: { userId: req.params.userId } })
    .then((profile) => {
      res.status(200).json({ profile });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Update a profile:
// Delete a user and his profile:
