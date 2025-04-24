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
          <div className="app-store-and-product-hunt-container">
            <div className="app-store-logo-container">
              <a
                href="https://apps.apple.com/in/app/knowyourtrips/id6742848169"
                target="_blank"
                rel="noopener noreferrer"            >
                <img src={AppStoreLogo} alt="Download on the App Store" className="app-store-logo" />
              </a>
            </div>
            <div className="product-hunt-badge-container">
              <a href="https://www.producthunt.com/posts/knowyourtrips?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-knowyourtrips"
                target="_blank"
                rel="noopener noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=956968&theme=dark&t=1745506618137" alt="KnowYourTrips - Your&#0032;Personal&#0032;Travel&#0032;Assistant&#0032; | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54"
                className="product-hunt-badge" />
              </a>
            </div>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div >
  );
};

export default Home;