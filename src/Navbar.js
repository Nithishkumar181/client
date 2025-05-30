import React from 'react';
<<<<<<< HEAD
import { useNavigate, Link, useLocation } from 'react-router-dom';
=======
import './Navbar.css';
>>>>>>> aec2135 (Initial commit with backend URL updates)
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
<<<<<<< HEAD
import { useCart } from './Context/CartContext';
import './Navbar.css';

const NavbarEx = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      sticky="top" 
      className="navbar-custom shadow-sm"
    >
      <Container>
        <Navbar.Brand 
          onClick={() => navigate('/home')} 
          className="brand-logo"
        >
          NK Luxury Hotels
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Main Navigation */}
            <Nav.Link 
              as={Link} 
              to="/home" 
              className={isActive('/home')}
            >
              Home
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/facilities" 
              className={isActive('/facilities')}
            >
              Facilities
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/services" 
              className={isActive('/services')}
            >
              Services
            </Nav.Link>

            {/* Cart with Badge */}
            <Nav.Link 
              as={Link} 
              to="/cart" 
              className={`cart-link ${isActive('/cart')}`}
            >
              Cart
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}
            </Nav.Link>

            {/* Customer Management Dropdown */}
            <NavDropdown 
              title="Manage Bookings" 
              id="booking-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/bookedrooms">
                Booked Rooms
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/listcustomers">
                Customer List
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/updatecustomer">
                Update Booking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/deletecustomer">
                Cancel Booking
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about')}
            >
              About
            </Nav.Link>

            {/* User Menu */}
            <NavDropdown 
              title={
                <i className="fas fa-user-circle"></i>
              } 
              id="user-dropdown"
              className="nav-dropdown"
              align="end"
            >
              {token ? (
                <>
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register">
                    Register
                  </NavDropdown.Item>
                </>
              )}
=======
import { useNavigate } from 'react-router-dom';

const NavbarEx = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';
  

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');

     

  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm" class="find">
      <Container className="container-custom">
        <Navbar.Brand href="#home" className="fw-bold text-uppercase text-warning">
          NK Luxury Hotels
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Login" id="login-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="login">Login</NavDropdown.Item>
              <NavDropdown.Item href="Register">Register</NavDropdown.Item>
            </NavDropdown>
          
            <NavDropdown title="Home" id="home-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="home">Home</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Register" id="register-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="Register">Register</NavDropdown.Item>
              <NavDropdown.Item href="ListCustomers">ListCustomers</NavDropdown.Item>
              <NavDropdown.Item href="UpdateCustomer">UpdateCustomer</NavDropdown.Item>
              <NavDropdown.Item href="DeleteCustomer">DeleteCustomer</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="BookedRooms" id="BookedRooms-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="BookedRooms">BookedRooms</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Facilities" id="facilities-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="facilities">Facilities</NavDropdown.Item>
            </NavDropdown>

             <NavDropdown title="Cart" id="Cart-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="Cart">Cart</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="services-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="services">Services</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About" id="about-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="about">About</NavDropdown.Item>
>>>>>>> aec2135 (Initial commit with backend URL updates)
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarEx;
