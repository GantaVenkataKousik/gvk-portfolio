// ScrollDown.jsx
import React from 'react';
import { Link } from 'react-scroll';
import Contact from '../Contact/Contact';

const ScrollDown = () => {
  const styling = {
    cursor: 'pointer',
    fontSize:'1.4rem'
    // Set cursor to pointer
  };
  return (
    <div className="home__scroll">
      <Link to="contact" smooth={true} duration={500} className="home__scroll-button button--flex" style={styling}>
        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </Link>
    </div>
  );
};

export default ScrollDown;
