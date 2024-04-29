import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" style={{  backgroundColor: '#426B67', height: '100px' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-auto  text-white">
          Atleq
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2  fw-bold text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="mx-2  fw-bold text-white">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-2 fw-bold text-white">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
