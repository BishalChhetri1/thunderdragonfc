import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Images/ThunderDragonFC.jpg';

function Footer() {
  return (
    <footer className="club-footer">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <img
              src={logo}
              alt="Thunder Dragon FC Logo"
              className="footer-logo mb-3"
            />
            <h5 className="mb-2">Thunder Dragon FC</h5>
            <p className="mb-0">
              A community-driven football club representing pride, passion, and professionalism on and off the pitch.
            </p>
          </Col>
          <Col md={4}>
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-1"><Link to="/">Home</Link></li>
              <li className="mb-1"><Link to="/team">Team Players</Link></li>
              <li className="mb-1"><Link to="/matches">Matches</Link></li>
              <li className="mb-1"><Link to="/sponsorship">Sponsorship</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="text-uppercase fw-bold">Follow Us</h6>
            <p>
              <a href="https://www.facebook.com/Thunderdragonfc/" className="me-3" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/thunderdragonfc/" target="_blank" rel="noreferrer">Instagram</a>
            </p>
            <p className="small mb-1"><strong>Email:</strong> thunderdragonfootballclub@gmail.com</p>
            <p className="small mb-0"><strong>Phone:</strong> 0452 168 663</p>
            <p className="mt-3 mb-0">
              <small>&copy; {new Date().getFullYear()} Thunder Dragon FC. All rights reserved.</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
