import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from '../../images/Logo.jpg';

const Header = () => {
  return (
    <div className="header">
    <img src={Logo} alt="Logo" />
  </div>
  
  
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
