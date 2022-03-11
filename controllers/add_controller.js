const Tasks = require('../models/todo');

module.exports.addition = (req,res)=>{
    Tasks.create({
        desc:req.body.desc,
        cat:req.body.cat,
        due: req.body.due
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