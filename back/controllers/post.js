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
exports.getAllPostFromUser = (req, res, next) => {
  db.Post.findAll({ where: { profileId: req.param.profileId } })
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Get posts by title, or part of title:

// Get all important posts:

// Create a post:
exports.createPost = (req, res, next) => {
  db.Profile.findOne({
    where: { userId: req.session.user },
  })
    .then((profile) => {
      const postObj = req.file
        ? {
            ...req.body,
            postPictureURL: `/back/images/${req.file.filename}`,
            profileId: profile.id,
          }
        : { ...req.body, profileId: profile.id };
      db.Post.create({ ...postObj })
        .then(() => {
          res.status(201).json({ message: 'Post successfully created. ' });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Modify a post:
exports.modifyPost = (req, res, next) => {
  
};

// Delete a post:
