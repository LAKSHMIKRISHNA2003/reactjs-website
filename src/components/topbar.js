import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>Call us: +1 234 567 890</span>
      </div>
      <div className="topbar-right">
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </div>
    </div>
  );
}

export default Topbar;
