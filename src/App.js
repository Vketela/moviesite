import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import Search from './components/search/search';
import MostPopulair from './components/MostPopulair/MostPopulair';
import Signup from './pages/Signup/Signup';
import Mylist from './pages/Mylist/Mylist';

function App() {
  const [isAuthenticated, setIsAuthentcated] = useState(false);

  const handelLogin = () => {
    setIsAuthentcated(true);
    localStorage.setItem("authToken", "testToken");
    return (
      <div><Login />
      </div>
    )
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
        <Route path="/Signup" element={<Signup />} />

        <Route path="/landing" element={<Landing />}  >
          <Route path="search" element={<Search />} />

          <Route path="mostpopulair" element={<MostPopulair />} />
          <Route path="" element={<MostPopulair />} />

          <Route path="mylist" element={<Mylist />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
