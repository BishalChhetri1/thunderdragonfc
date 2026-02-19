import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  const location = useLocation();

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          ⚽ Thunder Dragon FC
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/team" active={location.pathname === '/team'}>
              Team Players
            </Nav.Link>
            <Nav.Link as={Link} to="/matches" active={location.pathname === '/matches'}>
              Matches
            </Nav.Link>
            <Nav.Link as={Link} to="/sponsorship" active={location.pathname === '/sponsorship'}>
              Sponsorship
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
