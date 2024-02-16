import React from 'react';

const ScrollUpButton = () => {
  const handleScrollUp = () => {
    // Implement logic to scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <a href="#" className="scrollup" id="scroll-up" onClick={handleScrollUp}>
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  );
};

export default ScrollUpButton;