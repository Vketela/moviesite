import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './search.css';
import MovieCardDeck from "../../components/MovieCardDeck/MovieCardDeck";
import getData from '../../api/client';

const Search = ({ apiKey }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedgenre, setSelecteGenre] = useState(null);

  

  const handleSearch = async (e) => {
    e.preventDefault(); // Zorgt ervoor dat het formulier niet opnieuw laadt.
    if (query.trim() === '') return;

    const data = await getData("/search/movie?query=" + query + "&");
    setMovies(data.results || []);
  };
 

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieCardDeck moviesArray={movies}></MovieCardDeck>
    </div>
  );
};

Search.propTypes = {
  apiKey: PropTypes.string.isRequired,
};


export default Search;
