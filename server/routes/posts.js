import express from 'express';
import postController from '../conrollers/posts';
const router = express.Router();

// Get landing pages
router.get('/', postController.getLanding);
// Get all posts
router.get('/posts', postController.getPosts);
// create single post
router.post('/posts', postController.createPosts);
module.exports = router;