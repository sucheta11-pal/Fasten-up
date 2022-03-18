const express = require("express");
const router = express.Router();

console.log("Routes loaded")
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/user',require('./user'))
module.exports = router;