import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import NavbarEx from './Navbar';
import PrivateRoute from './PrivateRoute';

// Page imports
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import ListCustomers from './pages/ListCustomers';
import UpdateCustomer from './pages/UpdateCustomer';
import DeleteCustomer from './pages/DeleteCustomer';
import About from './pages/About';
import Cart from './pages/Cart';
import BookedRooms from './pages/BookedRooms';

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAuth = Boolean(token);
  const isAdmin = user.role === 'admin';

  // Public routes that don't need the navbar
  const publicRoutes = ['/login', '/register'];
  const showNavbar = isAuth && !publicRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbar && <NavbarEx />}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={isAuth ? <Navigate to={isAdmin ? "/admin" : "/home"} /> : <Login />} />
        <Route path="/register" element={isAuth ? <Navigate to="/home" /> : <Register />} />
        <Route path="/verify/:token" element={<EmailVerification />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={
          <PrivateRoute>
            {isAdmin ? <AdminDashboard /> : <Navigate to="/home" />}
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
        
        <Route path="/listcustomers" element={
          <PrivateRoute>
            <ListCustomers />
          </PrivateRoute>
        } />
        
        <Route path="/updatecustomer" element={
          <PrivateRoute>
            <UpdateCustomer />
          </PrivateRoute>
        } />
        
        <Route path="/deletecustomer" element={
          <PrivateRoute>
            <DeleteCustomer />
          </PrivateRoute>
        } />
        
        <Route path="/about" element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        } />

        {/* Redirect root based on auth status and role */}
        <Route
          path="/"
          element={
            isAuth
              ? <Navigate to={isAdmin ? "/admin" : "/home"} />
              : <Navigate to="/login" />
          }
        />
        
        {/* Catch all other routes */}
        <Route
          path="*"
          element={
            isAuth
              ? <Navigate to={isAdmin ? "/admin" : "/home"} />
              : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
