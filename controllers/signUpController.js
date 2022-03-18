const userDetails = require('../config/mongoose');
var data = {
    layout: false, 
    title:'Sign-Up'
};
module.exports.signUp = (req,res)=>{
    // console.log(req.body);
    res.render('sign-up',data)

    // return res.redirect('back')
}