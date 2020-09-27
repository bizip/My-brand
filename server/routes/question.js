import express from 'express';
import questionController from '../conrollers/question';
import requireAuth from '../middleware/is_auth';

const router = express.Router();
//get all the question
router.get('/questions', questionController.getQuestion);
//send a question
router.post('/questions', questionController.sendQuestion);
//delete a question
router.delete('/questions/:id', requireAuth, questionController.deleteQuestion);

module.exports = router;