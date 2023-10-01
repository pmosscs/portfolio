import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-page">
      <div className="hero-container">
        <div className="hero-title">
          <p>Hello, I'm</p>
          <h2>Peyton Moss,</h2>
          <p>a software engineer</p>
        </div>
        <div className="hero-info">
          <p>
            I build and create applications that people love to use. I enjoy
            problem solving and learning new technologies and skills to
            implement into my projects. Feel free to check out my project demos
            or reach out to me via the links on my contact page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
