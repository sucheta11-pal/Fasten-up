const mongoose = require('mongoose');
const taskList = new mongoose.Schema({
    desc:{
        type: String,
        required:true
    },

    catagory:{
        type:String,
        default:"0"
    },

    date:{
        type:String,
        required:true
    },
    selection:{
        type:Boolean,
        required:true,
        default:false
    }

});

const Tasks = mongoose.model('Tasks',taskList);
module.exports = Tasks;