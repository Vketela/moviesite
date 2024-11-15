import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import filmhero from '../../images/filmhero.jpg';
import loginIcon from '../../images/login-icon.png';
import { useNavigate } from 'react-router-dom';

const Login = ({ }) => {
  const [username, setUsername] = useState('userName');
  const [password, setPassword] = useState('passWord');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = async(event) => {
    event.preventDefault();
    console.log('User clicked the login icon')
    

    try {
      // API-aanroep naar de backend van NOVI
      const response = await fetch('https://novi.datavortex.nl/popcornmovieflix/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key':'popcornmovieflix:2rMriPBJ7MV5I6hlegSt'
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.token) {
          localStorage.setItem('token', data.token); // Bewaar token lokaal
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

    <div className="Login" style={{ backgroundImage: `url(${filmhero})` }}>
      <h1>Welcome to Popcorn!</h1>

      <img
        src={loginIcon}
        alt="Login Icon"
        className="login-icon"
        onClick={handleLoginClick}
        style={{ cursor: 'pointer' }} />
    </div>

  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

Login.defaultProps = {};

export default Login;
