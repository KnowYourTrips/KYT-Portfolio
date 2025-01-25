import React from "react";
import FlowDiagram from "../assets/KnowYourTrips-Flow.png";

const Work = () => {
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Use Cases</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Know Your Trips manages your travel experiences from start to finish.
        </p>
      </div>
      <div className="work-section-bottom">
        <img src={FlowDiagram} alt="" />
      </div>
    </div>
  );
};

export default Work;