const express = require('express');
const app = express();
const port = 5000;
const db = require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
// extract styles and scripts from subpages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

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