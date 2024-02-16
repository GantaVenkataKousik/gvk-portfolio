// Project.js
import React from 'react';

const FeedBackC = ({ fb }) => {
  const { email,feedback } = fb;

  return (
    <div rel="noopener noreferrer" style={{ color: '#fff' }}>
      <div className="project project-1">
 
        <div className="info">
          <div className="title">
            <span>
              {email} <span><i className="fa-solid fa-arrow-up arrow"></i></span>
            </span>
          </div>
          <div className="content" style={{ fontSize: '0.9rem' }}>
            {feedback}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackC;
