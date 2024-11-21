import React from "react";
import "./Section2.css";
import { FaHome, FaInfoCircle, FaTools, FaEnvelope } from "react-icons/fa"; // Example icons from react-icons

function Section2() {
  return (
    <div className="buttons-section">
      <button className="icon-button">
        <FaHome className="button-icon" />
        <span>Home</span>
      </button>
      <button className="icon-button">
        <FaInfoCircle className="button-icon" />
        <span>About</span>
      </button>
      <button className="icon-button">
        <FaTools className="button-icon" />
        <span>Services</span>
      </button>
      <button className="icon-button">
        <FaEnvelope className="button-icon" />
        <span>Contact</span>
      </button>
    </div>
  );
}

export default Section2;
