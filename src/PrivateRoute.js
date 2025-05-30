import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Get JWT token
  const token = localStorage.getItem('token');
  
  // Check if token exists and is not expired
  const isValidToken = () => {
    if (!token) return false;
    
    try {
      // Get payload from token (second part of JWT)
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Check if token is expired
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  };

  // If token is invalid or expired, redirect to login
  if (!isValidToken()) {
    // Clear any invalid tokens
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return <Navigate to="/login" replace />;
  }

  // Render protected route
  return children;
};

export default PrivateRoute;
