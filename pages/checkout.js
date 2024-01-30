import React, { useState } from 'react';

const CheckoutPage = ({ onClose, cartItems }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleClose = () => {
    console.log('Close button clicked');
    onClose();
  };

  const handleCheckout = () => {
    console.log('Checking out with items:', cartItems);

    const formData = {
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
      billingAddress,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      shippingAddress,
    };
    console.log(formData);
  };

  const processingFee = 4.5;
  const shippingFee = 9;
  const taxAmount = 1.5;
  const grandTotal = processingFee + shippingFee + taxAmount;

  // Disable checkout button if any required field is empty
  const isCheckoutDisabled =
    !cardNumber ||
    !expiryDate ||
    !cvv ||
    !nameOnCard ||
    !billingAddress ||
    !shippingAddress ||
    !addressLine1 ||
    !city ||
    !state ||
    !zipCode;

  return (
    <div className="checkout-container">
        <div className="checkout-form">
        {/* Left side content */}
        <div className="checkout-left-side">
            <h3>Order Summary</h3>
            {/* Display item names, pictures, and costs here */}
            {cartItems?.map((item, index) => (
            <div key={index} className="order-item">
                <img src={item.image}/>
                <div className="order-item-details">
                <p>{item.name}</p>
                </div>
            </div>
            ))}
            {/* Display costs */}
            <p>Total Shipping Cost: ${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>

        {/* Right side content */}
        <div className="checkout-right-side">
          <div className="checkout-logo-container">
            {/* IMAGE HERE */}
          </div>
          <h2>Checkout</h2>
          {/* Input fields */}
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="checkout-dob-inputs">
            <input
              type="text"
              placeholder="Expiry Date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Name on Card"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
          <input
            type="text"
            placeholder="Billing Address"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Shipping Address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
          {/* City, State, and Zip Code in one row */}
          <div className="checkout-dob-inputs">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          {/* Order summary */}
          <div className="close-button-checkout" onClick={handleClose}>
            x
          </div>
          {/* Place Order button */}
          <button onClick={handleCheckout} disabled={isCheckoutDisabled}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
