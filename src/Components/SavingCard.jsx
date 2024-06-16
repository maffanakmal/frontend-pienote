import React from 'react';
import { Card, ProgressBar, Image } from 'react-bootstrap';

const SavingsCard = ({ title, amount, progress, date, isFavorite, friends }) => {
  return (
    <Card style={{ backgroundColor: '#d1e7ff', marginBottom: '20px', borderRadius: '10px' }}>
      <Card.Body>
        <Card.Title>
          {title} {isFavorite && <span>⭐</span>}
        </Card.Title>
        <Card.Text>
          Rp {amount.toLocaleString()}
        </Card.Text>
        <ProgressBar now={progress} label={`${progress}%`} />
        <Card.Text>
          {date}
        </Card.Text>
        {friends && (
          <div className="mt-2">
            {friends.map((friend, index) => (
              <Image key={index} src={friend} roundedCircle width={30} height={30} className="mr-2" />
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default SavingsCard;
