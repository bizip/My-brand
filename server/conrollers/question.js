import Questions from '../models/questions';
exports.sendQuestion = (req, res, next) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const question = new Questions({
        fullName: fullName,
        email: email,
        subject: subject,
        message: message
    });
    question.save().then(result => {
        res.json({
            message: "Your message is successful sent",
            data: question
        });
    }).catch(err => {
        console.log(err);
    });
}