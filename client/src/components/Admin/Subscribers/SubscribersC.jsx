// Achievement.js
import React from 'react';

const Achievement = ({ title, image, description }) => {
  return (
    <div className="complete-card">
      <div className="achievement-card">
        <div className="achievement-content">
          <div className="front">
            <img src={`/images/${image}`} />
          </div>
          <div className="back">
            <div className="content">{description}</div>
          </div>
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Achievement;
