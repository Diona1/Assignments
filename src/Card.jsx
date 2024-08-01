import React from 'react';
import './Card.css';

const Card = ({ title, description, logoSrc }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="logo">
          <img src={logoSrc} alt="Logo" />
        </div>
        <div className="card-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


