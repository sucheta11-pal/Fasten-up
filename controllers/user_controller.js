const User = require('../models/user')

module.exports.user = (req,res)=>{
    console.log('in usercontroller')
    return res.render('user',{
        title:'user'
    })
}
// render sign-up page
module.exports.signUp = (req,res)=>{
    
    res.render('sign-up',{
        title:'Sign-Up',
        layout: 'auth_layout.ejs' 
        
    })
}
// render sign in page
module.exports.signIn = (req,res)=>{
    
    res.render('sign-in',{
        title:'Sign-In',
        layout: 'auth_layout.ejs' 
        
    })
}
// get the sign up data
module.exports.create = (req,res)=>{
    if(req.body.password != req.body.c_password)
    {
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},(err,user)=>{
        if(err)
        {
            console.log('Error in finding user in signing up');
            return;
        }
        // if user not found then create
        if(!user)
        {
            User.create(req.body,(err,user)=>{
                if(err)
                {
                    console.log('Error in creating user while signing up');
                    return;
                }

                return res.redirect('/user/sign-in');
            })
        }

        // else redirect to sign up page
        else{
            return res.redirect('back');
        }

    })
}

// sign in and create session for the user
module.exports.createSession = (req,res)=>{
    // todo
}