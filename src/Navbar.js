import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCart } from './Context/CartContext';
import './Navbar.css';

const NavbarEx = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, clearCart } = useCart();
  const token = localStorage.getItem('token');

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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarEx;
