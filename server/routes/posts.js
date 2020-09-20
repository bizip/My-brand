import express from 'express';
import postController from '../conrollers/posts';
const router = express.Router();

// Get landing pages
router.get('/', postController.getLanding);
// Get all posts
router.get('/posts', postController.getPosts);
// create single post
router.post('/posts', postController.createPosts);
// Get single post
router.get('/posts/:id', postController.getOnePosts);
// Upadte post
router.patch('/posts/:id', postController.updateOnePosts);
module.exports = router;