import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ onSearch, onFilterDecade }) => {
const [searchTerm, setSearchTerm] = useState('');

  // Functie om de zoekterm bij te werlken terwij de gebruiker typt
  const handelSearch = (event) => {
    setSearchTerm(event.target.value); //update search term in state
    onSearch(event.target.value) // roep de functie aan om te zoeken in
  };


  // Functie om te filteren op decenium
  const handleDecadeFilter = (decade) => {
    onFilterDecade(decade); //roept de functie aan om films te filteren in 
  }

  return (
  <div className="Sidebar box">
    
  

      <h2>zoek Genre</h2>
      <div className="decade-filters">
        <button onClick={() => handleDecadeFilter('1960')}>Action</button>
        <button onClick={() => handleDecadeFilter('1970')}>Adventure</button>
        <button onClick={() => handleDecadeFilter('1980')}>Animation</button>
        <button onClick={() => handleDecadeFilter('1990')}>Biography</button>
        <button onClick={() => handleDecadeFilter('1990')}>Comedy</button>
        <button onClick={() => handleDecadeFilter('1990')}>Crime</button>
        <button onClick={() => handleDecadeFilter('1990')}>Drama</button>
      </div>
      </div>
    ); 
  };

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;