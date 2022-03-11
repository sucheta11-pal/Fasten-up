const express = require('express');
const router = express.Router();

const addController = require('../controllers/add_controller');
router.post('/',addController.addition);
module.exports = router;