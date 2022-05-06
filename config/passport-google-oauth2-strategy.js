const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const user = require('../models/user');
const { ClientRequest } = require('http');
const User = require('../models/user');

// tell passport to use a new strategy for Google login
passport.use(new googleStrategy({
    clientID:'1030600428576-rc70r1bgd0mphr1n19cqhph397cefjr0.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:5000/users/auth/google/callback'
},
    function(accessToken,refreshToken,profile,done)
    {
        // Find the user
        User.findOne({email:profile.emails[0].value}).exec((err,user)=>{
            if(err)
            {
                console.log('Error in google oauth');
                return;
            }

            console.log(profile);
            // if found in our DB, set the user as req.user
            if(user)
            {
                return done(null,user)
            }else{
                // if not found in our DB, then create an account and set req.user
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                },(err,user)=>{
                    if(err)
                    {
                        console.log('Error in creating google user');
                        return;
                    } 
                    return done(null,user)
                })
            }
        })
    }
))
module.exports = passport;