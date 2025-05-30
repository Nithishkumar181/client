import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@example.com'); // Pre-filled for testing
  const [password, setPassword] = useState('admin123!@#'); // Pre-filled for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [serverStatus, setServerStatus] = useState('checking');

  // Check server connection on component mount
  useEffect(() => {
    checkServer();
  }, []);

  const checkServer = async () => {
    try {
      const result = await api.testConnection();
      console.log('Server test result:', result);
      setServerStatus('connected');
      setError('');
    } catch (error) {
      console.error('Server check failed:', error);
      setServerStatus('disconnected');
      setError('Cannot connect to server. Please ensure the server is running.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Attempting login with:', { email, password });
      const data = await api.login(email, password);
      console.log('Login response:', data);

      if (data.success) {
        console.log('Login successful, redirecting...');
        navigate('/home');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="boss">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome!</h1>

        {/* Server Status Indicator */}
        <div style={{ 
          marginBottom: '1rem', 
          color: serverStatus === 'connected' ? 'green' : 'orange'
        }}>
          Server Status: {serverStatus}
          {serverStatus === 'checking' && '...'}
          {serverStatus === 'disconnected' && 
            <button 
              type="button" 
              onClick={checkServer}
              style={{ marginLeft: '1rem', padding: '0.2rem 0.5rem' }}
            >
              Retry
            </button>
          }
        </div>

        {error && (
          <div className="error-message" style={{ 
            color: 'red', 
            marginBottom: '1rem',
            padding: '10px',
            backgroundColor: '#ffebee',
            borderRadius: '4px',
            border: '1px solid #ffcdd2'
          }}>
            {error}
          </div>
        )}

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading || serverStatus !== 'connected'}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            disabled={loading || serverStatus !== 'connected'}
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading || serverStatus !== 'connected'}
          style={{ 
            opacity: loading || serverStatus !== 'connected' ? 0.7 : 1,
            cursor: loading || serverStatus !== 'connected' ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {loading && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: '10px',
            color: '#666'
          }}>
            Please wait...
          </div>
        )}
      </form>

      {/* Debug Information */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          background: '#f5f5f5',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <h4>Debug Info:</h4>
          <pre>
            Server Status: {serverStatus}
            {'\n'}
            API URL: {process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Login;
