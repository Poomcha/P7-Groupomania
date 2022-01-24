const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer')

const profileCtrl = require('../controllers/profile');

router.get('/users', auth, profileCtrl.getAllProfile);
router.get('/users/:userId', auth, profileCtrl.getProfileById);
router.put('/users/:userId/profile', auth, multer, profileCtrl.updateProfile);

module.exports = router;
