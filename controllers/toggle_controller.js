const Tasks = require('../models/todo');
console.log('In toggle controller')
module.exports.toggle = (req,res)=>{
    console.log('Hola');
    let id = req.query.id;
    console.log(id)
    let ans = req.query.op;
    if(ans===true)
    {
        ans=false;
    }
    else{
        ans=true;
    }
    Tasks.findByIdAndUpdate(id, {selection: ans},function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated task : ", docs);
    }
});
     return res.redirect('back')
}