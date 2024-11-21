import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-menu">
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p>© 2024 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
