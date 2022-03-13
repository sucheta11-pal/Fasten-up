const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log(`Router loaded`);

router.get('/',homeController.home);
router.use('/add',require('./add'))
router.use('/toggle',require('./toggle'))
router.use('/delete-task',require('./delete'))
module.exports = router;