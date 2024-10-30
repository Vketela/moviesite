import React from 'react';
import PropTypes from 'prop-types';
import './MovieCardDeck.css';
import MovieCard from "../MovieCard/MovieCard";

const MovieCardDeck = ({moviesArray = []}) => (
  <div className="MovieCardDeck">
    {moviesArray.map((movie) => (<MovieCard key={movie.title} title={movie.title} genre={movie.genre} rating={movie.vote_average} description={movie.overview}></MovieCard>))}      
    

  </div>
);

MovieCardDeck.propTypes = {};

MovieCardDeck.defaultProps = {};

export default MovieCardDeck;
