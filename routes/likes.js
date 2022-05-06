const express = require('express');
const router = express.Router();
const LikesController = require('../controllers/likes_controleer')

router.post('/toggle',LikesController.toggleLike)

module.exports = router;