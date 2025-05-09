import React from "react";
import AppStoreLogo from "../assets/app-store-badge.svg";
import PlayStoreLogo from "../assets/play-store-badge.png";
import "./Styles/DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="download-app-section">
      <h2 className="download-app-heading">Download Our App</h2>
      <p className="download-app-text">
        Plan your trips effortlessly with our mobile app. Available on the App Store & Play Store now.
      </p>
      <div className="download-app-buttons">
        <a
          href="https://apps.apple.com/in/app/knowyourtrips/id6742848169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AppStoreLogo} alt="Download on the App Store" className="store-logo" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.KnowYourTrips.kyt_fe_new&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={PlayStoreLogo} alt="Download on the App Store" className="store-logo" />
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;