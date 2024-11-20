import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import filmhero from '../../images/filmhero.jpg';
import loginIcon from '../../images/login-icon.png';
import { useNavigate } from 'react-router-dom';
import emailIcon from '../../images/email.png'
import passwordIcon from '../../images/password.png'

const Login = ({ }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [error, setError] = useState('');
  //toegevoegd//
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const registerCredentials = {
    username: username,
    email: email,
    password: password,
    info: '',
    authorities: [
      {
        authority: "USER"
      }]
  }

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
        body: JSON.stringify({username, password}),
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

  const handleRegisterClick = async (event) => {
    event.preventDefault();
    console.log('User clicked the register icon')

    try {
      // API-aanroep naar de backend van NOVI
      const response = await fetch('https://api.datavortex.nl/popcornmovieflix/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'popcornmovieflix:2rMriPBJ7MV5I6hlegSt'
        },
        body: JSON.stringify(registerCredentials),
      });

      if (response.ok) {
        const data = await response.json();
        alert("sign up succeful")
      } else {
        alert("sign up not succesful")


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
      <img
        src={loginIcon}
        alt="Login Icon"
        className="login-icon"
        onClick={handleLoginClick}
        style={{ cursor: 'pointer' }} />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="pasword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <img
        src={loginIcon}
        alt="Login Icon"
        className="login-icon"
        onClick={handleRegisterClick}
        style={{ cursor: 'pointer' }} />
    </div>
  );
};


Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

Login.defaultProps = {};

export default Login;
