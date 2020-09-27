import express from 'express';
import authController from '../conrollers/authController';
import requireAuth from '../middleware/is_auth';
import checkUser from '../middleware/is_auth';
const router = express.Router();

router.get('/signup', authController.getSignUp);
router.post('/signup', authController.postSignUp);
router.get('/login', authController.getSignIn);
router.post('/login', authController.postSignIn);
//User info
router.get('/user', requireAuth, authController.getUserInfo);
router.put('/user', requireAuth, authController.updateProfile);

module.exports = router;