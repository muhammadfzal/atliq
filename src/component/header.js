import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#426B67', width: '100%', height: '100px' }} expand="lg">
      <Navbar.Brand href="#home" style={{ color: 'white', fontWeight: 'bold', marginLeft: '100px' }}>
        Atleq
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ paddingLeft: '30%' }}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={'/'} style={{ color: 'white', fontWeight: 'bold' }}>Home</Nav.Link>
          <Nav.Link as={Link} to={'/service'} style={{ color: 'white', fontWeight: 'bold', paddingLeft: '40px' }}>Services</Nav.Link>
          <Nav.Link as={Link} style={{ color: 'white', fontWeight: 'bold', paddingLeft: '30px' }}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
