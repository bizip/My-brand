import Comment from '../models/coments';
import Post from '../models/posts';

// create comment
exports.getComment = (req, res) => {
    Comment.find().then(result => {
        res.json({
            message: "list of all posts",
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
                console.log(err);
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
                    console.log(err);
                });
            }
        })

    }
    // delete comment
exports.deleteComment = (req, res, next) => {
    const commentId = req.params.id;
    Comment.findById(commentId).then(result => {
        return Comment.findOneAndDelete(commentId).then(deletedone => {
            res.json({
                message: "Already deleted!",
            });
        }).catch(err => {
            res.json({
                message: "Con not be deleted!"
            });
        });

    }).catch(err => {
        res.json({
            message: "We can not find this comment you are trying to delete"
        });
    });



}