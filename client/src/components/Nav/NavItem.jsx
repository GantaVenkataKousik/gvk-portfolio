// NavItem.jsx
import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ to, icon, label }) => {
  const styling = {
    cursor: 'pointer', // Set cursor to pointer
  };
  return (
    <li className="nav__items">
      <Link to={to} smooth={true} duration={500} className="nav__link" style={styling}>
        <i className={`uil ${icon} nav__icon`}></i> {label}
      </Link>
    </li>
  );
};

export default NavItem;
