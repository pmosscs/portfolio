import React from "react";
import "./Now.css";

function Now() {
  return (
    <div className="now">
      <div className="updated">
        <p id="now-p">Updated: Sep 30, 2023</p>
      </div>
      <h4 className="now-title">What I am doing now:</h4>
      <div className="now-section">
        <h4>Work:</h4>
        <p id="now-p">
          I am currently working in a paid internship as a full-stack software
          engineer. My day to day is enhancing and debugging a large project
          built with Java and Angular.js. It has been the most incredible
          experience and I am learning so much everyday.
        </p>
      </div>
      <div className="now-section">
        <h4>Family:</h4>
        <p id="now-p">
          Time is flying and the twins are growing fast! Running around,
          breaking things, and the occassional snuggle. It's heaven.
        </p>
      </div>
      <div className="now-section">
        <h4>Me:</h4>
        <p id="now-p">
          I have been focusing most of my time outside of work and family
          studying and practicing to better my abilities in my internship, but I
          just started working on a few passion projects again which is nice. I
          also have been playing more racquetball and enjoying the college
          football season- including cooking new food for game day. The latest:
          meat stuffed pao de queijo (brazilian cheese bread).
        </p>
      </div>
    </div>
  );
}

export default Now;
