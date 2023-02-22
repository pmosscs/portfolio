import React from "react";
import "./ContactInfo.css";
import photo from "../assets/photo.jpg";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

function ContactInfo() {
  return (
    <div className="contact-page">
      <div className="photo">
        <img src={photo} alt="peyton" />
      </div>
      <div className="contact-info">
        <h4>Ways to reach me:</h4>
        <div>
          <h6 className="contact-list">
            <HiOutlineMail className="contact-icon" /> pmoss.cs@gmail.com
          </h6>
          <h6 className="contact-list">
            <HiOutlinePhone className="contact-icon" />
            (435) 250-4773
          </h6>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nostyle"
            href="https://www.linkedin.com/in/peyton-moss/"
          >
            <h6 className="contact-list">
              <BsLinkedin className="contact-icon" /> LinkedIn
            </h6>
          </a>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            className="nostyle"
            href="https://twitter.com/peytoncodes"
          >
            <h6 className="contact-list">
              <BsTwitter className="contact-icon" /> Twitter
            </h6>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
