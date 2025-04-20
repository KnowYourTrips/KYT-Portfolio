import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import AppStoreLogo from "../assets/app-store-badge.svg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Stress-free Travel, One App Away
          </h1>
          <p className="primary-text">
            Leave the hassle of organzing your trip to our app. Sit back, relax and enjoy your journey ahead.
          </p>
          <div className="app-store-logo-container">
            <a
              href="https://apps.apple.com/in/app/knowyourtrips/id6742848169" // Replace with your App Store link
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AppStoreLogo} alt="Download on the App Store" className="app-store-logo" />
            </a>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;