const nodeMailer = require('../config/nodemailer');

// This is another way of exporting a method
exports.newComment = (comment)=>{
    let htmlString = nodeMailer.renderTemplate({comment:comment},'/comments/new_Comment.ejs')

    nodeMailer.transporter.sendMail({
        from:`Fasten-up <suchetacreation22@gmail.com>`,
        to:comment.user.email,
        subject:"New comment",
        html:htmlString
    },(err,info)=>{
        if(err)
        {
            console.log("Error in sending email",err);
            return;
        }

        console.log("Email sent",info);
        return;
    })
}