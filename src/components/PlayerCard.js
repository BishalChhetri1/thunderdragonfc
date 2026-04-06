import React from 'react';
import { Card } from 'react-bootstrap';

function PlayerCard({ player }) {
  return (
    <Card className="player-card brand-card">
      <Card.Img
        variant="top"
        src={player.image || 'https://via.placeholder.com/300x250?text=Player+Photo'}
        className="player-image"
        alt={player.name}
      />
      <Card.Body className="text-center">
        <div className="d-flex justify-content-center mb-2">
          <span className="player-number-badge">{player.number}</span>
        </div>
        <Card.Title className="fw-bold mb-1">{player.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-uppercase small">
          {player.position}
        </Card.Subtitle>
        <Card.Text className="small text-muted mb-0">{player.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
