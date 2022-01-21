const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post');

router.get('/home', auth, postCtrl.publicationTest);

module.exports = router;
