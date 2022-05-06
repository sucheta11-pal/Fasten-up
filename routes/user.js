const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller');

console.log('in user.js')
router.get('/',userController.user)
router.get('/profile/:id',passport.checkAuthentication,userController.profile);
// router.get('/profile',passport.checkAuthentication,userController.my_profile);
router.post('/update/:id',passport.checkAuthentication,userController.update);
// 
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);

router.post('/create',userController.create)
// use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate('local',{
    failureRedirect:'/users/sign-in'
},
),userController.createSession)

// sign out
router.get('/sign-out',userController.destroySession);

router.get('/hola',(req,res)=>{
    return res.render('hola')
})

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/sign-in'}),userController.createSession);

module.exports = router;