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
    console.log("burger clicked");
    setHeaderActive(!headerActive);
  };

  return (
    <div className="header">
      <p>Peyton Moss</p>

      <nav>
        <div className={`navlinks ${headerActive ? "burger-active" : null}`}>
          <Link style={linkstyle} to="">
            <p>Home</p>
          </Link>
          <div className={`header-bars`}></div>
          <Link style={linkstyle} to="/contact">
            <p>Contact</p>
          </Link>
          <div className={`header-bars`}></div>
          <Link style={linkstyle} to="/now">
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
