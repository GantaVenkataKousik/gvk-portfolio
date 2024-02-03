import express from 'express';
import {feedbackController,subscriptionController,updateLikeCountController}from '../controllers/portfolioController.js';

const router = express.Router();

router.post("/feedback",feedbackController);
router.post("/subscription",subscriptionController);
router.get("/updateLikeCnt",updateLikeCountController);

export default router;