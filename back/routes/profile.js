const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const profilCtrl = require('../controllers/profile');

router.get('/profile', auth, profilCtrl.profilTest);

module.exports = router;
