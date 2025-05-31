import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarEx from './Navbar';
<<<<<<< HEAD
import PrivateRoute from './PrivateRoute';
import EmailVerification from './pages/EmailVerification';

// Page imports
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Facilities from './pages/Facilities';
=======
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Facilities from './pages/Facilites';
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import ListCustomers from './pages/ListCustomers';
import UpdateCustomer from './pages/UpdateCustomer';
import DeleteCustomer from './pages/DeleteCustomer';
import About from './pages/About';
import Cart from './pages/Cart';
import BookedRooms from './pages/BookedRooms';

<<<<<<< HEAD
const App = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAuth = Boolean(token);
  const isAdmin = user.role === 'admin';

  // Public routes that don't need the navbar
  const publicRoutes = ['/login', '/register', '/verify'];
  const showNavbar = isAuth && !publicRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div>
      {showNavbar && <NavbarEx />}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={isAuth ? <Navigate to={isAdmin ? "/admin-dashboard" : "/home"} /> : <Login />} />
        <Route path="/register" element={isAuth ? <Navigate to="/home" /> : <Register />} />
        <Route path="/verify/:token" element={<EmailVerification />} />
        
        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={
          <PrivateRoute requiredRole="admin">
            <AdminDashboard />
          </PrivateRoute>
        } />
        
        <Route path="/listcustomers" element={
          <PrivateRoute requiredRole="admin">
            <ListCustomers />
          </PrivateRoute>
        } />
        
        <Route path="/updatecustomer" element={
          <PrivateRoute requiredRole="admin">
            <UpdateCustomer />
          </PrivateRoute>
        } />
        
        <Route path="/deletecustomer" element={
          <PrivateRoute requiredRole="admin">
            <DeleteCustomer />
          </PrivateRoute>
        } />

        {/* User Routes */}
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        
        <Route path="/gallery" element={
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        } />
        
        <Route path="/facilities" element={
          <PrivateRoute>
            <Facilities />
          </PrivateRoute>
        } />
        
        <Route path="/services" element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        } />
        
        <Route path="/cart" element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
        
        <Route path="/bookedrooms" element={
          <PrivateRoute>
            <BookedRooms />
          </PrivateRoute>
        } />
        
        <Route path="/about" element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        } />

        {/* Redirect root and unknown routes based on auth status and role */}
        <Route
          path="/"
          element={
            isAuth
              ? <Navigate to={isAdmin ? "/admin-dashboard" : "/home"} />
              : <Navigate to="/login" />
          }
        />
        
        <Route
          path="*"
          element={
            isAuth
              ? <Navigate to={isAdmin ? "/admin-dashboard" : "/home"} />
              : <Navigate to="/login" />
          }
        />
=======

const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem('auth') === 'true';
  return isAuth ? children : <Navigate to="/login" />;
};

const App = () => {
  const isAuth = localStorage.getItem('auth') === 'true';

  return (
    <div>
      {isAuth && <NavbarEx />}

      <Routes>
       
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

    
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/gallery" element={<PrivateRoute><Gallery /></PrivateRoute>} />
        <Route path="/facilities" element={<PrivateRoute><Facilities /></PrivateRoute>} />
        <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/bookedrooms" element={<PrivateRoute><BookedRooms /></PrivateRoute>} />
        <Route path="/listcustomers" element={<PrivateRoute><ListCustomers /></PrivateRoute>} />
        <Route path="/updatecustomer" element={<PrivateRoute><UpdateCustomer /></PrivateRoute>} />
        <Route path="/deletecustomer" element={<PrivateRoute><DeleteCustomer /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        
   
        <Route path="*" element={<Navigate to="/login" />} />
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
      </Routes>
    </div>
  );
};
export default App;