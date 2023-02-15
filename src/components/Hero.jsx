import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-page">
      <div className="hero-container">
        <div className="hero-title">
          <p>Hello, I'm</p>
          <h2>Peyton Moss,</h2>
          <p>a full-stack web developer</p>
        </div>
        <div className="hero-info">
          <p>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure */}
            Thank you for visiting. <br /> I am a software engineer/developer
            with a love for building and creating. <br /> I enjoy problem
            solving and learning new technologies and skills to implement into
            my projects. <br /> Feel free to check out my project demos or reach
            out to me via the links on my contact page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
