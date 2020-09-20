import express from 'express';
import questionController from '../conrollers/question';
const router = express.Router();
//get all the question
router.get('/question', questionController.getQuestion);
//send a question
router.post('/question', questionController.sendQuestion);
//delete a question
router.delete('/question/:id', questionController.deleteQuestion);

module.exports = router;