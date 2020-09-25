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
        console.log(err);
    });
};
//get single post
exports.getOnePosts = (req, res, next) => {
    const postId = req.params.id;
    Posts.findById(postId).then(result => {
        res.json({
            message: "Single post is found pascal",
            data: result
        });
    });

};