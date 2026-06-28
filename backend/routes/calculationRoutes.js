import express from 'express';
import {
  createCalculation,
  getHistory,
  deleteCalculation,
  clearHistory,
} from '../controllers/calculationController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';
import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

router.use(authenticateUser); // Protect all routes below

router.post('/', validateRequest, createCalculation);
router.get('/', getHistory);
router.delete('/:id', deleteCalculation);
router.delete('/', clearHistory);

export default router;