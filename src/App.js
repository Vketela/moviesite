import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCardDeck from "./components/MovieCardDeck/MovieCardDeck";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import backgroundImage from './images/gradient.jpg';
import getData from './api/client';
import MostPopulair from './components/MostPopulair/MostPopulair';

function App() {
    
  return (
    <div 
      className="container-column" 
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '100vh' 
      }} > 
        
        <Header></Header>
        <NavBar></NavBar>
        <Banner></Banner>
        
        
        <div className="container-row">
          <Sidebar 
        
          />

          <div className="body-area">
            <MovieCardDeck></MovieCardDeck>
            <MostPopulair></MostPopulair>
          </div>
        </div>
        <Footer></Footer>
      </div>
  );  
}

export default App;
