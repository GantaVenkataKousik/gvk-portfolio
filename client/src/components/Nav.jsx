import React from 'react';
import { Link } from 'react-scroll';
import NavItem from './Nav/NavItem.jsx';
import NavButtons from './Nav/NavButtons.jsx';
import ProgressBar from './Nav/ProgressBar.jsx';

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
        <NavItem to="home" icon="uil-estate" label="Home" />
        <NavItem to="about" icon="uil-user" label="About" />
        <NavItem to="skills" icon="uil-user" label="Skills" />
        <NavItem to="projects" icon="uil-briefcase-alt" label="Projects" />
        <NavItem to="achievements" icon="uil-briefcase-alt" label="Achievements" />
        <NavItem to="contact" icon="uil-message" label="Contact me" />

      </ul>
      
    </div>
    <NavButtons />
        
      </nav>
    </header>
    <ProgressBar />
    </>

  );
};
