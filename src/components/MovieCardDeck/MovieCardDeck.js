import React from 'react';
import PropTypes from 'prop-types';
import './MovieCardDeck.css';
import MovieCard from "../MovieCard/MovieCard";

const MovieCardDeck = () => (
  <div className="MovieCardDeck">
    <MovieCard title={"Anyone but you"} description={"lorem ipsum"}rating={"9/10"} genre={"aktie"}></MovieCard>
      <MovieCard title={"Aquaman"} rating={"8/10"} genre={"aktie"}></MovieCard>
    <MovieCard title={"frozen"} rating={"8/10"} genre={"aktie"}></MovieCard>
  </div>
);

MovieCardDeck.propTypes = {};

MovieCardDeck.defaultProps = {};

export default MovieCardDeck;
