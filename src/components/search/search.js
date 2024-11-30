import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './search.css';
import MovieCardDeck from "../../components/MovieCardDeck/MovieCardDeck";
import getData from '../../api/client';

const Search = ({ apiKey }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedgenre, setSelecteGenre] = useState('');

  const genres = [
    { name: 'Action', id: 28 },
    { name: 'Comedy', id: 35 },
    { name: 'Thriller', id: 53 },
    { name: 'Horror', id: 27 },
    { name: 'Romantic', id: 10749 },
    { name: 'Sci-Fi', id: 878 },
  ];

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (query.trim() === '') return;

    const data = await getData("/search/movie?query=" + query + "&");
    setMovies(data.results || []);
  };

  const handleGenreSelect = async (e) => {
    const genreId = e.target.value;
    setSelecteGenre(genreId);

    if (genreId) {
      const data = await getData(`/discover/movie?with_genres=${genreId}&`);
      setMovies(data.results || []);
    }
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
      <div className="genre-dropdown">
        <select value={selectedgenre} onChange={handleGenreSelect}>
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <MovieCardDeck moviesArray={movies}></MovieCardDeck>
    </div>
  );
};

Search.propTypes = {
  apiKey: PropTypes.string.isRequired,
};


export default Search;
