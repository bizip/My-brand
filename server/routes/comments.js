import express from 'express';
import commentController from '../conrollers/comments';
const router = express.Router();
import requireAuth from '../middleware/is_auth';

router.get('/comments', commentController.getComment);
router.post('/comments', requireAuth, commentController.postComment);
router.delete('/comments/:id', requireAuth, commentController.deleteComment);

module.exports = router;