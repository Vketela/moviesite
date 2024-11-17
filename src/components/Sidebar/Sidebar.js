import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GenreSearch from '../search/GenreSearch';
import './Sidebar.css';

const Sidebar = ({ onSearch, onFilterGenre }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Functie om de zoekterm bij te werken terwijl de gebruiker typt
  const handelSearch = (event) => {
    setSearchTerm(event.target.value); //update search term in state
    onSearch(event.target.value) // roep de functie aan om te zoeken in
  };


  // Functie om te filteren op genre
  const handleGenreFilter = (genre) => {
    onFilterGenre(genre); //roept de functie aan om films te filteren in 
  }

  return (
    <div className="Sidebar box">

      <br></br>
      <br></br>
      <br></br>
      <h2>Search by genre</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="genre-filters">
        <button onClick={() => handleGenreFilter('action')}>Action</button>
        <button onClick={() => handleGenreFilter('adventure')}>Adventure</button>
        <button onClick={() => handleGenreFilter('animation')}>Animation</button>
        <button onClick={() => handleGenreFilter('Biography')}>Biography</button>
        <button onClick={() => handleGenreFilter('comedy')}>Comedy</button>
        <button onClick={() => handleGenreFilter('crime')}>Crime</button>
        <button onClick={() => handleGenreFilter('Drama')}>Drama</button>
        <button onClick={() => handleGenreFilter('family')}>Family</button>
        <button onClick={() => handleGenreFilter('history')}>History</button>
        <button onClick={() => handleGenreFilter('horror')}>Horror</button>
        <button onClick={() => handleGenreFilter('romantic')}>Romantic</button>
        <button onClick={() => handleGenreFilter('scienceFiction')}>Science Fiction</button>
        <button onClick={() => handleGenreFilter('thriller')}>Thriller</button>
        <button onClick={() => handleGenreFilter('war')}>War</button>
        <button onClick={() => handleGenreFilter('western')}>Western</button>

      </div>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;