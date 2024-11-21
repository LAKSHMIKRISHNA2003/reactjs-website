import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          Welcome to My Website! We are a team of passionate individuals dedicated to delivering high-quality services and products. Our mission is to make your life easier and more enjoyable with our innovative solutions.
        </p>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Established in 2020, we have consistently strived to meet the needs of our customers. Over the years, we’ve expanded our services and product offerings, always keeping quality and customer satisfaction at the forefront of our business.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Team Member 3" />
            <h3>Mark Johnson</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more, don't hesitate to reach out to us!</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default About;
