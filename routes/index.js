const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop_controller')

console.log(`Router loaded`);

router.get('/',shopController.shop);
router.use('/app',require('./home'));
router.use('/add',require('./add'))
router.use('/toggle',require('./toggle'))
router.use('/delete-task',require('./delete'))
module.exports = router;