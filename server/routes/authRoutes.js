import express from 'express';
// const { router } = require('express');
import authController from '../conrollers/authController';
const router = express.Router();

router.get('/signup', authController.getSignUp);
router.post('/signup', authController.postSignUp);
router.get('/login', authController.getSignIn);
router.post('/login', authController.postSignIn);


// router.get('/read-cookiees');

module.exports = router;