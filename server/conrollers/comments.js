import Comment from '../models/coments';
import Post from '../models/posts';

// create comment
exports.getComment = (req, res) => {
    Comment.find().then(result => {
        res.json({
            message: "List of all coments",
            data: result
        });
    });
}

//post comment 
exports.postComment = (req, res) => {
        const text = req.body.text;
        const author = req.body.author;

        Post.findById(req.params.id, (err, FoundPost) => {
            if (err) {
                res.status(400).json({ Error: err.message });
            } else {
                const comment = new Comment({
                    text: text,
                    author: author
                });
                comment.save().then(result => {
                    res.json({
                        message: "Comment created successul",
                        data: comment
                    });
                }).catch(err => {
                    res.status(400).json({ Error: err.message });
                });
            }
        })

    }
    // delete comment
exports.deleteComment = (req, res, next) => {
    const commentId = req.params.id;
    Comment.findById(commentId).then(result => {
        if (!result) {
            return res.status(400).json({
                message: "We can not find this comment you are trying to delete"
            });
        }
        return Comment.findOneAndDelete(commentId).then(deletedone => {
            res.json({
                message: "This comment is successful deleted"
            });
        }).catch(err => {
            res.json({
                message: "Con not be deleted try again"
            });
        });

    }).catch(err => {
        res.status(400).json({
            message: "We can not find this comment you are trying to delete"
        });
    });



}