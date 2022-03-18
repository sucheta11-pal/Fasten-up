const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fastenUp_development');

const db = mongoose.connection;

db.on('Error',console.error.bind(console,'Error in connecting to mongoDB'));

db.once('open',()=>{
    console.log('Connected to DB:: MongoDB');
})

module.exports = db;