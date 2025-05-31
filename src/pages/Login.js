<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default to user login
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [serverStatus, setServerStatus] = useState('checking');

  // Check server connection on component mount
  useEffect(() => {
    checkServer();
  }, []);

  const checkServer = async () => {
    try {
      await api.testConnection();
      setServerStatus('connected');
      setError('');
    } catch (error) {
      console.error('Server check failed:', error);
      setServerStatus('disconnected');
      setError('Cannot connect to server. Please ensure the server is running.');
    }
  };

  const handleSubmit = async (e) => {
=======
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
    e.preventDefault();

    try {
<<<<<<< HEAD
      const data = await api.login(email, password, role);
      
      if (data.success) {
        // Store token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Navigate based on user role
        if (data.user.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/home');
        }
=======
      const res = await fetch('https://lastbackends.onrender.com/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', email);
        alert(data.message);
        navigate('/home');
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Server error. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="boss">
<<<<<<< HEAD
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
        <p>Please select your role to continue</p>

        <div className="role-selector">
          <button
            type="button"
            className={`role-btn ${role === 'user' ? 'active' : ''}`}
            onClick={() => setRole('user')}
          >
            User Login
          </button>
          <button
            type="button"
            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
            onClick={() => setRole('admin')}
          >
            Admin Login
          </button>
        </div>

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

        {role === 'user' && (
          <div className="register-prompt">
            <p>Don't have an account?</p>
            <button
              type="button"
              className="register-link"
              onClick={() => navigate('/register')}
            >
              Register Now
            </button>
          </div>
        )}
      </form>
=======
      {!showForm ? (
        <button className="login-button" onClick={() => setShowForm(true)}>
          Login
        </button>
      ) : (
        <form className="login-form" onSubmit={login}>
          <h1>Welcome!</h1>
          <p>
            Create your New Account |{' '}
            <a
              href="/register"
              onClick={(e) => {
                e.preventDefault();
                navigate('/register');
              }}
            >
              Register
            </a>
          </p>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      )}
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
    </div>
  );
};

export default Login;
