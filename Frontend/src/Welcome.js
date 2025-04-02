import React from "react";
import "./Welcome.css"; // Import the CSS file

const Welcome = ({ setActivePage }) => {
  return (
    <div className="welcome-container">
      <h1 className="animated-text">Welcome back to Messify</h1>
      <p className="sub-text">Your mess dining buddy</p>
      
    </div>
  );
};

export default Welcome;
