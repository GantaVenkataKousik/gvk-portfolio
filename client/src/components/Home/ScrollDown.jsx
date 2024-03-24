// ScrollDown.jsx
import React from 'react';
import { Link } from 'react-scroll';
import Contact from '../Contact/Contact';

const ScrollDown = () => {
  const styling = {
    cursor: 'pointer',
    fontSize: '1.4rem'
    // Set cursor to pointer
  };
  return (
    <div className="home__scroll">
      <Link to="contact" smooth={true} duration={500} className="home__scroll-button button--flex" style={styling}>

        <span className="scroll-down">        <i className="uil uil-mouse-alt home__scroll-mouse"></i>Scroll Down        <i className="uil uil-arrow-down home__scroll-arrow"></i></span>

      </Link>
    </div>
  );
};

export default ScrollDown;
