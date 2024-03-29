import React from "react";
import "./Projects.css";
import fitsnap from "../assets/fitsnap.png";
import omhf from "../assets/omhf.png";
import jrjob from "../assets/jrjob.png";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

function Projects() {
  return (
    <div className="project-wrapper">
      <div className="left-side">
        <div className="project">
          <h3>FitSnap</h3>
          <div>
            <img src={fitsnap} alt="fitsnap" />
          </div>
          <div className="icons">
            <a
              href="https://www.youtube.com/watch?v=OZAOSipTCvA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="grow" />
            </a>
            <a
              href="https://github.com/pmosscs/fitsnap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="grow" />
            </a>
          </div>
          <p className="p-title">
            A social media app that allows you to post your fitness milestones
            and graph your monthly averages.
          </p>
          <p className="p-para">
            This project was built in two weeks as a ground-up full-stack
            project to challenge my skills in React, Node.js, Express,
            PostgreSQL, and more. My favorite discoveries were my love for
            working with databases, and overcoming puzzling challenges in the
            user sign-in authentication feature.
          </p>
        </div>
        <div className="project">
          <h3>JrJobHunt.com</h3>
          <div>
            <img src={jrjob} alt="fitsnap" />
          </div>
          <div className="icons">
            <a href="/" target="_blank" rel="noopener noreferrer">
              {/* change these and make them unclickable */}
              <BiWorld className="grow" />
            </a>
            <a
              href="https://github.com/pmosscs/jrjobhunt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="grow" />
            </a>
          </div>
          <p className="p-title">
            An email marketing landing page for capturing emails.
          </p>
          <p className="p-para">
            This project was built to use the Send In Blue API to capture user
            emails and manage double-opt-in transactional emails for varifying
            users. Built with React on the front end, including form
            verification, and Nodejs on the server side to manage the SIB API
            calls.
          </p>
        </div>
      </div>
      <div className="middle-bar"></div>
      <div className="right-side">
        <div className="project omhf">
          <h3>Off Market House Finder</h3>
          <div>
            <img src={omhf} alt="omhf" />
          </div>
          <div className="icons">
            <a
              href="https://www.youtube.com/watch?v=4fJQs2EFKTU&t=2s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="grow" />
            </a>
            <a
              href="https://github.com/pmosscs/foundations_capstone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="grow" />
            </a>
          </div>
          <p className="p-title">
            A database that allows you to manage lists of real estate properties
            for marketing campaigns.
          </p>
          <p className="p-para">
            My first full stack project using Javascript, Node.js, Express, and
            PostgreSQL. Solidifying my abily to make servers, call enpoints, and
            use that data on the front-end was a big moment in my learning. My
            other big take-away was CSS flexbox - my best friend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
