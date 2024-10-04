import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import popcorn from '../../images/popcorn.jpg';

const Header = () => {
  return (
    <div className="header">
    <img src={popcorn} alt="Logo" />
  </div>
  
  
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
