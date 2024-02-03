import feedbackModel from '../models/userFeedback.js';
import subscriptionModel from '../models/subscription.js';
import ratingModel from '../models/rating.js';

export const feedbackController = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log(name,email,message);
        const newUserFeedback = new feedbackModel({
        name,
            email,
                feedback:message,
                time: new Date()
        });
            
            await newUserFeedback.save();
            return res.status(200).send({ success: true, message: 'Successfull' });
        }
     catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ success: false, message: 'Failed' });
    }
};


export const ratingController = async (req, res) => {
    try {
        const { email,rating } = req.body;
        console.log(email,rating);
        const newRating = new ratingModel({
            email,
            rating,
            time: new Date()
        });
            
            await newRating.save();
            return res.status(200).send({ success: true, message: 'Successfull' });
        }
     catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ success: false, message: 'Failed' });
    }
};


export const subscriptionController = async (req, res) => {
    try {
        const { email  } = req.body;
        const user = await subscriptionModel.findOne({ email: email });
        if(!user){
            const newSubsription = new subscriptionModel({
                email,
                time: new Date()
            });
            await newSubsription.save();
            return res.status(200).send({ success: true, message: 'Successfull' });
        }
    }
     catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ success: false, message: 'Failed' });
    }
};