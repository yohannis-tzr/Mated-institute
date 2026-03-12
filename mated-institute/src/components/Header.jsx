import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="contact-info">
            <span><i className="fas fa-phone"></i> +251-118-333536</span>
            <span><i className="far fa-envelope"></i> info@matedinstitute.com</span>
            <span><i className="icon icon-envelope"></i> P.O.Box: 9885</span>
          </div>
          <div className="top-bar-right">
            <a href="#eng" className="language">ENG</a>
            <div className="social-icons">
              <a href="https://facebook.com"><i className="icon icon-facebook"></i></a>
              <a href="https://twitter.com"><i className="icon icon-twitter"></i></a>
              <a href="https://linkedin.com"><i className="icon icon-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-container">
          <div className="logo">
            <img src="https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/05/mated.png" alt="MATED Institute" />
          </div>

          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li className="has-dropdown">
                <a href="#about">About Us <i className="fas fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><a href="#who-we-are">Who We Are?</a></li>
                  <li><a href="#structure">Organizational Structure</a></li>
                  <li><a href="#staff">Our Staff Profile</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#services">Our Services <i className="fas fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><a href="#training">Training and Capacity Development</a></li>
                  <li><a href="#consultancy">Consultancy Services</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#experience">Our Experience <i className="fas fa-caret-down"></i></a>
                <ul className="dropdown">
                  <li><a href="#ifrs">IFRS for SMEs Consultancy</a></li>
                  <li><a href="#ipsas">IPSAS Consultancy</a></li>
                  <li><a href="#valuation">Asset Valuation</a></li>
                </ul>
              </li>
              <li><a href="#departments">Our Departments</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#news">News & Blogs</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="nav-right">
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;