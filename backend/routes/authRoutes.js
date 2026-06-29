import express from 'express';
import { register, login, updateProfile } from '../controllers/authController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/profile', authenticateUser, updateProfile);

export default router;