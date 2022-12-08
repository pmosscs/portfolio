import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const linkstyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="header">
      <p>Peyton Moss</p>

      <nav>
        <Link style={linkstyle} to="">
          <p>Home</p>
        </Link>
        <div className="header-bars"></div>
        <Link style={linkstyle} to="/contact">
          <p>Contact</p>
        </Link>
        <div className="header-bars"></div>
        <Link style={linkstyle} to="/now">
          <p>Now</p>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
