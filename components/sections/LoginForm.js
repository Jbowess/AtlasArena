import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SignUpForm from "components/sections/SignUpForm.js";

const LoginForm = ({ onClose, onLogin }) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setLoginStatus({ success: false, message: 'Please enter email and password' });
      return;
    }

    const formData = { email, password };

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { success, message, userData } = await response.json();
        setLoginStatus({ success, message });

        if (success) {
          onLogin(); // Trigger onLogin function upon successful login
          setIsLoggedIn(true)
          localStorage.setItem('isLoggedIn', 'true'); // Save login status in localStorage
          console.log("User logged in successfully");
        }
      } else {
        const data = await response.json();
        setLoginStatus({ success: false, message: data.message || 'Invalid credentials' });
      }
    } catch (error) {
      console.error("Error Logging In:", error);
      setLoginStatus({ success: false, message: 'An unexpected error occurred' });
    }
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
          
          {loginStatus.success && (
            <div className="success-message">{loginStatus.message}</div>
          )}

          {!loginStatus.success && loginStatus.message && (
            <div className="error-message">{loginStatus.message}</div>
          )}

          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            Don't have an account?{' '}
            <a href="#sign-up" style={{ fontSize: '12px' }} onClick={openSignUpModal}>
              Sign Up.
            </a>
          </p>
        </div>
      </div>
      {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}
    </div>
  );
};

export default LoginForm;
