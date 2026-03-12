import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            MATED Management and<br />
            Research Institute
          </h1>
          <p className="hero-description">
            We focus on strategic solutions for management, accounting, finance, auditing,<br />
            taxation, IT and other business-related services.
          </p>
          <div className="hero-link">
            <a href="#about" className="btn">https://matedinstitute.com/who-we-are/</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;