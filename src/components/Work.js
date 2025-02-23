import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "../index.css";

const Work = ({ imageUrls }) => {

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [imageUrls.length]);

  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Use Cases</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Know Your Trips manages your travel experiences from start to finish.
        </p>
      </div>
      <div style={{ width: "100%", height: "100%", maxWidth: "1200px", margin: "0 auto", position: "relative", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
          {
            imageUrls.map(url => (
              <img
                key={url}
                src={url}
                className="work-section-image"
                alt=""
                style={{ translate: `${-100 * imageIndex}%` }} />
            ))
          }
        </div>
        <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}><ArrowBigLeft /></button>
        <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}><ArrowBigRight /></button>
        <div style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: "0.25rem",
        }}>
          {imageUrls.map((_, index) => (
            <button key={index} className="img-slider-dot-btn" onClick={() => setImageIndex(index)}>
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;