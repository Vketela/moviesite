import React from 'react';
import './App.css';
import MovieCardDeck from "./components/MovieCardDeck/MovieCardDeck";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="container-column">
        
        <Header></Header>
        <NavBar></NavBar>
        <Banner></Banner>
        
        
        <div className="container-row">
          <Sidebar></Sidebar>

          <div className="body-area">
            <MovieCardDeck></MovieCardDeck>
          </div>

        </div>
        <Footer></Footer>
      </div>
      
  );
}

export default App;
