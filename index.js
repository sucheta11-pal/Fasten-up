const express = require('express');
const app = express();
const port = 5000;
const db = require('./config/mongoose')
// used for session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy')

const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const { cookie } = require('express/lib/response');

// adding middlewares

app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);
// extract styles and scripts from subpages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

// using session
app.use(session({
    name:'Fasten-up',
    // todo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        // in millisec
        maxAge:(1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use assets
app.use(express.static('./assets'))

// use express router
app.use('/',require('./routes/index'));


app.listen(port,(err)=>{
    if(err)
    {
        console.log('Not connected to the server');
        return ;
    }

    console.log("Connected to the server at port ",port);
    return;
})