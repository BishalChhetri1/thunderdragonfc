import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../Images/ThunderDragonFC.jpg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <img
              src={logo}
              alt="Thunder Dragon FC Logo"
              className="footer-logo mb-3"
            />
            <h5>Thunder Dragon FC</h5>
            <p>Your local soccer team committed to excellence, teamwork, and community spirit.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/team">Team Players</a></li>
              <li><a href="/matches">Matches</a></li>
              <li><a href="/sponsorship">Sponsorship</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a href="https://www.facebook.com/Thunderdragonfc/" className="me-3">Facebook</a>
              <a href="https://www.instagram.com/thunderdragonfc/">Instagram</a>
            </p>
            <p className="mt-3">
              <small>&copy; {new Date().getFullYear()} Thunder Dragon FC. All rights reserved.</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
