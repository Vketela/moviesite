import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/my-list">My list</Link></li>
        </ul>
        <hr />
      </nav>
    </div>
  );
};


Sidebar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilterGenre: PropTypes.func.isRequired,
};

// DefaultProps definitie
Sidebar.defaultProps = {
  onSearch: () => { },       // Standaard: lege functie
  onFilterGenre: () => { },  // Standaard: lege functie
};

// Export de component
export default Sidebar;
