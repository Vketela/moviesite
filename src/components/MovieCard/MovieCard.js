import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { HiOutlinePlus } from "react-icons/hi";

const MovieCard = ({ rating, genre, imageUrl, id }) => {
    const addToFavorites = () => {

        const favoritesString = localStorage.getItem("favorites") || "[]"
        const favorites = JSON.parse(favoritesString) 
        favorites.push(id)
        const uniqueFavourites = [...new Set(favorites)];
        localStorage.setItem("favorites", JSON.stringify(uniqueFavourites))

    }
    return (

        <div className="movie-wrapper">
            <div className="card">
                <div onClick={addToFavorites} className='card-fav'><HiOutlinePlus /></div>
                <div className="card-image">
                    <img src={("https://image.tmdb.org/t/p/w500" + imageUrl)} alt="video" />

                </div>
                <div className="card-text">
                    <div className="header">

                        <div className="meta-info">
                            <p>{rating}</p>
                            <p>{genre}</p>
                        </div>
                    </div>
                    <div className="description">
                    </div>
                    <div className="rating">

                    </div>
                </div>
            </div>
        </div>

    );
}
MovieCard.propTypes = {};

MovieCard.defaultProps = {};

export default MovieCard;
