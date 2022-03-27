const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    content:{
        type:String,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    // We will frequently fetch all the comments associated with a post
    // so we will include the array of ids of all comments in the post schema itself

    comments:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]

},{
    timestamps:true
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;