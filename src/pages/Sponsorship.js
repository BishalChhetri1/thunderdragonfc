import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sponsors } from '../data/sponsors';

function Sponsorship() {
  return (
    <div className="min-vh-content">
      <section className="page-section sponsorship-section">
        <Container>
          <h1 className="section-title">Sponsorship</h1>
          
          {/* Sponsorship Opportunities */}
          <Row className="mb-5">
            <Col md={8} className="mx-auto">
              <Card className="mb-4">
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-4">Partner With Us</Card.Title>
                  <Card.Text className="lead mb-4">
                    Thunder Dragon FC offers excellent sponsorship opportunities for businesses 
                    looking to support local sports and connect with the community.
                  </Card.Text>
                  <Card.Text>
                    As a sponsor, you'll benefit from:
                  </Card.Text>
                  <ul>
                    <li>Brand visibility at matches and events</li>
                    <li>Logo placement on team jerseys and website</li>
                    <li>Social media promotion</li>
                    <li>Access to team events and networking opportunities</li>
                    <li>Supporting local sports and community development</li>
                  </ul>
                  <div className="mt-4">
                    <Button as={Link} to="/contact" variant="primary" size="lg">
                      Contact Us About Sponsorship
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Current Sponsors */}
          <h2 className="section-title">Our Sponsors</h2>

          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="sponsor-card-wrapper">
              <Card className="shadow-sm border-0 sponsor-card">
                <Row className="g-0 align-items-center">
                  {sponsor.logo && (
                    <Col md={4} className="text-center p-4">
                      <div className="sponsor-logo-wrapper">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="img-fluid sponsor-logo"
                        />
                      </div>
                    </Col>
                  )}
                  <Col md={sponsor.logo ? 8 : 12}>
                    <Card.Body className="p-4">
                      <span className="sponsor-badge">Official Sponsor</span>
                      <Card.Title className="h4 mb-3">{sponsor.name}</Card.Title>
                      <Card.Text>{sponsor.description}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
          ))}

          {sponsors.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">We're looking for sponsors! Contact us to learn more.</p>
              <Button as={Link} to="/contact" variant="primary" className="mt-3">
                Get in Touch
              </Button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

export default Sponsorship;
