import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const linkstyle = {
    textDecoration: "none",
    color: "black",
  };

  const [headerActive, setHeaderActive] = useState(false);

  const clickBurger = () => {
    setHeaderActive(!headerActive);
  };

  const linkClick = () => {
    setHeaderActive(false);
  };

  return (
    <div className="header">
      <Link onClick={linkClick} style={linkstyle} to="">
        <p>Peyton Moss</p>
      </Link>

      <nav>
        <div className={`navlinks ${headerActive ? "burger-active" : null}`}>
          <Link onClick={linkClick} style={linkstyle} to="">
            <p>Home</p>
          </Link>
          <div className={`header-bars`}></div>
          <Link onClick={linkClick} style={linkstyle} to="/contact">
            <p>Contact</p>
          </Link>
          <div className={`header-bars`}></div>
          <Link onClick={linkClick} style={linkstyle} to="/now">
            <p>Now</p>
          </Link>
        </div>
        <div
          className={`burger ${headerActive ? "burger-x" : null}`}
          onClick={clickBurger}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
