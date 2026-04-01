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
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            src={headerLogo}
            alt="Thunder Dragon FC Logo"
            className="me-2"
            style={{ height: '36px', width: '36px', objectFit: 'cover', borderRadius: '50%' }}
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
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/team"
              active={location.pathname === '/team'}
              onClick={() => setExpanded(false)}
            >
              Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/matches"
              active={location.pathname === '/matches'}
              onClick={() => setExpanded(false)}
            >
              Matches
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/sponsorship"
              active={location.pathname === '/sponsorship'}
              onClick={() => setExpanded(false)}
            >
              Sponsorship
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              active={location.pathname === '/contact'}
              onClick={() => setExpanded(false)}
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
