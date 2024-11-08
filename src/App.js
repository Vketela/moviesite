import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';



function App() {

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
