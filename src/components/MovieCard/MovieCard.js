import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ rating, genre, imageUrl}) => (
    <div className="movie-wrapper">
    <div className="card">
        <div className="card-image">
            <img src={("https://image.tmdb.org/t/p/w500" + imageUrl)} alt="video"/>

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

MovieCard.propTypes = {};

MovieCard.defaultProps = {};

export default MovieCard;
