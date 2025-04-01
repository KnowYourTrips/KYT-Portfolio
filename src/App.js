import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Work from './components/Work';
import PreLoader from './components/PreLoader';
import Privacy from './components/Privacy';
import Partners from './components/Partners';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Itinerary from "./assets/Itinerary.png";
import Explore from "./assets/Explore.png";
import Social from "./assets/Social.png";
import Blog from "./assets/Blog.png";

const IMAGES = [Itinerary, Explore, Social, Blog];

function App() {
  const location = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show the scroll-to-top button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar />
      {location.pathname !== "/privacy" && location.pathname !== "/contact" && <PreLoader />}
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
            <div id='partners'>
              <Partners />
            </div>
            <div id='contact'>
              <Contact />
            </div>
          </>
        } />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
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