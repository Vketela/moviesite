import React, { useState } from 'react';
import './Header.css';
import popcornbeker from '../../images/popcornbeker.png';
import filmhero from '../../images/filmhero.jpg';
import getData from '../../api/client';

const Header = () => {
  const [search, setSearch] = useState("")

  async function loadMovies() {
    const data = await getData("/search/movie?query=" + search + "&");
  }

  return (
    <div style={{ backgroundImage: `url(${filmhero})` }} className="header">
      <h1 className='filmhero'>POPCORN</h1>
      <h2>Select and watch your favorite movies!</h2>

      <img src={popcornbeker} alt="Popcorn Beker" />
      <div className="column-wrapper">
        <form action="javascript:void(0)" onSubmit={loadMovies} method="get" className="search-form">
        </form>
      </div>
    </div>


  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;