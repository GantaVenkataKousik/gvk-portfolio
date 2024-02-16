export const fetchFeedbackData = async () => {
    try {
      const response = await fetch('http://localhost:9002/getfeedbacks');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const feedbacks = await response.json();
  
      const FeedBackData = feedbacks.map(feedback => ({
        email: feedback.email,
        feedback: feedback.feedback,
      }));
  
      return FeedBackData;
    } catch (error) {
      console.error('Error fetching feedback data:', error.message);
      throw error;
    }
  };