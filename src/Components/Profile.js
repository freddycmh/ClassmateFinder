import React from 'react';
import '../Style/Profile.css';

const defaultImageUrl = 'https://picsum.photos/100?grayscale';

const Profile = ({ name, isHighlighted }) => {
  return (
    <div className={`profile ${isHighlighted ? 'highlighted' : ''}`}>
      <img src={defaultImageUrl} alt={`${name}'s profile`} />
      <p>{name}</p>
    </div>
  );
};

export default Profile;