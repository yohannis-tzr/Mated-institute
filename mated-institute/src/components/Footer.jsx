import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MATED Institute</h3>
            <p>Delivering professional excellence in consulting, training, and research since 2010.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Consultancy</li>
              <li>Training</li>
              <li>Research</li>
              <li>Asset Valuation</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">t</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MATED Management and Research Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;