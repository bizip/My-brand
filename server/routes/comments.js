import express from 'express';
import commentController from '../conrollers/comments';
const router = express.Router();
import requireAuth from '../middleware/is_auth';

router.get('/comment', commentController.getComment);
router.post('/comment', requireAuth, commentController.postComment);
router.delete('/comment/:id', requireAuth, commentController.deleteComment);

module.exports = router;