import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PlayerCard from '../components/PlayerCard';
import { players } from '../data/players';

function TeamPlayers() {
  return (
    <div className="min-vh-content">
      <section className="page-section">
        <Container>
          <h1 className="section-title">Our Team</h1>
          <p className="text-center text-muted mb-5">
            Meet the talented players who make Thunder Dragon FC great
          </p>
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
