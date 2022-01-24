const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);
router.delete('/logout', auth, userCtrl.logout);
router.put('/:id', auth, userCtrl.changePassword);
router.delete('/:id', auth, userCtrl.destroyUser);

module.exports = router;
