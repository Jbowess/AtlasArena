import React, { useState } from 'react';

const AddFundsModal = ({ onClose }) => {
  const [selectedTab, setSelectedTab] = useState('Card');
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
  };

  const handleTopUp = () => {
    // Add logic to handle the top-up action
    // This could include making an API call to process the payment
    console.log(`Top-up initiated with amount: $${selectedAmount}`);
    onClose();
  };

  return (
    <div className="add-funds-modal">
      <div className="modal-container">
        <div className="close-button" onClick={onClose}></div>
        <div className="card-layout">
        <h2>Top-up Atlas Coins</h2>
        </div>
        <div className="tab-options">
          <button onClick={() => setSelectedTab('Card')} className={selectedTab === 'Card' ? 'active' : ''}>Card</button>
          <button onClick={() => setSelectedTab('Crypto')} className={selectedTab === 'Crypto' ? 'active' : ''}>Crypto</button>
          <button onClick={() => setSelectedTab('Visa')} className={selectedTab === 'Visa' ? 'active' : ''}>Visa</button>
        </div>

        {selectedTab === 'Card' && (
          <div className="card-layout">
            <h2>Select your amount</h2>
            <div className="amount-selector">
              <button onClick={() => handleAmountChange(selectedAmount - 10)}>-</button>
              <span>${selectedAmount}</span>
              <button onClick={() => handleAmountChange(selectedAmount + 10)}>+</button>
            </div>

            <div className="input-row">
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="custom-input-row-input" // Use the new class
                />
            </div>

            <div className="input-row label-row">
              <input
                type="text"
                placeholder="Month"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                className="custom-input-row-input small"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="custom-input-row-input small"
              />
            </div>

            <div className="input-row">
              <input
                type="text"
                placeholder="Name on Card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="custom-input-row-input" // Use the new class
                />
            </div>

            <div className="input-row label-row">
              <div className="input-row large">
                <input
                  type="text"
                  placeholder="Billing Address"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  className="custom-input-row-input" // Use the new class
                  />
              </div>
              <div className="input-row small">
                <input
                  type="text"
                  placeholder="ZIP"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  className="custom-input-row-input" // Use the new class
                  />
              </div>
            </div>

            <button className="top-up-button" onClick={handleTopUp}>Top-up ${selectedAmount}</button>
          </div>
        )}

        {/* ... other tab layouts ... */}

      </div>
    </div>
  );
};

export default AddFundsModal;
