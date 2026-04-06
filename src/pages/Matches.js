import React from 'react';
import { Container, Accordion, Row, Col, Card } from 'react-bootstrap';
import { matches } from '../data/matches';
import ThunderDragonLogo from '../Images/ThunderDragonFC.jpg';
import { leagueTable } from '../data/clubContent';

function Matches() {
  const allMatches = [...matches].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Group matches by league
  const matchesByLeague = allMatches.reduce((acc, match) => {
    const league = match.league || 'Other';
    if (!acc[league]) {
      acc[league] = [];
    }
    acc[league].push(match);
    return acc;
  }, {});

  // Define league order
  const leagueOrder = [
    'MCSA Silicon Stack Premier League 2026',
    'Championship Showdown 2025',
    '12th Interstate Bhutanese Interstate',
    'MCSA Silicon Stack Premier League 2025'
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCenterDisplay = (match) => {
    if (match.type === 'upcoming') return match.time;
    return match.score;
  };

  const getCenterLabel = (match) => {
    if (match.type === 'upcoming') return 'Time';
    return 'Score';
  };

  const getStatusBadge = (match) => {
    if (match.type === 'upcoming') return 'KO';
    return 'FT';
  };

  return (
    <div className="min-vh-content">
      <section className="page-section">
        <Container>
          <h1 className="section-title text-center">Fixtures & Results</h1>
          <p className="section-subtitle">
            Full schedule, results, and current form across league and tournament competitions.
          </p>

          <Row className="g-4 mb-4">
            <Col md={4}>
              <Card className="brand-card h-100">
                <Card.Body className="text-center">
                  <Card.Title className="h6 text-uppercase text-muted">Total Matches</Card.Title>
                  <div className="stat-value">{allMatches.length}</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="brand-card h-100">
                <Card.Body className="text-center">
                  <Card.Title className="h6 text-uppercase text-muted">Upcoming Fixtures</Card.Title>
                  <div className="stat-value">{allMatches.filter((m) => m.type === 'upcoming').length}</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="brand-card h-100">
                <Card.Body className="text-center">
                  <Card.Title className="h6 text-uppercase text-muted">Current League Position</Card.Title>
                  <div className="stat-value">#{leagueTable.find((row) => row.team === 'Thunder Dragon FC')?.pos || '-'}</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Accordion defaultActiveKey={leagueOrder[0]} className="matches-accordion">
            {leagueOrder.map((league, index) => {
              const leagueMatches = matchesByLeague[league] || [];
              if (leagueMatches.length === 0) return null;

              return (
                <Accordion.Item eventKey={league} key={league}>
                  <Accordion.Header>
                    <div className="d-flex align-items-center w-100">
                      <span className="me-2">⚽</span>
                      <span className="league-header">{league}</span>
                      <span className="ms-auto badge bg-secondary">{leagueMatches.length}</span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="matches-list">
                      {leagueMatches.map(match => (
                        <div key={match.id} className="match-item">
                          <div className="match-status">
                            <span className="status-badge">{getStatusBadge(match)}</span>
                          </div>
                          <div className="match-content">
                            <div className="match-teams">
                              <div className="team-container">
                                <img
                                  src={ThunderDragonLogo}
                                  alt="Thunder Dragon FC"
                                  className="team-logo"
                                />
                                <span className="team-name">Thunder Dragon FC</span>
                              </div>
                              <span className="match-score" data-label={getCenterLabel(match)}>
                                {getCenterDisplay(match)}
                              </span>
                              <div className="team-container">
                                {match.opponentLogo ? (
                                  <img
                                    src={match.opponentLogo}
                                    alt={match.opponent}
                                    className="team-logo"
                                  />
                                ) : (
                                  <div className="team-logo-placeholder"></div>
                                )}
                                <span className="team-name">{match.opponent}</span>
                              </div>
                            </div>
                            <div className="match-details">
                              <span className="match-date">{formatDate(match.date)}</span>
                              {match.type === 'past' && (
                                <span
                                  className={`result-badge ${match.result === 'Win' ? 'win' : match.result === 'Draw' ? 'draw' : 'loss'}`}
                                >
                                  {match.result}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </section>
    </div>
  );
}

export default Matches;
