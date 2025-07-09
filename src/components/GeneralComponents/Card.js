import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
