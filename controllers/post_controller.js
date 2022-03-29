const Post = require('../models/post');
const Comment = require('../models/comment');
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


// Deleting posts
module.exports.destroy = (req,res)=>{
    Post.findById(req.params.id,(err,post)=>{
        if(err)
        {
            console.log('Error in finding posts');
            return;
        }
        // Ideally req.user._id
        // But .id converts the obj id into string automatically
        // If post user and current logged in user is same then only delete
        if(post.user == req.user.id)
        {
            post.remove();
        

            Comment.deleteMany({post:req.params.id},(err)=>{
                if(err)
                {
                    console.log('Error in deleting comments');
                    return;
                }
                return res.redirect('back');
            })
        }

        else
        {
            return res.redirect('back');
        }
    })
}