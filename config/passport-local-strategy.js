const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
// authentication
passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
    // find a user and establish the identity
    User.findOne({email:email},(err,user)=>{
        if(err)
        {
            console.error.bind(console,'Error in finding user--->passport');
            return done(err);
        }

        if(!user || user.password != password)
        {
            console.log('Invalid username/Password');
            return done(null,false);
        }

        return done(null,user);
    })
}));

//  Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser((user,done)=>{
    done(null,user.id);
})
// Deserializing the user from the key in the cookies
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err)
        {
            console.error.bind(console,'Error in finding user--->passport');
            return done(err);
        }

        return done(null,user);
    })
})

module.exports = passport;