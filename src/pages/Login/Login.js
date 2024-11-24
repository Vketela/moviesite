import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import filmhero from '../../images/filmhero.jpg';
import UserIcon from '../../images/User-icon.png';
import { useNavigate } from 'react-router-dom';
import passwordIcon from '../../images/password-icon.png'
import SignupIcon from '../../images/signup-icon.png';


const Login = ({ }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //toegevoegd//
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/Signup')
  };


  const handleLoginClick = async (event) => {
    event.preventDefault();
    console.log('User clicked the login icon')

    try {
      // API-aanroep naar de backend van NOVI
      const response = await fetch('https://api.datavortex.nl/popcornmovieflix/users/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'popcornmovieflix:2rMriPBJ7MV5I6hlegSt'
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.jwt) {
          localStorage.setItem('token', data.jwt); // Bewaar token lokaal
          navigate('/landing'); // Navigeer naar de landing-pagina
        } else {
          setError('Login failed. Please try again.');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please check your network and try again.');
    }
  };


  return (
    <div className="Login" style={{ backgroundImage: `url(${filmhero})` }} >
      <h1>Welcome to Popcorn!</h1>


      <div className="input-container">
        <img
          src={UserIcon}
          alt="username"
          className="username"
          style={{ cursor: 'pointer' }} />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>


      <div className="input-container">
        <img
          src={passwordIcon}
          alt="Password"
          className="password"
          style={{ cursor: 'pointer' }} />
        <input
          type="text"
          placeholder="pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="signup-section">
        <p>Don't have an account? Click the button to Sign up!</p>
      </div>

      <div className="signup-container">
        <img
          src={SignupIcon}
          alt="sign up"
          className="signup-icon"
          onClick={handleSignupClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}



Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

Login.defaultProps = {};

export default Login;
