import React from 'react';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Work from './components/Work';
import PreLoader from './components/PreLoader';
import Privacy from './components/Privacy';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Itinerary from "./assets/Itinerary.png";
import Explore from "./assets/Explore.png";
import Social from "./assets/Social.png";
import Blog from "./assets/Blog.png";

const IMAGES = [Itinerary, Explore, Social, Blog];

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      {location.pathname !== "/privacy" && <PreLoader />}
      <Routes>
        <Route path="/" element={
          <>
            <div id='home'>
              <Home />
            </div>
            <div id='about'>
              <About />
            </div>
            <div id='work'>
              <Work imageUrls={IMAGES} />
            </div>
            <div id='contact'>
              <Contact />
            </div>
          </>
        } />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}