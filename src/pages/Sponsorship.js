import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sponsors } from '../data/sponsors';

function Sponsorship() {
  const goldSponsors = sponsors.filter(s => s.tier === 'Gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'Silver');
  const bronzeSponsors = sponsors.filter(s => s.tier === 'Bronze');

  return (
    <div className="min-vh-content">
      <section className="page-section">
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
          
          {goldSponsors.length > 0 && (
            <div className="mb-5">
              <h3 className="text-center mb-4">
                <span className="badge bg-warning text-dark p-2">Gold Sponsors</span>
              </h3>
              <Row>
                {goldSponsors.map(sponsor => (
                  <Col md={6} key={sponsor.id} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>{sponsor.name}</Card.Title>
                        <Card.Text>{sponsor.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {silverSponsors.length > 0 && (
            <div className="mb-5">
              <h3 className="text-center mb-4">
                <span className="badge bg-secondary p-2">Silver Sponsors</span>
              </h3>
              <Row>
                {silverSponsors.map(sponsor => (
                  <Col md={6} key={sponsor.id} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>{sponsor.name}</Card.Title>
                        <Card.Text>{sponsor.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {bronzeSponsors.length > 0 && (
            <div className="mb-5">
              <h3 className="text-center mb-4">
                <span className="badge bg-dark p-2">Bronze Sponsors</span>
              </h3>
              <Row>
                {bronzeSponsors.map(sponsor => (
                  <Col md={4} key={sponsor.id} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>{sponsor.name}</Card.Title>
                        <Card.Text className="small">{sponsor.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}

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
