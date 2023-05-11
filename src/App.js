import React from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import NotFound from "./pages/NotFound.js";
import Navbar from "./components/Header.js";
import MoviePage from "./pages/MoviePage.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<MoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
