const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

console.log('in user.js')
router.get('/',userController.user)
module.exports = router;