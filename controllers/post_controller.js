const Post = require('../models/post')

// Creating posts
module.exports.post = (req,res)=>{
    Post.create({
        content:req.body.content,
        user:req.user._id
    },(err,post)=>{
        if(err)
        {
            "Error in create post";
            return;
        }

        return res.redirect('back');
    })
}