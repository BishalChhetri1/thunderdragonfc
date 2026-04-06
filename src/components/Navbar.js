import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import headerLogo from '../Images/headerlogo.jpg';

function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      className="club-navbar"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="club-brand">
          <img
            src={headerLogo}
            alt="Thunder Dragon FC Logo"
            className="me-2 nav-logo"
          />
          Thunder Dragon FC
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(prev => !prev)}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === '/'}
              onClick={() => setExpanded(false)}
              className="club-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/team"
              active={location.pathname === '/team'}
              onClick={() => setExpanded(false)}
              className="club-nav-link"
            >
              Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/matches"
              active={location.pathname === '/matches'}
              onClick={() => setExpanded(false)}
              className="club-nav-link"
            >
              Matches
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/sponsorship"
              active={location.pathname === '/sponsorship'}
              onClick={() => setExpanded(false)}
              className="club-nav-link"
            >
              Sponsorship
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              active={location.pathname === '/contact'}
              onClick={() => setExpanded(false)}
              className="club-nav-link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
