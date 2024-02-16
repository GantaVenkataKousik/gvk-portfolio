// RateButton.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import RatePopup from './RateP';

const RateButton = () => {
  const [showRatePopup, setShowRatePopup] = useState(false);

  const styling = {
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const handleRateButtonClick = () => {
    setShowRatePopup(true);
  };

  const ratePopAfterClick = () => {
    setShowRatePopup(false);
  };

  return (
    <div className="home__scroll">
      <div
        className="home__scroll-button button--flex"
        onClick={handleRateButtonClick}
      >
        <span className="home__scroll-name" style={styling}>
          Rate this{' '}
        </span>
        <i className="fa-regular fa-star" style={{ color: '#5779d7' }}></i>
      </div>

      {showRatePopup && <RatePopup onClose={ratePopAfterClick} />}
    </div>
  );
};

export default RateButton;
