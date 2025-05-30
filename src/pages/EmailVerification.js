import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import './EmailVerification.css';

const EmailVerification = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying');
  const [error, setError] = useState('');

  useEffect(() => {
    verifyEmail();
  }, [token]);

  const verifyEmail = async () => {
    try {
      const response = await api.verifyEmail(token);
      if (response.success) {
        setStatus('success');
        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/login', {
            state: { message: 'Email verified successfully! You can now log in.' }
          });
        }, 3000);
      } else {
        setStatus('error');
        setError(response.message || 'Verification failed');
      }
    } catch (error) {
      setStatus('error');
      setError(error.message || 'An error occurred during verification');
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-card">
        {status === 'verifying' && (
          <>
            <div className="spinner"></div>
            <h2>Verifying Your Email</h2>
            <p>Please wait while we verify your email address...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="success-icon">✓</div>
            <h2>Email Verified!</h2>
            <p>Your email has been successfully verified.</p>
            <p className="redirect-message">
              Redirecting to login page in a few seconds...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="error-icon">✗</div>
            <h2>Verification Failed</h2>
            <p className="error-message">{error}</p>
            <button 
              className="retry-button"
              onClick={() => navigate('/login')}
            >
              Go to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;