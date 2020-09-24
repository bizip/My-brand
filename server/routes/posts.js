import express from 'express';
import postController from '../conrollers/posts';
import isAuth from '../middleware/is_auth';
const router = express.Router();
import requireAuth from '../middleware/is_auth';

// Get landing pages
router.get('/', postController.getLanding);
// Get all posts
router.get('/posts', postController.getPosts);
// create single post
router.post('/posts', requireAuth, postController.createPosts);
// Get single post
router.get('/posts/:id', postController.getOnePosts);
// Upadte post
router.patch('/posts/:id', requireAuth, postController.updateOnePosts);
// Delete post
router.delete('/posts/:id', requireAuth, postController.deleteOnePosts);
module.exports = router;