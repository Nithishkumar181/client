import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarEx;
