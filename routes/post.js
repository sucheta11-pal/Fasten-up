const express = require('express');
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/post_controller');

// user posts
router.post('/create-post',passport.checkAuthentication,postController.post);
// delete post
router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);
module.exports = router;