import React from 'react';
import MovieCardDeck from "../../components/MovieCardDeck/MovieCardDeck";
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import MostPopulair from '../../components/MostPopulair/MostPopulair';
import './Landing.css';
import Header from '../../components/Header/Header';

function Landing() {
  return ( 
  <div
    className="container-column"
  >
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
};
  

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
