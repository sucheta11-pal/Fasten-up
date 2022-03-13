const Tasks = require('../models/todo');

module.exports.deleted = (req,res)=>{
    console.log(req.body);
    console.log('Delete')
    Tasks.deleteMany({selection:'true'},(err)=>{
        if(err)
        {
            console.log('Error in fetching tasks');
            return;
        }

        return res.redirect('back');
    })
    
   
}