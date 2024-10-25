import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MostPopulair.css';
import getData from '../../api/client';

const searchMovies = (query) => {
  console.log('zoek naar: ${query}');
};

const filterMoviesByDecade = (decade) => {
  console.log('Filteren op decenium: ${decade}');
};

const MostPopulair = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function loadMovies() {
      const data = await getData("/movie/popular");
      setMovies(data.results); 
    }
    loadMovies() 
  })



  return <div className="MostPopulair">
    <hi>Populaire films</hi>
    <div className='movie-grid'>
    </div>
  </div>
}

MostPopulair.propTypes = {};

MostPopulair.defaultProps = {};

export default MostPopulair;
