import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { matches } from '../data/matches';
import ThunderDragonLogo from '../Images/ThunderDragonFC.jpg';

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

  return (
    <div className="min-vh-content">
      <section className="page-section">
        <Container>
          <h1 className="section-title">Matches</h1>

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
                            <span className="status-badge">FT</span>
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
                              <span className="match-score">{match.score}</span>
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
                              <span className={`result-badge ${match.result === 'Win' ? 'win' : match.result === 'Draw' ? 'draw' : 'loss'}`}>
                                {match.result}
                              </span>
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
