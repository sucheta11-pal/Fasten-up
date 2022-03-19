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
    // todo
}

// sign in and create session for the user
module.exports.createSession = (req,res)=>{
    // todo
}