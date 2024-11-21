import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
        <li><Link to="/">Home</Link></li> {/* Link to the Home page */}
        <li><Link to="/about">About</Link></li> {/* Link to the About page */}
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
