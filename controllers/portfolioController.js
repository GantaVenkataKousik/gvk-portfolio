import feedbackModel from '../models/userFeedback.js';
import subscriptionModel from '../models/subscription.js';
import likeCountModel from '../models/likeCount.js';


export const feedbackController = async (req, res) => {
    try {
        const { name, email, feedback } = req.body;
        console.log(name, email, feedback);
        const newUserFeedback = new feedbackModel({
            name,
            email,
            feedback,
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

export const updateLikeCountController = async (req, res) => {
    try {
        const existingRecord = await likeCountModel.findOne({ likes: 'GVKPortfolio' });
        console.log(existingRecord);
        if (existingRecord) {
            const updatedRecord = await likeCountModel.updateOne(
                { likes: 'GVKPortfolio' },
                { $inc: { likeCnt: 1 } }
            );

            if (updatedRecord.modifiedCount > 0) {
                console.log('Update successful.');
                return res.status(200).send({ success: true, message: 'Successful' });
            } else {
                console.log('Document not modified.');
                return res.status(200).send({ success: false, message: 'Document not modified.' });
            }
        }    
        else{
            const newRecord = await likeCountModel.create({ likes: 'GVKPortfolio', likeCnt: 1 });

            if (newRecord) {
                console.log('Insert successful.');
                return res.status(200).send({ success: true, message: 'Successful' });
            } else {
                console.log('Insert failed.');
                return res.status(500).json({ success: false, message: 'Insert failed.' });
            }
        }
    } catch (err) {
      console.error('Error:', err);
      return res.status(500).json({ success: false, message: 'Failed' });
    }
  };


export const subscriptionController = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await subscriptionModel.findOne({ email: email });
        if (!user) {
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