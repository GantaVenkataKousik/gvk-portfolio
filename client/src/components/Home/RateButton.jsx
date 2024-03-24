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
        <span className="rate-this" >
          Rate this{' '}        <i className="fa-regular fa-star" style={{ color: '#5779d7' }}></i>
        </span>

      </div>

      {showRatePopup && <RatePopup onClose={ratePopAfterClick} />}
    </div>
  );
};

export default RateButton;
