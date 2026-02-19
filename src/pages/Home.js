import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { matches } from '../data/matches';
import TeamPhoto1 from '../Images/TeamPhoto1.jpg';
import TeamPhoto2 from '../Images/TeamPhoto2.jpg';
import TeamPhoto3 from '../Images/TeamPhoto3.jpg';
import TeamPhoto4 from '../Images/TeamPhoto4.jpg';

function Home() {
  const upcomingMatch = matches.find(match => match.type === 'upcoming');
  const recentMatches = matches.filter(match => match.type === 'past').slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <h1>Thunder Dragon FC</h1>
          <p>Passion. Pride. Performance.</p>
          <div>
            <Button as={Link} to="/team" variant="light" size="lg" className="me-3">
              Meet the Team
            </Button>
            <Button as={Link} to="/matches" variant="outline-light" size="lg">
              View Matches
            </Button>
          </div>
        </Container>
      </section>

      {/* Upcoming Match Section */}
      {upcomingMatch && (
        <section className="page-section bg-light">
          <Container>
            <h2 className="section-title">Next Match</h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="text-center">
                  <Card.Body className="p-5">
                    <Card.Title className="h3 mb-4">vs {upcomingMatch.opponent}</Card.Title>
                    <Card.Text className="h5 text-muted mb-3">
                      {new Date(upcomingMatch.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </Card.Text>
                    <Card.Text className="h6 mb-3">
                      <strong>Time:</strong> {upcomingMatch.time}
                    </Card.Text>
                    <Card.Text className="mb-4">
                      <strong>Venue:</strong> {upcomingMatch.venue}
                    </Card.Text>
                    <Button as={Link} to="/matches" variant="primary" size="lg">
                      View All Matches
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Recent Results Section */}
      <section className="page-section">
        <Container>
          <h2 className="section-title">Recent Results</h2>
          <Row>
            {recentMatches.map(match => (
              <Col md={4} key={match.id} className="mb-4">
                <Card className="match-card h-100">
                  <Card.Body>
                    <Card.Title>{match.opponent}</Card.Title>
                    <Card.Text className="text-muted">
                      {new Date(match.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </Card.Text>
                    <Card.Text>
                      <span className={`badge ${match.result === 'Win' ? 'bg-success' : match.result === 'Draw' ? 'bg-warning' : 'bg-danger'}`}>
                        {match.result}
                      </span>
                      {' '}
                      <strong className="ms-2">{match.score}</strong>
                    </Card.Text>
                    <Card.Text className="text-muted small">
                      {match.venue}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/matches" variant="outline-primary">
              View All Matches
            </Button>
          </div>
        </Container>
      </section>

      {/* About Our Team Section */}
      <section className="page-section bg-light">
        <Container>
          <h2 className="section-title">About Our Team</h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <Card>
                <Card.Body className="p-4">
                  <Card.Text className="lead">
                    Thunder Dragon FC is a passionate local soccer team committed to excellence, teamwork, and community spirit.
                    Founded in 2012 by Bhutanese refugee members living in Melbourne, the club was established with the vision of
                    bringing together talented players who share a love for the beautiful game. The club has continuously grown stronger
                    and larger every year through the commitment of our community and young talented players.
                  </Card.Text>
                  <Card.Text>
                    We train hard, play with heart, and support each other both on and off the field. Through our commitment
                    to continuous improvement and teamwork, we aim to achieve great things together and make our community proud.
                  </Card.Text>
                  <Card.Text>
                    Currently, we are competing in the MCSA Silicon Stack Premier League, local tournaments hosted by Nepalese
                    communities, and the Bhutanese Interstate Soccer Championship, which is hosted annually by Bhutanese clubs
                    across Australia. Thunder Dragon FC represents more than just a soccer team—we’re a family bound by our
                    love for the sport.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Photos Section */}
      <section className="page-section">
        <Container>
          <h2 className="section-title">Team Photos</h2>
          <Row className="justify-content-center">
            <Col md={6} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={TeamPhoto1}
                  alt="Thunder Dragon FC Team Photo 1"
                  className="team-photo"
                />
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={TeamPhoto2}
                  alt="Thunder Dragon FC Team Photo 2"
                  className="team-photo"
                />
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={TeamPhoto3}
                  alt="Thunder Dragon FC Team Photo 3"
                  className="team-photo"
                />
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={TeamPhoto4}
                  alt="Thunder Dragon FC Team Photo 4"
                  className="team-photo"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="page-section bg-primary text-white">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="mb-4">Join Our Community</h2>
              <p className="lead">
                Support your local team! Whether you're interested in sponsorship opportunities
                or just want to stay connected, we'd love to hear from you.
              </p>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-end">
              <div>
                <Button as={Link} to="/sponsorship" variant="light" size="lg" className="me-3">
                  Become a Sponsor
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" size="lg">
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
