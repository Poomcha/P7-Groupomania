const db = require('../models');

// Get all posts:
exports.getAllPosts = (req, res, next) => {
  // Limitation de date ? (where: {updatedAt < 1j} ?)
  // Ou findAndCountAll avec limite de posts visibles par pages ?
  db.Post.findAll()
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Get one post by postId:
exports.getOnePostById = (req, res, next) => {
  db.Post.findByPk(req.params.id)
    .then((post) => {
      res.status(200).json({ post });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Get all posts by type:
exports.getAllPostByType = (req, res, next) => {
  db.Post.findAll({ where: { type: req.params.type } })
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Get all posts by date:

// Get all posts by profileId:
// Get posts by title, or part of title:
// Get all important posts:
// Create a post:
// Modify a post:
// Delete a post:
