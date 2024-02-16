
export const fetchSubscriberData = async () => {
    try {
      const response = await fetch('http://localhost:9002/getsubscribers');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const subscribers = await response.json();
  
      const SubscriberData = subscribers.map(subscriber => subscriber.email);
  
      return SubscriberData;
    } catch (error) {
      console.error('Error fetching subscriber data:', error.message);
      throw error;
    }
  };