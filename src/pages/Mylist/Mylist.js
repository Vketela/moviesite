import React, { useEffect, useState } from 'react';
import getData from '../../api/client';
import './Mylist.css';
import MovieCardDeck from '../../components/MovieCardDeck/MovieCardDeck';

const Mylist = () => {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const favoritesString = localStorage.getItem('favorites');
    const favoritesIds = JSON.parse(favoritesString || '[]')
    const favoriteMovies = favoritesIds.map(async (id) => await getData('/movie/' + id + '?'));
    const movies = await Promise.all(favoriteMovies)
    console.log(movies)
    setMovies(movies)

  }

  useEffect(() => {

    loadMovies()
    window.addEventListener("favorites", () => loadMovies())

  }, [])

  return <div className="MostPopulair">
    <h1>New and most Populair Movies</h1>
    <MovieCardDeck moviesArray={movies}></MovieCardDeck>

  </div>
}

Mylist.propTypes = {};

Mylist.defaultProps = {};

export default Mylist;
