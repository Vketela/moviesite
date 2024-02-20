import logo from './logo.svg';
import './App.css';
import MovieCard from "./components/MovieCard/MovieCard";
import MovieCardDeck from "./components/MovieCardDeck/MovieCardDeck";

function App() {
  return (
      <div className="container-column">
        <header>

          <h1>Your Logo</h1>
        </header>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="banner">
          <h2>Banner</h2>
        </div>


        <div className="container-row">
          <div className="sidebar box">
            <h2>Sidebar Box</h2>
          </div>

          <div className="body-area">
            <MovieCardDeck></MovieCardDeck>
          </div>
        </div>
      </div>
  );
}

export default App;
