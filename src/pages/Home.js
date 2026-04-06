import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';
import { matches } from '../data/matches';
import { clubStats, latestNews, leagueTable, clubPrinciples } from '../data/clubContent';
import TeamPhoto1 from '../Images/TeamPhoto1.jpg';
import TeamPhoto2 from '../Images/TeamPhoto2.jpg';
import TeamPhoto3 from '../Images/TeamPhoto3.jpg';
import TeamPhoto4 from '../Images/TeamPhoto4.jpg';
import ThunderDragonLogo from '../Images/ThunderDragonFC.jpg';

function Home() {
  const upcomingMatch = [...matches]
    .filter(match => match.type === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  const recentMatches = [...matches]
    .filter(match => match.type === 'past')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${TeamPhoto2})` }}
      >
        <div className="hero-overlay" />
        <Container className="hero-content">
          <span className="hero-badge">Melbourne Community Football Club</span>
          <h1 className="hero-title">Thunder Dragon FC</h1>
          <p className="hero-text mb-4">
            Building a competitive, disciplined, and united football culture with pride in every training session and every matchday.
          </p>
          <div>
            <Button as={Link} to="/team" variant="warning" size="lg" className="me-3 fw-bold">
              Meet the Team
            </Button>
            <Button as={Link} to="/matches" variant="outline-light" size="lg" className="fw-bold">
              View Matches
            </Button>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <Row className="g-3">
            {clubStats.map((stat) => (
              <Col key={stat.id} md={3} sm={6}>
                <div className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {upcomingMatch && (
        <section className="page-section pt-0">
          <Container>
            <h2 className="section-title text-center">Next Fixture</h2>
            <p className="section-subtitle">Our next competitive fixture. Come support the boys and represent the club.</p>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="text-center brand-card match-highlight">
                  <Card.Body className="p-5 next-fixture-body">
                    <div className="fixture-teams mb-4">
                      <div className="fixture-team">
                        <img
                          src={ThunderDragonLogo}
                          alt="Thunder Dragon FC"
                          className="fixture-team-logo"
                        />
                        <span className="fixture-team-name fixture-name-full">Thunder Dragon FC</span>
                        <span className="fixture-team-name fixture-name-short">Thunder Dragon</span>
                        <span className="fixture-team-name fixture-name-abbr">TDFC</span>
                      </div>
                      <span className="fixture-vs">vs</span>
                      <div className="fixture-team">
                        {upcomingMatch.opponentLogo ? (
                          <img
                            src={upcomingMatch.opponentLogo}
                            alt={upcomingMatch.opponent}
                            className="fixture-team-logo"
                          />
                        ) : (
                          <div className="fixture-team-logo-placeholder" />
                        )}
                        <span className="fixture-team-name">{upcomingMatch.opponent}</span>
                      </div>
                    </div>
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
                    <Button as={Link} to="/matches" variant="danger" size="lg" className="fw-bold">
                      View All Matches
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <section className="page-section">
        <Container>
          <h2 className="section-title text-center">Recent Results</h2>
          <p className="section-subtitle">A quick look at our latest performances across league and tournament fixtures.</p>
          <Row>
            {recentMatches.map(match => (
              <Col md={4} key={match.id} className="mb-4">
                <Card className="match-card h-100 brand-card">
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
            <Button as={Link} to="/matches" variant="outline-danger">
              View All Matches
            </Button>
          </div>
        </Container>
      </section>

      <section className="page-section pt-0">
        <Container>
          <h2 className="section-title text-center">Latest Club News</h2>
          <Row className="g-4">
            {latestNews.map((news) => (
              <Col md={4} key={news.id}>
                <Card className="brand-card h-100">
                  <Card.Body>
                    <Card.Text className="small text-muted mb-2">
                      {new Date(news.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </Card.Text>
                    <Card.Title className="h5">{news.title}</Card.Title>
                    <Card.Text>{news.summary}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="page-section pt-0">
        <Container>
          <Row className="g-4">
            <Col lg={7}>
              <h2 className="section-title">About Our Team</h2>
              <Card className="brand-card">
                <Card.Body className="p-4">
                  <Card.Text className="lead">
                    Thunder Dragon FC is a local football team committed to excellence, teamwork, and community spirit.
                    Founded in 2012 by Bhutanese refugee members living in Melbourne, the club was established with the vision of
                    bringing together talented players who share a love for the beautiful game.
                  </Card.Text>
                  <Card.Text>
                    We train hard, play with heart, and support each other on and off the field. Through discipline and
                    continuous improvement, we aim to perform at a high standard while making our community proud.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5}>
              <h2 className="section-title">League Snapshot</h2>
              <Card className="brand-card">
                <Card.Body>
                  <Table responsive size="sm" className="mb-0 align-middle">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Club</th>
                        <th>P</th>
                        <th>GD</th>
                        <th>Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leagueTable.map((row) => (
                        <tr key={row.team} className={row.team === "Thunder Dragon FC" ? "table-warning" : ""}>
                          <td>{row.pos}</td>
                          <td>{row.team}</td>
                          <td>{row.played}</td>
                          <td>{row.gd}</td>
                          <td className="fw-bold">{row.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Photos Section */}
      <section className="page-section pt-0">
        <Container>
          <h2 className="section-title text-center">Matchday Gallery</h2>
          <Row className="justify-content-center">
            {[TeamPhoto1, TeamPhoto2, TeamPhoto3, TeamPhoto4].map((photo, index) => (
              <Col md={6} lg={3} key={photo} className="mb-4">
                <Card className="brand-card h-100">
                  <Card.Img
                    variant="top"
                    src={photo}
                    alt={`Thunder Dragon FC Team Photo ${index + 1}`}
                    className="team-photo"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="page-section pt-0">
        <Container>
          <Card className="page-hero-card">
            <Card.Body className="p-5">
              <Row>
                <Col md={7}>
                  <h2 className="mb-3 fw-bold">Partner With Thunder Dragon FC</h2>
                  <p className="lead mb-0">
                    Join us as a sponsor, supporter, or volunteer and help us grow a stronger bhutanese football community in Melbourne.
                  </p>
                </Col>
                <Col md={5} className="d-flex align-items-center justify-content-md-end mt-4 mt-md-0">
                  <div>
                    <Button as={Link} to="/sponsorship" variant="warning" size="lg" className="me-3 fw-bold">
                      Become a Sponsor
                    </Button>
                    <Button as={Link} to="/contact" variant="outline-light" size="lg">
                      Contact Us
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </div>
  );
}

export default Home;
