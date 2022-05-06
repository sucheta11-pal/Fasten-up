const express = require("express");
const router = express.Router();

console.log("Routes loaded")
const homeController = require('../controllers/home_controller');

router.use('/api',require('./api'))


router.get('/',homeController.home);
router.use('/users',require('./user'));
router.use('/post',require('./post'));
router.use('/comments',require('./comment'));
router.use('/likes',require('./likes'));

module.exports = router;