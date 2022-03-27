const Comment = require('../models/comment')
const Post = require('../models/post')
module.exports.comment = (req,res)=>{

    Post.findById(req.body.post,(err,post)=>{
        // if post existed
        if(post)
        {
            console.log(post);
            Comment.create({
                content:req.body.content,
                user:req.user._id,
                post:req.body.post
            },(err,comment)=>{
                // Handle error
                console.log(comment);
                if(err)
                {
                    console.log('Error in creating comment');
                    return;
                }

                // push in post's array
                // We are updating the post collection
                // So after every updation save() is must
                post.comments.push(comment);
                post.save();

                return res.redirect('back');
                
            })
        }

        else{
            return res.redirect('back');
        }
    })


    
}