const express = require('express');
const router = express.Router();

const toggleController = require('../controllers/toggle_controller');
console.log('in toggle')
router.post('/',toggleController.toggle);
module.exports = router;