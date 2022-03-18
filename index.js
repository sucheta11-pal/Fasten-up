const express = require('express');
const app = express();
const port = 5000;

// Setting up view engine
app.set('view engine','ejs');
app.set('view','./views');

// use assets
app.use(express.static('assets'))

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