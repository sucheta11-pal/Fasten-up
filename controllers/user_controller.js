module.exports.user = (req,res)=>{
    console.log('in usercontroller')
    return res.render('user',{
        title:'user'
    })
}

module.exports.signUp = (req,res)=>{
    
    res.render('sign-up',{
        title:'Sign-Up',
        layout: 'auth_layout.ejs' 
        
    })
}
module.exports.signIn = (req,res)=>{
    
    res.render('sign-in',{
        title:'Sign-In',
        layout: 'auth_layout.ejs' 
        
    })
}