const mongoose = require('mongoose');


const likeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //This defines the objectid of the liked obj 
    likeable:{
        type:mongoose.Schema.ObjectId,
        required:true,
        refPath:'onModel'
    },
    // This field is used for defining the type of the liked obj since this is a dynamic referenece
    onModel:{
        type:String,
        required:true,
        // Enum ensures that only post and comment can be selected
        enum:['Post','Comment'] 
    }
},{
    timestamps:true
})

const Like = mongoose.model('Like',likeSchema)
module.exports = Like