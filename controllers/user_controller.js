module.exports.user = (req,res)=>{
    console.log('in usercontroller')
    return res.render('user',{
        title:'user'
    })
}