import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo-stamp.png`}
          alt="Logo"
          className="header-logo"
        />
        <div className="header-text">
          <h1>Welcome to My Brand</h1>
          <p>Your tagline goes here</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
