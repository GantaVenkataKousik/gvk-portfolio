import React from 'react';
import { Link } from 'react-scroll';
import NavButtons from './NavButtons.jsx';
import ProgressBar from './ProgressBar.jsx';
import './styles/Nav.css';

export default function Nav(){
  return (
    <>
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="home" smooth={true} duration={500} className="nav__logo">
          <span>GVK</span>
        </Link>
        <div data-aos="fade-in" className="nav__menu" id="nav-menu">
      <ul className="nav__list grid">
      <div>
      <ul className="nav__list grid">
        <li className="nav__items">
          <span className="nav__link">
            <i className="uil uil-estate nav__icon"></i> Subscribers
          </span>
        </li>
        <li className="nav__items">
          <span className="nav__link">
            <i className="uil uil-user nav__icon"></i> Ratings
          </span>
        </li>
        <li className="nav__items">
          <span className="nav__link">
            <i className="uil uil-user nav__icon"></i> Feedbacks
          </span>
        </li>
        </ul>
    </div>
      </ul>
      <i className="uil uil-times nav__close" id="nav-close"></i>
    </div>

        <NavButtons />
      </nav>
    </header>
    <ProgressBar />
    </>

  );
};
