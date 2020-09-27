import Posts from '../models/posts';
const { post } = require('../routes/posts');

exports.getLanding = (req, res, next) => {
    res.json({
        message: "this will be landing page soon"
    });
}

//get all the post
exports.getPosts = (req, res, next) => {
    Posts.find().then(result => {
        res.json({
            message: "list of all posts",
            data: result
        });
    });
}

//create one post
exports.createPosts = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const post = new Posts({
        title: title,
        content: content
    });
    post.save().then(result => {
        res.json({
            message: "successful created one post",
            data: post
        });
    }).catch(err => {
        res.status(400).json({ Error: err.message });
    });
};
//get single post
exports.getOnePosts = (req, res, next) => {
    const postId = req.params.id;
    Posts.findById(postId).populate("comments").exec((err, foundPost) => {
        if (err) {
            res.status(500).json({ message: 'This post can not be found' });
        } else {
            res.json({ foundPost });
        }
    });

};
//update one post
exports.updateOnePosts = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const postId = req.params.id;
    Posts.findById(postId).then(result => {
            if (!result) {
                console.log("error");
            }
            result.title = title;
            result.content = content;
            return result.save().then(updatedPost => {
                res.json({
                    message: "Your post have been Updates",
                    data: updatedPost
                });
            });
        })
        .catch(err => {
            res.status(400).json({ Error: err.message });
        });
};
//delete one post
exports.deleteOnePosts = (req, res, next) => {
    const postId = req.params.id;
    Posts.findById(postId).then(result => {
        if (!result) {
            res.status(400).json({ message: 'This post has been deleted' });
        }
        return Posts.findOneAndDelete(postId).then(deletedone => {
            res.json({
                message: "Post deleted successful",
            });
        }).catch(err => {
            res.status(400).json({ Error: err.message });
        });

    }).catch(err => {
        res.status(400).json({ Error: err.message });
    });

};