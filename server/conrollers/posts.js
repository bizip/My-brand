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