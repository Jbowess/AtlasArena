import React, { useState } from 'react';
import SignUpForm from "components/sections/SignUpForm.js"

const LoginForm = ({ onClose }) => {
  console.log('LoginForm rendering');

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Add your logic for signing in
    // You can use the email and password here
    const signInData = {
      email,
      password,
    };
    console.log(signInData); // Displaying form data for demonstration
  };

  return (
    <div className="login-form-container-specific">
      <div className="login-form-specific">
        <div className="right-side-specific">
          <div className="close-button-specific" onClick={onClose}></div>
            <h2 style={{ marginBottom: '30px', textAlign: 'left', marginTop: '-30px', fontSize: '24px' }}>   
            <img src="/assets/images/logo/Logo2.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </h2>
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
          <a href="#forgot-password" style={{ marginBottom: '10px', marginLeft: '5px', marginTop: '15px', fontSize: '12px' }}>
            Forgot your password?
          </a>
          <button className="button-specific" onClick={handleSignIn}>
            Sign In
          </button>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            Don't have an account? <a href="#sign-up" style={{ fontSize: '12px' }} onClick={openSignUpModal} >Sign Up.</a>
          </p>
        </div>
      </div>
      {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}

    </div>
  );
};

export default LoginForm;
