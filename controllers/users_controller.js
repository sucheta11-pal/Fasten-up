module.exports.profile = (req,res)=>{
    // return res.end('<h1>User profile</h1>')
    return res.render('user',{
        title:"User"
    })
}