import React from "react";
import Logo from "../assets/logo.svg";
import CompanyName from "../assets/CompanyName.svg";
import { IoMail } from "react-icons/io5";

const Footer = () => {

  const handleEmailClick = () => {
    navigator.clipboard.writeText("business@knowyourtrips.com");
    alert("Email copied to clipboard");
  };


  return (
    <div className="footer-wrapper">
      <div className="footer-section-two">
        <div className="footer-logo-container">
          <img className="company-logo" src={CompanyName} alt="" />
          <img className="app-logo" src={Logo} alt="" />
        </div>
        <div className="footer-section-one">
          <div className="footer-icons">
            <IoMail onClick={handleEmailClick} />
          </div>
          <div className="footer-text" onClick={handleEmailClick}>
            business@knowyourtrips.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;