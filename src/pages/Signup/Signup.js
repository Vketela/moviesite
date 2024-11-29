import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Signup.css';
import filmhero from '../../images/filmhero.jpg';
import { useNavigate } from 'react-router-dom';

const Signup = ({ }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSignupSucces = () => {
    navigate('/')
  };
  const SignupCredentials = {
    username: username,
    email: email,
    password: password,
    info: '',
    authorities: [
      {
        authority: "USER"
      }]
  }

  const handleSignupClick = async (event) => {
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
        body: JSON.stringify(SignupCredentials),
      });

      if (response.ok) {
        const data = await response.json();
        alert("sign up succeful")
        handleSignupSucces();

      } else {
        const errorData = await response.text();
        setError(errorData.message || 'Invalid credentials');
        alert("sign up not succesful " + errorData)
      }

    } catch (err) {
      setError('An error occurred. Please check your network and try again.');
    }
  };

  return (
    <div className="Signup" style={{ backgroundImage: `url(${filmhero})` }} >
      <h1 className="signup-h1">Create Account</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignupClick} className="signup-button">Sign Up</button>
    </div>

  );
}

Signup.propTypes = {
  onsignup: PropTypes.func.isRequired,
};

Signup.defaultProps = {};

export default Signup;
