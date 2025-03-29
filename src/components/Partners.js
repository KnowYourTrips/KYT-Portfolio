import React from "react";
import GooglePartner from "../assets/Google.png";
import ViatorPartner from "../assets/Viator.png";
import "./Styles/Partners.css";

const Partners = () => {
  return (
    <div id="partners" className="partners-container">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-logos">
        <img src={GooglePartner} alt="Partner 1" className="partner-logo" />
        <img src={ViatorPartner} alt="Partner 2" className="partner-logo" />
      </div>
    </div>
  );
};

export default Partners;