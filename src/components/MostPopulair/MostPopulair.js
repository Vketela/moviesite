import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MostPopulair.css';
import getData from '../../api/client';
import MovieCardDeck from '../MovieCardDeck/MovieCardDeck';

const searchMovies = (query) => {
  console.log('zoek naar: ${query}');
};

const filterMoviesByGenre = (genre) => {
  console.log('Filteren op genre: ${genre}');
};

const MostPopulair = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function loadMovies() {
      const data = await getData("/movie/popular?");
      setMovies(data.results); 
    }
    loadMovies() 

  },[])



  return <div className="MostPopulair">
    <h1>Populaire films</h1>
    <MovieCardDeck moviesArray={movies}></MovieCardDeck>
    <div className='movie-grid'>
    </div>
  </div>
}



MostPopulair.propTypes = {};

MostPopulair.defaultProps = {};

export default MostPopulair;
