import React from 'react';
import PropTypes from 'prop-types';
import './MovieCardDeck.css';
import MovieCard from "../MovieCard/MovieCard";

const moviesArray = [
  {
    title: "coming soon",
    description: "lorem ipsum",
    rating: "9/10",
    genre: "aktie",
  },

  {
    title: "coming soon",
    description: "lorem ipsum",
    rating: "9/10",
    genre: "aktie",
  },
  {
    title: "coming soon",
    description: "lorem ipsum",
    rating: "9/10",
    genre: "aktie",
  },
  {
    title: "coming soon",
    description: "lorem ipsum",
    rating: "9/10",
    genre: "aktie",
  },
]

const MovieCardDeck = () => (
  <div className="MovieCardDeck">
    {moviesArray.map((movie) => (<MovieCard title={movie.title} genre={movie.genre} rating={movie.rating} description={movie.description}></MovieCard>))}      
    

  </div>
);

MovieCardDeck.propTypes = {};

MovieCardDeck.defaultProps = {};

export default MovieCardDeck;
