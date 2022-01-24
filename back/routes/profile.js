const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

const profileCtrl = require('../controllers/profile');

router.get('/', profileCtrl.getAllProfile);
router.get('/:userId', profileCtrl.getProfileById);
router.put('/:userId/profile', multer, profileCtrl.updateProfile);

module.exports = router;
