const Comment = require('../models/comment')
const Post = require('../models/post')
module.exports.comment = async (req,res)=>{

    try
    {
        let post = await Post.findById(req.body.post);
        if(post)
        {
            let comment = await Comment.create({
                content:req.body.content,
                user:req.user._id,
                post:req.body.post
            })

            post.comments.push(comment);
            post.save();

            req.flash('success','Comment published');
            return res.redirect('back');
            
        }

    }catch(err)
    {
        req.flash('error',err);
        console.log('Error in creating comment');
        return;
    }

    // Post.findById(req.body.post,(err,post)=>{
    //     // if post existed
    //     if(post)
    //     {
    //         console.log(post);
    //         Comment.create({
    //             content:req.body.content,
    //             user:req.user._id,
    //             post:req.body.post
    //         },(err,comment)=>{
    //             // Handle error
    //             console.log(comment);
    //             if(err)
    //             {
    //                 console.log('Error in creating comment');
    //                 return;
    //             }

    //             // push in post's array
    //             // We are updating the post collection
    //             // So after every updation save() is must
    //             post.comments.push(comment);
    //             post.save();

    //             return res.redirect('back');
                
    //         })
    //     }

    //     else{
    //         return res.redirect('back');
    //     }
    // })


    
}

module.exports.destroy = async (req,res)=>{

    try{

        let comment = await Comment.findById(req.params.id);

        if(comment && comment.user==req.user.id)
        {
            let postId = comment.post;
            comment.remove();

            await Post.findByIdAndUpdate(postId,{$pull:{comments:postId}});
            req.flash('success','Comment deleted');
            return res.redirect('back');
        }else
        {
            req.flash('error','You are not allowed to delete this comment');
            return res.redirect('back');
        }

    }catch(err)
    {
        console.log('Error in deleting comment');
        req.flash('error',err);
        return;
    }



//     Comment.findById(req.params.id,(err,comment)=>{
//         if(err)
//         {
//             console.log('Error in accessing comment');
//             return;
//         }

//         if(comment && comment.user==req.user.id)
//         {
//             // // Post.findById(req.params.post,(err,post)=>{
//             // Post.findById(comment.post,(err,post)=>{
//             //     if(err)
//             //     {
//             //         console.log('Cannot find the post to be deleted');
//             //         return;
//             //     }

//             //     for(let i = 0;i<post.comments.length;i++)
//             //     {
//             //         if(post.comments[i]==req.params.id)
//             //         {
//             //             post.comments.splice(i,1);
//             //             break;
//             //         }
//             //     }
//             //     post.save();
//             //     comment.remove();

//             //     return res.redirect('back');

//             // })


//              // Another way 
//              let postId = comment.post;
//              comment.remove();
//             // $pull it is clocely related to mongoDB syntax
//             // It throws the comment id from the array
//              Post.findByIdAndUpdate(postId,{$pull:{comments : req.params.id}},(err,post)=>{
//                 if(err)
//                 {
//                     console.log('Cannot find the post to be deleted');
//                     return;
//                 }

//                 return res.redirect('back');
//              })
            
//         }

//         else{
//             return res.redirect('back');
//         }
//     })
}