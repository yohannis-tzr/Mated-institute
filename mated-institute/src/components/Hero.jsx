import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1>Delivering Professional Excellence</h1>
        <p className="hero-subtitle">MATED Management and Research Institute (MMRI)</p>
        <p className="hero-description">
          Your trusted partner in management consulting, training, and research 
          since 2010. We provide strategic solutions for management, accounting, 
          finance, auditing, taxation, IT and other business-related services.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get a Consultation</a>
          <a href="#services" className="btn btn-secondary">Our Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Consultants</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;