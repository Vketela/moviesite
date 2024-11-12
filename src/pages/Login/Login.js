import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import filmhero from '../../images/filmhero.jpg';
import loginIcon from '../../images/login-icon.png';
import { useNavigate} from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleLoginClick = (event) => {
    event.preventDefault();
    console.log('User clicked the login icon')
    navigate("/landing");
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
