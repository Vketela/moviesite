import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = () => (
  <div className="Navbar-container"> 
  <nav className="NavBar">
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="#movies">Movies</a></li>
      <li><a href="# Mijn kijklijst">Mijn kijklijst</a></li>
    </ul>
  </nav>
</div>
    
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
