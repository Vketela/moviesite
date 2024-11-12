import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';



function App() {
  const [isAuthenticated, setIsAuthentcated] = useState(false);

  const handelLogin = () => {
    setIsAuthentcated(true);
    localStorage.setItem("authToken", "testToken");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {

    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        
        <Route path="/landing" element={<Landing/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
