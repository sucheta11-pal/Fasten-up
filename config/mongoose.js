// Require the libraries
const mongoose = require('mongoose');
// connect to the DB
mongoose.connect('mongodb://localhost/todo_db');

// Aquire connection
const db = mongoose.connection;

// check error
db.on('error',console.error.bind(console,'Error connecting to the database'));
// working fine
db.once('open',()=>{
    console.log('Successful in connecting to the Database');
})

module.exports = db;