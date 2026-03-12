import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <p>
            MATED Management and Research Institute (MMRI) is a business training and consulting firm. 
            We focus on strategic solutions for management, accounting, finance, auditing, taxation, 
            IT and other business-related services.
          </p>
          <a href="#more" className="btn btn-outline">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;