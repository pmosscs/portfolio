import React from "react";
import "./Now.css";

function Now() {
  return (
    <div className="now">
      <div className="updated">
        <p id="now-p">Updated: Feb 22, 2023</p>
      </div>
      <h4 className="now-title">What I am doing now:</h4>
      <div className="now-section">
        <h4>Work:</h4>
        <p id="now-p">
          I've had an incredible experience so far applying for jobs, and am
          excited for my upcoming interviews and meetings. Also currently
          building a few landing pages for some local businesses and friends and
          family.
        </p>
      </div>
      <div className="now-section">
        <h4>Family:</h4>
        <p id="now-p">
          Our twins are 8 months now and moving around like crazy. Beautiful as
          ever, and babbling all day - it is heaven being with them eveyday.
        </p>
      </div>
      <div className="now-section">
        <h4>Me:</h4>
        <p id="now-p">
          Learning to make sushi, running more, and getting into biking to
          prepare for RAGBRAI this summer.
        </p>
      </div>
    </div>
  );
}

export default Now;
