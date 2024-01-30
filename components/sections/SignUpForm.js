import React, { useState } from 'react';

const SignUpForm = ({ onClose }) => {
  console.log('SignupForm rendering'); // Add this line to see if the SignupForm is rendering

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [promoAgreement, setPromoAgreement] = useState(false);
    const [termsAgreement, setTermsAgreement] = useState(false);

    const handleCreateAccount = () => {
        // Add your logic for creating an account
        // You can use the form data here
        const formData = {
            email,
            password,
            country,
            day,
            month,
            year,
            mobileNumber,
            countryCode,
            promoAgreement,
            termsAgreement,
        };
        console.log(formData); // Displaying form data for demonstration
    }

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <div className="left-side">
          <div className="left-side-content">
            <div className="logo-container">
              {/* Add your logo image here */}
            </div>
            <div className="welcome-text">
              <h2>Join Atlas Arena</h2>
              <p>Get up to $5,500 bonus + 300 Free Spins</p>
            </div>
            <div className="additional-info">
              <p>24/7 support service</p>
              <p>VIP players club</p>
              <p>Quick payouts</p>
              <p>More than 9,000 games for every taste.</p>
            </div>
            <div className="payment-images">
              {/* Add small payment images here */}
              <div>Payment 1</div>
              <div>Payment 2</div>
              {/* Add more placeholders as needed */}
            </div>
          </div>
        </div>
    <div className="right-side">      
      <div className="close-button" onClick={onClose}>
      </div>
        <h2 style={{ marginBottom: '30px', textAlign: 'left', marginTop:'10px' }}>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {/* Add options for popular countries */}
          </select>
          <div className="dob-inputs">
            <input
              type="text"
              placeholder="Day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <input
              type="text"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="mobile-inputs">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="">Select Country Code</option>
              {/* Add options for country codes */}
            </select>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="agreement-checkboxes">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="promoAgreement"
                checked={promoAgreement}
                onChange={() => setPromoAgreement(!promoAgreement)}
              />
              <label htmlFor="promoAgreement">Agree to Promotional Offers</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="termsAgreement"
                checked={termsAgreement}
                onChange={() => setTermsAgreement(!termsAgreement)}
              />
              <label htmlFor="termsAgreement">Agree to Terms and Conditions</label>
            </div>
          </div>
          <button onClick={handleCreateAccount}>Create Account</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Have an account? <a href="#" onClick={() => console.log('Sign In clicked')}>Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
