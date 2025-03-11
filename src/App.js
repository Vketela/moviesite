import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Search from "./components/search/search";
import MostPopulair from "./components/MostPopulair/MostPopulair";
import Signup from "./pages/Signup/Signup";
import Mylist from "./pages/Mylist/Mylist";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const [setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // Voeg dit toe om authenticatie in te stellen als er een token is
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/landing" element={<Landing />}>
            <Route path="search" element={<Search />} />
            <Route path="mostpopulair" element={<MostPopulair />} />
            <Route path="mylist" element={<Mylist />} />
            <Route path="" element={<MostPopulair />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
