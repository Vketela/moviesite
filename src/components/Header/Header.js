import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Banner from '../Banner/Banner';
import popcornbeker from '../../images/popcornbeker.png';
import filmhero from '../../images/filmhero.jpg';


const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${filmhero})` }} className="header">


      <h1 className='filmhero'>POPCORN</h1>
      <h2>Ontdek en kijk naar je favoriete films!</h2>


      <img src={popcornbeker} alt="Popcorn Beker" />
      <div className="column-wrapper">
        <form action="/search" method="get" className="search-form">
          <input
            type="text"
            name="query"
            placeholder="Zoeken naar een film"
            required
            className="search-input"
          />
          <button type="submit" className="search-button">search</button>
        </form>
      </div>
    </div>


  );
};


Header.propTypes = {};

Header.defaultProps = {};

export default Header;