import React, { useEffect } from 'react';
import CheckoutPage from 'C:\\Users\\61412\\Documents\\Business\\Atlas Arena\\Production\\open9\\pages\\checkout';

const CheckoutModal = ({ cartItems, isModalOpen, onClose }) => {
    // Open the modal when the component mounts and run the effect whenever `isModalOpen` changes
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup: Allow scrolling when the component unmounts or when `isModalOpen` changes
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const closeModal = () => {
    onClose(); // Call the onClose function passed as a prop to close the modal
  };

  return (
    <div id="checkout-modal" className="checkout-modal">
      <div className="modal-content">
        <CheckoutPage onClose={closeModal} cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CheckoutModal;
