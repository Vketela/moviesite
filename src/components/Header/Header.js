import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Banner from '../Banner/Banner';
import popcornbeker from '../../images/popcornbeker.png';


const Header = () => {
  return (
    <div className="header">
    <h1>POPCORN</h1>
      <img src={popcornbeker} alt="Popcorn Beker" />
      <div className="column-wrapper">
        <form action="/search" method="get" className="search-form">
          <input
            type="text"
            name="query"
            placeholder="Zoek een film..."
            required
            className="search-input"
          />
          <button type="submit" className="search-button">Zoeken</button>
        </form>
      </div>
      <Banner /> {/* Zorg ervoor dat de Banner ook wordt weergegeven */}
    </div>
    
  
  );
};


Header.propTypes = {};

Header.defaultProps = {};

export default Header;