import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import BookMySeat from "./Pages/BookMySeat";
import SignIn from "./Pages/Signin";
import { LandingPage } from "./Pages/LandingPage";


const App = () => {
  return (
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking" element={<BookMySeat />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>)
  };

export default App;
