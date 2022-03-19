const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

console.log('in user.js')
router.get('/',userController.user)
// change to post later
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
module.exports = router;