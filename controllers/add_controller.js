const Tasks = require('../models/todo');

module.exports.addition = (req,res)=>{
    console.log('hello')
    console.log(req.body);
    
    Tasks.create({
        desc:req.body.desc,
        catagory:req.body.catagory,
        date: req.body.date
    },(err,newTaskList)=>{
        if(err)
        {
            console.log('Error in creating task');
            return;
        }

        console.log(newTaskList);
        return res.redirect('back');
    })
}