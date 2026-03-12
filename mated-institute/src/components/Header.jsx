import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="contact-info">
            <span>📞 +251-118-333536</span>
            <span>✉️ info@matedinstitute.com</span>
            <span>📍 P.O.Box:9885</span>
          </div>
          <div className="top-bar-right">
            <a href="#eng" className="language">ENG</a>
            <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)}>
              🔍
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="search-bar">
          <div className="container">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      )}

      <nav className="main-nav">
        <div className="container nav-container">
          <div className="logo">
            <h1>MATED</h1>
          </div>

          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>HOME</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT US</a></li>
              <li><a href="#services" onClick={() => setMenuOpen(false)}>OUR SERVICES</a></li>
              <li><a href="#experience" onClick={() => setMenuOpen(false)}>OUR EXPERIENCE</a></li>
              <li><a href="#departments" onClick={() => setMenuOpen(false)}>OUR DEPARTMENTS</a></li>
              <li><a href="#gallery" onClick={() => setMenuOpen(false)}>GALLERY</a></li>
              <li><a href="#news" onClick={() => setMenuOpen(false)}>NEWS & BLOGS</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a></li>
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