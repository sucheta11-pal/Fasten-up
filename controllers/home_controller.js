
const Post = require('../models/post')
module.exports.home = function(req,res) {
    console.log(req.cookies);
    // changing cookie value as response sent from browser
    // res.cookie('user_id',15)
    // let store = local.user._id;


    // Populate the user of each post
    Post.find({}).populate('user').exec(
        (err,posts)=>{
                if(err)
                {
                    console.log("Error in finding posts");
                    return;
                }
                console.log(posts);
                return res.render('home',{
                    title:'Home',
                    posts:posts,
                    layout:true
                })
            }
    )

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