const express = require('express');
const router = express.Router();

const signController = require('../controllers/signUpController');

// change to post later
router.get('/',signController.signUp);
module.exports = router;