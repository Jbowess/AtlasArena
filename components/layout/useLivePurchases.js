// useLivePurchases.js
import { useState, useEffect } from 'react';

const useLivePurchases = () => {
  const [livePurchases, setLivePurchases] = useState([
    // Your initial data...
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLivePurchases(currentPurchases => [
        { id: Date.now(), name: 'New Box', price: '$100', image: '/path/to/image_new.png' },
        ...currentPurchases, // Spread the current purchases to append them after the new win
      ]);
    }, 2000); // Update every 2 seconds for demonstration

    return () => clearInterval(interval);
  }, []);

  return livePurchases;
};

export default useLivePurchases;
