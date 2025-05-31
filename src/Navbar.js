import React from 'react';
<<<<<<< HEAD
import { useNavigate, Link, useLocation } from 'react-router-dom';
=======
import './Navbar.css';
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
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
  const { cartItems, clearCart } = useCart();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = user.role === 'admin';

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Clear cart data
    clearCart();
    // Redirect to login
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
          onClick={() => navigate(isAdmin ? '/admin-dashboard' : '/home')} 
          className="brand-logo"
        >
          NK Luxury Hotels
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {isAdmin ? (
              // Admin Navigation
              <>
                <Nav.Link
                  as={Link}
                  to="/admin-dashboard"
                  className={isActive('/admin-dashboard')}
                >
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/listcustomers"
                  className={isActive('/listcustomers')}
                >
                  Manage Customers
                </Nav.Link>
                <NavDropdown title="Customer Actions" id="admin-customer-dropdown">
                  <NavDropdown.Item as={Link} to="/updatecustomer">
                    Update Customer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/deletecustomer">
                    Delete Customer
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              // User Navigation
              <>
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
                <Nav.Link
                  as={Link}
                  to="/gallery"
                  className={isActive('/gallery')}
                >
                  Gallery
                </Nav.Link>
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
              </>
            )}

            {/* Show About link for all users */}
            <Nav.Link
              as={Link} 
              to="/about" 
              className={isActive('/about')}
            >
              About
            </Nav.Link>

            {/* User Profile Dropdown */}
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
                  <NavDropdown.Item>
                    Signed in as: <br />
                    <strong>{user.firstName} {user.lastName}</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  {!isAdmin && (
                    <>
                      <NavDropdown.Item as={Link} to="/my-bookings">
                        My Bookings
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/bookedrooms">
                        Booked Rooms
                      </NavDropdown.Item>
                    </>
                  )}
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
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarEx;
