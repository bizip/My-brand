import Questions from '../models/questions';
//get all the post
exports.getQuestion = (req, res, next) => {
        Questions.find().then(result => {
            res.json({
                message: "list of all posts",
                data: result
            });
        });
    }
    //send a question
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

//delete one Question
exports.deleteQuestion = (req, res, next) => {
    const questionId = req.params.id;
    Questions.findById(questionId).then(result => {
        return Questions.findOneAndDelete(questionId).then(deletedone => {
            res.json({
                message: "You deleted this question",
            });
        }).catch(err => {
            console.log(err);
        });

    }).catch(err => {
        console.log(err);
    });

};