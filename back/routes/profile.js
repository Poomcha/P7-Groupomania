const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const profileCtrl = require('../controllers/profile');

router.get('/users', auth, profileCtrl.getAllProfile);
router.get('/users/:userId', auth, profileCtrl.getProfileById);

module.exports = router;
