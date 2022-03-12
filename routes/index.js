const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log(`Router loaded`);

router.get('/',homeController.home);
// router.use('/user',require('./user'));
// router.use('/posts',require('./post'))
router.use('/add',require('./add'))
router.use('/toggle',require('./toggle'))
module.exports = router;