const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const profilCtrl = require('../controllers/profil');

router.get('/profil', auth, profilCtrl.profilTest);

module.exports = router;
