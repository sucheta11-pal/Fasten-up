
const Post = require('../models/post')
const User = require('../models/user')


module.exports.home = async function(req,res) {
    // console.log(req.cookies);
    // changing cookie value as response sent from browser
    // res.cookie('user_id',15)
    // let store = local.user._id;

    // Async await
    try
    {
        let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            },
            populate:{
                path:'likes'
            }
        })
        .populate('likes')

        let users = await User.find({})

            return res.render('home',{
                title:'Home',
                posts:posts,
                all_users:users,
                layout:'layout.ejs'
            })
    }catch(err)
    {
        console.log('Error',err);
        return;
    }
    // Populate the user of each post
    // Post.find({})
    // .populate('user')
    // .populate({
    //     // as written in model/post
    //     path:'comments',
    //     // going to every member of comments array and getting their user
    //     populate:{
    //         path:'user'
    //     }
    // })
    // .exec(
    //     (err,posts)=>{
    //             if(err)
    //             {
    //                 console.log("Error in finding posts");
    //                 return;
    //             }
    //             // console.log(posts);
    //             User.find({},(err,users)=>{
    //                 if(err)
    //                 {
    //                     console.local('Error in finding user');
    //                     return;
    //                 }

    //                 return res.render('home',{
    //                     title:'Home',
    //                     posts:posts,
    //                     all_users:users,
    //                     layout:true
    //                 })
    //             })
    //         }
    // )

    // 
    // Post.find({},(err,posts)=>{
    //     if(err)
    //     {
    //         console.log("Error in finding posts");
    //         return;
    //     }
    //     console.log(posts);
    //     return res.render('home',{
    //         title:'Home',
    //         posts:posts,
    //         layout:true
    //     })
    // })

    
}