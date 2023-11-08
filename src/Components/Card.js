import React from 'react';
import { Link } from 'react-router-dom';

const cardStyle = {
  width: '200px', // Set the desired width for the cards
  height: '300px', // Set the fixed height for the cards
  border: '1px solid #ddd', // Add a border for clarity
  display: 'inline-block', // Prevent cards from stacking vertically
  margin: '10px', // Add some margin for spacing
  textAlign: 'center', // Center align the content
  overflow: 'hidden', // Hide any content that exceeds the fixed height
};

const imgStyle = {
  width: '100%',
  height: '80%', // Adjusted to fill 80% of the card's height
  objectFit: 'cover', // Ensure the image covers the entire space
};

function Card({ name, img }) {
  return (
    <Link to={`/${name.toLowerCase()}`}> {/* This defines the route */}
      <div style={cardStyle} className="card">
        <img src={img} alt={name} style={imgStyle} />
        <h4 style={{ marginBottom: 0 }}>{name}</h4>
      </div>
    </Link>
  );
}

export default Card;
