const Post = require('../models/post');
const Comment = require('../models/comment');
// Creating posts
module.exports.post = async (req,res)=>{
    try
    {
        let post = await Post.create({
            content:req.body.content,
            user:req.user._id
        })
        // xml/http req
        console.log(post)
        post = await post.populate('user');
        if(req.xhr)
        {
            return res.status(200).json({
                data:{
                    post:post
                },
                message:'Post created'
            })
        }
        
        req.flash('success','Post published');
        return res.redirect('back');

    }catch(err)
    {
        // console.log('Error in creating post',err);
        req.flash('error',err);

        return;
    }
}
// module.exports.post = (req,res)=>{
//     Post.create({
//         content:req.body.content,
//         user:req.user._id
//     },(err,post)=>{
//         if(err)
//         {
//             "Error in create post";
//             return;
//         }

//         return res.redirect('back');
//     })
// }


// Deleting posts
module.exports.destroy = async (req,res)=>{
    try
    {

        let post = await Post.findById(req.params.id);
        if(post.user == req.user.id)
        {
            post.remove();
        
            await Comment.deleteMany({post:req.params.id});

            if(req.xhr)
            {
                return res.status(200).json({
                    data:{
                        post_id:req.params.id
                    },
                    message:'Post deleted'
                })
            }
            req.flash('success','Post deleted');

            return res.redirect('back');        
        }

        else
        {
            req.flash('error','You cannot delete this post');

            return res.redirect('back');
        }

    }catch(err)
    {
        console.log('Error in deleting comments');
        req.flash('error',err);

        return;
    }
        
        
}
// module.exports.destroy = (req,res)=>{
//     Post.findById(req.params.id,(err,post)=>{
//         if(err)
//         {
//             console.log('Error in finding posts');
//             return;
//         }
//         // Ideally req.user._id
//         // But .id converts the obj id into string automatically
//         // If post user and current logged in user is same then only delete
//         if(post.user == req.user.id)
//         {
//             post.remove();
        

//             Comment.deleteMany({post:req.params.id},(err)=>{
//                 if(err)
//                 {
//                     console.log('Error in deleting comments');
//                     return;
//                 }
//                 return res.redirect('back');
//             })
//         }

//         else
//         {
//             return res.redirect('back');
//         }
//     })
// }