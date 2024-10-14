import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
    
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
