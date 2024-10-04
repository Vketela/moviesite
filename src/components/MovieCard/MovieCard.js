import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({title, rating, genre, description}) => (
    <div className="card">
        <div className="card-image">
            <img src={require("../../images/image1.jpg")} alt="image1"/>

        </div>
        <div className="card-text">
            <div className="header">
                <h2>{title}</h2>
                <div className="meta-info">
                    <p>{rating}</p>
                    <p>{genre}</p>
                </div>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    </div>
);

MovieCard.propTypes = {};

MovieCard.defaultProps = {};

export default MovieCard;
