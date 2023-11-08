import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{props.name}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
