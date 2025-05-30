import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarEx from './Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Facilities from './pages/Facilites';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import ListCustomers from './pages/ListCustomers';
import UpdateCustomer from './pages/UpdateCustomer';
import DeleteCustomer from './pages/DeleteCustomer';
import About from './pages/About';
import Cart from './pages/Cart';
import BookedRooms from './pages/BookedRooms';


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
      </Routes>
    </div>
  );
};
export default App;