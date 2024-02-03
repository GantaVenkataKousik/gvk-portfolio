import express from 'express';
import {feedbackController,subscriptionController,ratingController}from '../controllers/portfolioController.js';

const router = express.Router();
router.post("/feedback",feedbackController);
router.post("/subscription",subscriptionController);
router.post("/rating",ratingController);

export default router;