const db = require('../models/index');

// Get all profile:
exports.getAllProfile = (req, res, next) => {
  db.Profile.findAll()
    .then((profiles) => {
      res.status(200).json({ profiles });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Get a profile by userId:
exports.getProfileById = (req, res, next) => {
  db.Profile.findOne({ where: { userId: req.params.userId } })
    .then((profile) => {
      res.status(200).json({ profile });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Update a profile:
exports.updateProfile = (req, res, next) => {
  if (req.session.user === req.params.userId) {
    db.Profile.findOne({ where: { userId: req.params.userId } })
      .then(() => {
        const profileObj = req.file
          ? {
              // Modifiable en fonction du JS frontend
              ...req.body,
              profilPictureURL: `/back/images/${req.file.filename}`,
            }
          : req.body;
        db.Profile.update(
          { ...profileObj },
          { where: { userId: req.params.userId } }
        )
          .then(() => {
            res.status(201).json({ message: 'Profile modified.' });
          })
          .catch((error) => {
            res.status(400).json({ error });
          });
      })
      .catch((error) => {
        res.status(404).json({ error });
      });
  } else {
    res.status(401).json({ message: 'Unauthorized.' });
  }
};

// Delete a user and his profile:
