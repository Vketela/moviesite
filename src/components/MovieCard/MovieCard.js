import React, { useEffect, useState } from 'react';
import './MovieCard.css';
import { HiOutlinePlus } from "react-icons/hi";
import { FcRating } from "react-icons/fc";
import { HiOutlineMinusCircle } from "react-icons/hi";


const MovieCard = ({ rating, genre, imageUrl, id }) => {
    const [inFavorites, setInFavorites] = useState(false);

    const addToFavorites = () => {
        const favoritesString = localStorage.getItem("favorites") || "[]"
        const favorites = JSON.parse(favoritesString)
        favorites.push(id)
        const uniqueFavourites = [...new Set(favorites)];
        localStorage.setItem("favorites", JSON.stringify(uniqueFavourites))
        window.dispatchEvent( new Event("favorites"))
    }

    const removeFromFavorites = () => {
        const favoritesString = localStorage.getItem("favorites") || "[]"
        const favorites = JSON.parse(favoritesString)
        const filterFavorites = favorites.filter((_id) => _id !== id)

        const uniqueFavourites = [...new Set(filterFavorites)];
        localStorage.setItem("favorites", JSON.stringify(uniqueFavourites))
        window.dispatchEvent(new Event("favorites"))
    }

    
    const isInFavorites = () => {
        const favoritesString = localStorage.getItem("favorites") || "[]"
        const favorites = JSON.parse(favoritesString)
        setInFavorites(favorites.includes(id))
    }
    useEffect(() => {

        isInFavorites()
        window.addEventListener("favorites", () => isInFavorites());
        

    }, [])
    return (

        <div className="movie-wrapper">
            <div className="card">
                {!inFavorites && <div onClick={addToFavorites} className='card-fav'><HiOutlinePlus /></div>}
                {inFavorites && <div onClick={removeFromFavorites} className='card-fav'><HiOutlineMinusCircle /></div>}
                <div className="card-image">
                    <img src={("https://image.tmdb.org/t/p/w500" + imageUrl)} alt="video" />

                </div>
                <div className="card-text">
                    <div className="header">

                        <div className="meta-info">
                            <FcRating />
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
