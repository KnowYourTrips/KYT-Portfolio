import './index.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import PreLoader from './components/PreLoader';

import Itinerary from "./assets/Itinerary.png";
import Explore from "./assets/Explore.png";
import Social from "./assets/Social.png";
import Blog from "./assets/Blog.png";

const IMAGES = [Itinerary, Explore, Social, Blog];

function App() {
  return (
    <>
      <PreLoader />

      <div className="App">
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
      <div id='footer'>
        <Footer />
      </div>
    </div>
    </>
    
  )
}

export default App
