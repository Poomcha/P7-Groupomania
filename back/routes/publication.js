const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const pubCtrl = require('../controllers/publication');

router.get('/home', auth, pubCtrl.publicationTest);

module.exports = router;
