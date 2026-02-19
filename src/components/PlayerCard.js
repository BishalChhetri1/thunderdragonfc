import React from 'react';
import { Card } from 'react-bootstrap';

function PlayerCard({ player }) {
  return (
    <Card className="player-card">
      <Card.Img 
        variant="top" 
        src={player.image || 'https://via.placeholder.com/300x250?text=Player+Photo'} 
        className="player-image"
        alt={player.name}
      />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          #{player.number} - {player.position}
        </Card.Subtitle>
        {player.bio && (
          <Card.Text className="text-muted">
            {player.bio}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
