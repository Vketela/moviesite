import React from 'react';
import PropTypes from 'prop-types';
import './MovieCardDeck.css';
import MovieCard from "../MovieCard/MovieCard";

const MovieCardDeck = () => (
  <div className="MovieCardDeck">
      <MovieCard title={"Anyone but you"} rating={"9/10"}></MovieCard>
      <MovieCard title={"Aquaman"}></MovieCard>
      <MovieCard title={"frozen"}></MovieCard>
  </div>
);

MovieCardDeck.propTypes = {};

MovieCardDeck.defaultProps = {};

export default MovieCardDeck;
