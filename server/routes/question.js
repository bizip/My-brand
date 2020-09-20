import express from 'express';
import questionController from '../conrollers/question';
const router = express.Router();
router.post('/question', questionController.sendQuestion);

module.exports = router;