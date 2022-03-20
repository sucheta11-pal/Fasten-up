module.exports.home = function(req,res) {
    console.log(req.cookies);
    // changing cookie value as response sent from browser
    res.cookie('user_id',15)
    return res.render('home',{
        title:'Home',
        layout:false
    })
}