import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About MATED Institute</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              MATED Management and Research Institute (MMRI) is a premier business 
              training and consulting firm in Ethiopia. We focus on strategic 
              solutions for management, accounting, finance, auditing, taxation, 
              IT and other business-related services.
            </p>
            <p>
              We strongly believe that the main drivers of organizations are people, 
              which are the most complex, but also the most interesting subarea of 
              business. Each of our consultants has extensive experience and maintains 
              the highest standards of honesty, commitment, dedication and integrity.
            </p>
            <div className="about-values">
              <div className="value-item">
                <h4>✓ Integrity First</h4>
                <p>Unwavering commitment to ethical practices</p>
              </div>
              <div className="value-item">
                <h4>✓ Excellence</h4>
                <p>Delivering beyond expectations</p>
              </div>
              <div className="value-item">
                <h4>✓ Client Focus</h4>
                <p>Your success is our priority</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Team Photo Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;