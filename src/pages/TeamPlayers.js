import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PlayerCard from '../components/PlayerCard';
import { players } from '../data/players';

function TeamPlayers() {
  const groupedByPosition = players.reduce((acc, player) => {
    const key = player.position;
    if (!acc[key]) acc[key] = [];
    acc[key].push(player);
    return acc;
  }, {});

  return (
    <div className="min-vh-content">
      <section className="page-section team-section">
        <Container>
          <h1 className="section-title text-center">First Team Squad</h1>
          <p className="section-subtitle">
            Meet the current Thunder Dragon FC squad. Every player contributes to our identity, intensity, and matchday discipline.
          </p>
          <Row className="g-3 mb-4">
            {Object.entries(groupedByPosition).map(([position, squad]) => (
              <Col md={4} key={position}>
                <Card className="brand-card text-center h-100">
                  <Card.Body>
                    <Card.Title className="h6 text-uppercase">{position}</Card.Title>
                    <div className="stat-value">{squad.length}</div>
                    <Card.Text className="small text-muted mb-0">Players in this role</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            {players.map(player => (
              <div key={player.id} className="col-md-4 col-sm-6 mb-4">
                <PlayerCard player={player} />
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default TeamPlayers;
