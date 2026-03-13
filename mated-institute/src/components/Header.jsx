import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

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
              <a href="https://web.facebook.com/people/Mated-Mated/100018235770342/" target="_blank" rel="noopener noreferrer"><i className="icon icon-facebook"></i></a>
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
            <Link to="/">
              <img src={logo} alt="MATED Institute" />
            </Link>
          </div>

          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-header">
              <button className="mobile-back" onClick={() => setMenuOpen(false)}>
                ← Back
              </button>
            </div>
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li className="has-dropdown">
                <Link to="/about">About Us <i className="fas fa-caret-down"></i></Link>
                <ul className="dropdown">
                  <li><Link to="/who-we-are">Who We Are?</Link></li>
                  <li><Link to="/structure">Organizational Structure</Link></li>
                  <li><Link to="/staff">Our Staff Profile</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link to="/services">Our Services <i className="fas fa-caret-down"></i></Link>
                <ul className="dropdown">
                  <li><Link to="/training">Training and Capacity Development</Link></li>
                  <li><Link to="/consultancy">Consultancy Services</Link></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link to="/experience">Our Experience <i className="fas fa-caret-down"></i></Link>
                <ul className="dropdown">
                  <li><Link to="/ifrs">IFRS for SMEs Consultancy</Link></li>
                  <li><Link to="/ipsas">IPSAS Consultancy</Link></li>
                  <li><Link to="/valuation">Asset Valuation</Link></li>
                </ul>
              </li>
              <li><Link to="/departments">Our Departments</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/news">News & Blogs</Link></li>
              <li><Link to="/booking">Book Session</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
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