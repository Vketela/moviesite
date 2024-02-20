import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({title}) => (
    <div className="card">
        <div className="card-image">
            <img src={require("../../images/image1.jpg")} alt="image1"/>

        </div>
        <div className="card-text">
            <div className="header">
                <h2>{title}</h2>
                <div className="meta-info">
                    <p>9.5/10</p>
                    <p>Gengre: RomCom, comedy, feel-good</p>
                </div>
            </div>
            <div className="description">
                <p>Plot: After a first date ends badly, that they hate each other.
                    The pair are soon forced to get along, however, at the wedding of Bea’s sister and Ben’s best
                    friend.
                    In order to keep up appearances — and make their exes jealous — they pretend to be in a
                    relationship.
                    that us — they pretend to be in a relationship.</p>
            </div>
        </div>
    </div>
);

MovieCard.propTypes = {};

MovieCard.defaultProps = {};

export default MovieCard;
