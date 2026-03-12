import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MATED Institute</h3>
            <p>Your trusted partner in business consulting and training since 2010.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 +251-118-333536</p>
            <p>✉️ info@matedinstitute.com</p>
            <p>📍 P.O.Box: 9885</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MATED Management and Research Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;