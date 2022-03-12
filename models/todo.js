const mongoose = require('mongoose');
const taskList = new mongoose.Schema({
    desc:{
        type: String,
        required:true
    },

    catagory:{
        type:String
    },

    date:{
        type:Date,
        required:true
    },
    selection:{
        type:String,
        required:true,
        default:"unchecked"
    }

});

const Tasks = mongoose.model('Tasks',taskList);
module.exports = Tasks;