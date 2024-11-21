import React from "react";
import "./Section4.css";

function Section4() {
  return (
    <div className="section4">
      {/* Column 1: Opening and Closing Timings */}
      <div className="section4-column">
        <div className="heading-container">
          <i className="fas fa-clock"></i> {/* Font Awesome clock icon */}
          <h3>Opening & Closing Timings</h3>
        </div>
        <ul>
          <li>Monday : 9:00 AM - 6:00 PM</li>
          <li>Tuesday : 9:00 AM - 6:00 PM</li>
          <li>Wednesday : 9:00 AM - 6:00 PM</li>
          <li>Thursday : 9:00 AM - 6:00 PM</li>
          <li>Friday : 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Column 2: Google Maps Location */}
      <div className="section4-column">
        <div className="heading-container">
          <i className="fas fa-map-marker-alt"></i> {/* Font Awesome map icon */}
          <h3>Location</h3>
        </div>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0838576598316!2d144.9630583159066!3d-37.814107742348485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57756e2234f6cd2!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635478818427!5m2!1sen!2sus"
          width="100%"
          height="200"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Column 3: Services */}
      <div className="section4-column">
        <div className="heading-container">
          <i className="fas fa-cogs"></i> {/* Font Awesome settings icon */}
          <h3>Services</h3>
        </div>
        <ul>
          <li>Service 1: Web Development</li>
          <li>Service 2: App Development</li>
          <li>Service 3: Digital Marketing</li>
          <li>Service 4: UI/UX Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Section4;
