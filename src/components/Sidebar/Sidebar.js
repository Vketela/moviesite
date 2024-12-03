import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = ({ onSearch, onFilterGenre }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); 
    onSearch(event.target.value); 
  };
  
  const handleGenreFilter = (genre) => {
    onFilterGenre(genre); 
  };

  return (
    <div className="Sidebar-container">
      <nav className="sidebar">
        <ul className="sidebar-main-menu">

          <li><Link to="/landing">Home</Link></li>
          <li><Link to="/landing/search">Search</Link></li>
          <li><Link to="/landing/mylist">My list</Link></li>
          <li><Link to="/landing/mostpopulair">Most Populair</Link></li>
        </ul>
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
