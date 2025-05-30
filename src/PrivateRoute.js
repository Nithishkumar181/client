import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
  // Get JWT token and user data
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
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

  // Check if user has required role
  const hasRequiredRole = () => {
    if (!requiredRole) return true; // If no role required, allow access
    return user.role === requiredRole;
  };

  // If token is invalid or expired, redirect to login
  if (!isValidToken()) {
    // Clear any invalid tokens
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return <Navigate to="/login" replace />;
  }

  // If user doesn't have required role, redirect to home
  if (!hasRequiredRole()) {
    return <Navigate to="/home" replace />;
  }

  // Render protected route
  return children;
};

export default PrivateRoute;
