import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-page">
      <div className="hero-container">
        <div className="hero-title">
          <p>Hello, I'm</p>
          <h2>Peyton Moss</h2>
          <p>a full-stack web developer</p>
        </div>
        <div className="hero-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
