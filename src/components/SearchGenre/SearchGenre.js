import React from 'react';
import PropTypes from 'prop-types';
import './SearchGenre.css';

const SearchGenre = () => (
  
  <div className="SearchGenre">
    SearchGenre Component

    <ul className="genre-menu">
      <li><button onClick={() => handleGenreFilter('action')}>Action</button></li>
      <li><button onClick={() => handleGenreFilter('adventure')}>Adventure</button></li>
      <li><button onClick={() => handleGenreFilter('animation')}>Animation</button></li>
      <li><button onClick={() => handleGenreFilter('biography')}>Biography</button></li>
      <li><button onClick={() => handleGenreFilter('comedy')}>Comedy</button></li>
      <li><button onClick={() => handleGenreFilter('crime')}>Crime</button></li>
      <li><button onClick={() => handleGenreFilter('drama')}>Drama</button></li>
      <li><button onClick={() => handleGenreFilter('family')}>Family</button></li>
      <li><button onClick={() => handleGenreFilter('history')}>History</button></li>
      <li><button onClick={() => handleGenreFilter('horror')}>Horror</button></li>
      <li><button onClick={() => handleGenreFilter('romantic')}>Romantic</button></li>
      <li><button onClick={() => handleGenreFilter('scienceFiction')}>Science Fiction</button></li>
      <li><button onClick={() => handleGenreFilter('thriller')}>Thriller</button></li>
      <li><button onClick={() => handleGenreFilter('war')}>War</button></li>
      <li><button onClick={() => handleGenreFilter('western')}>Western</button></li>
    </ul>
  </div>
);

SearchGenre.propTypes = {};

SearchGenre.defaultProps = {};

export default SearchGenre;
