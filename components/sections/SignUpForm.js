import React, { useState } from 'react';
import LoginForm from 'components/sections/LoginForm.js';

const SignUpForm = ({ onClose }) => {
  const countryCodes = [
    { code: 'AT', name: 'Austria', mobileExtension: '+43' },
    { code: 'BE', name: 'Belgium', mobileExtension: '+32' },
    { code: 'CA', name: 'Canada', mobileExtension: '+1' },
    { code: 'DK', name: 'Denmark', mobileExtension: '+45' },
    { code: 'FI', name: 'Finland', mobileExtension: '+358' },
    { code: 'FR', name: 'France', mobileExtension: '+33' },
    { code: 'DE', name: 'Germany', mobileExtension: '+49' },
    { code: 'HK', name: 'Hong Kong', mobileExtension: '+852' },
    { code: 'IE', name: 'Ireland', mobileExtension: '+353' },
    { code: 'IT', name: 'Italy', mobileExtension: '+39' },
    { code: 'JP', name: 'Japan', mobileExtension: '+81' },
    { code: 'KR', name: 'South Korea', mobileExtension: '+82' },
    { code: 'LU', name: 'Luxembourg', mobileExtension: '+352' },
    { code: 'NL', name: 'Netherlands', mobileExtension: '+31' },
    { code: 'NO', name: 'Norway', mobileExtension: '+47' },
    { code: 'PH', name: 'Philippines', mobileExtension: '+63' },
    { code: 'SG', name: 'Singapore', mobileExtension: '+65' },
    { code: 'SE', name: 'Sweden', mobileExtension: '+46' },
    { code: 'CH', name: 'Switzerland', mobileExtension: '+41' },
    { code: 'SG', name: 'Singapore', mobileExtension: '+65' },
    { code: 'TH', name: 'Thailand', mobileExtension: '+66' },
    { code: 'GB', name: 'United Kingdom', mobileExtension: '+44' },
    { code: 'US', name: 'United States', mobileExtension: '+1' },
    { code: 'VN', name: 'Vietnam', mobileExtension: '+84' },

  ];

  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
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
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const openLogInModal = () => {
    setIsLogInModalOpen(true);
  };

  const closeLogInModal = () => {
    setIsLogInModalOpen(false);
  };

  const handleCreateAccount = async () => {
    setSubmitted(true);
  
    // Validate the form
    const formValidation = validateForm();
  
    // Check if the form is valid
    if (Object.values(formValidation).every((isValid) => isValid)) {
      // Form is valid, proceed with API call
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
  
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setSuccessMessage('Welcome to Atlas! Account Created Successfully');
          // Handle success, e.g., show a success message or redirect the user
        } else {
          const data = await response.json();
          setErrorMessage(data.error || 'Failed to create account');
        }
      } catch (error) {
        console.error('Error creating account:', error);
        setErrorMessage('An unexpected error occurred');
      } finally {
        // Stop loading animation
        setIsLoading(false);
      }
    } else {
      // Form is not valid, handle accordingly
      setErrorMessage('Please fill in all required fields');
    }
  };
  

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    const isValidEmail = emailRegex.test(email.trim());
    const isValidPassword = passwordRegex.test(password.trim());
    const isValidCountry = country.trim() !== '';
    const dateOfBirth = calculateAge(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10));
    const isValidDateOfBirth = dateOfBirth >= 18;
    const isValidCountryCode = countryCode.trim() !== '';
    const isValidTermsAgreement = termsAgreement;
  
    // Validation status for each field
    const validationStatus = {
      email: isValidEmail,
      password: isValidPassword,
      country: isValidCountry,
      dateOfBirth: isValidDateOfBirth,
      countryCode: isValidCountryCode,
      termsAgreement: isValidTermsAgreement,
    };
  
    return validationStatus;
  };

  const calculateAge = (year, month, day) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDropdownChange = (value) => {
    setCountryCode(value);
    setIsDropdownOpen(false);
  };

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
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}   
        <h2 style={{ marginBottom: '30px', textAlign: 'left', marginTop:'10px' }}>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={validateForm().email ? '' : 'invalid'}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={validateForm().password ? '' : 'invalid'}
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className={validateForm().country ? '' : 'invalid'}

          >
            <option value="">Select Country</option>
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <div className="dob-inputs" >
            <input
              type="text"
              placeholder="Day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              pattern="\d+"
              required
              className={validateForm().dateOfBirth ? '' : 'invalid'}
            />
            <input
              type="text"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              pattern="\d+"
              required
              className={validateForm().dateOfBirth ? '' : 'invalid'}
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              pattern="\d+"
              required
              className={validateForm().dateOfBirth ? '' : 'invalid'}
            />
          </div>
          <div className="mobile-inputs">
          <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          required
          className={validateForm().countryCode ? '' : 'invalid'}
        >
          <option value="">Select Country Code</option>
          {countryCodes.map((country) => (
            <option key={country.code} value={`${country.mobileExtension} - ${country.name}`}>
              {`${country.mobileExtension} - ${country.name}`}
            </option>
          ))}
        </select>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              pattern="\d+"
              required
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
                className={validateForm().termsAgreement ? '' : 'invalid'}
              />
              <label htmlFor="termsAgreement">Agree to Terms and Conditions</label>
            </div>
          </div>
          <button
          className={submitted && !validateForm() ? 'invalid' : ''}
          onClick={handleCreateAccount}
        >
          Create Account
        </button>          
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Have an account? <a href="#" onClick={openLogInModal}>Sign In</a>
          </p>
        </div>
      </div>
      {isLogInModalOpen && <LoginForm onClose={closeLogInModal} />}
    </div>
  );
};

export default SignUpForm;
