import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../pages/card-page";
import HomePage from "../pages/home-page";
import "./app.css";

const App = () => {
  return  <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/card-page" element={<CardPage />} />
      </Routes>
    </div>
  
};

export default App;
