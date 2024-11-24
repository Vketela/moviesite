import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';


const Sidebar = ({ onSearch, onFilterGenre }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Functie om de zoekterm bij te werken terwijl de gebruiker typt
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); //update search term in state
    onSearch(event.target.value); // roep de functie aan om te zoeken in
  };
  // Functie om te filteren op genre
  const handleGenreFilter = (genre) => {
    onFilterGenre(genre); //roept de functie aan om films te filteren in 
  };

  return (
    <div className="Sidebar-container">
      <nav className="sidebar">
        <ul className="sidebar-main-menu">
          <li><a href="/">Home</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#series">Series</a></li>
          <li><a href="#my-list">My list</a></li>
        </ul>
        <hr />
      </nav>
      </div>
  );
};
      
      
Sidebar.propTypes = {
  onSearch: PropTypes.func.isRequired,      // `onSearch` is verplicht en moet een functie zijn
  onFilterGenre: PropTypes.func.isRequired, // `onFilterGenre` is verplicht en moet een functie zijn
};

// DefaultProps definitie
Sidebar.defaultProps = {
  onSearch: () => { },       // Standaard: lege functie
  onFilterGenre: () => { },  // Standaard: lege functie
};

// Export de component
export default Sidebar;
