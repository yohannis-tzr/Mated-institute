import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div>
              <h4>Subscribe To Our Newsletter</h4>
              <p>Sign up for our monthly newsletter for the latest news & articles</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Training & Capacity Development</h4>
              <ul>
                <li><a href="#executive">Executive and Leadership Development</a></li>
                <li><a href="#financial">Financial Management and Accounting</a></li>
                <li><a href="#management">Management and Human Resource Development</a></li>
                <li><a href="#trade">International Trade</a></li>
                <li><a href="#marketing">Marketing and Customer Service</a></li>
                <li><a href="#project">Project and Program Management</a></li>
                <li><a href="#logistics">Logistics and Procurement Management</a></li>
                <li><a href="#communication">Communication Skills</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Consultancy Services</h4>
              <ul>
                <li><a href="#business">Business Advisory and Development</a></li>
                <li><a href="#tax">Tax Advisory</a></li>
                <li><a href="#hr">Human Resources</a></li>
                <li><a href="#performance">Performance improvement</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Get in touch</h4>
              <ul className="contact-list">
                <li>
                  <i className="icon-map-marker1"></i>
                  Kazanchis, Palace Commercial Center, 3rd Floor, Office #308, Addis Ababa, Ethiopia
                </li>
                <li>
                  <i className="icon-phone1"></i>
                  Tel: (Office):+251-118-333536
                </li>
                <li>
                  <i className="fas fa-mobile-alt"></i>
                  (Mob.)+251- 941-914141/ 972-818181/977-244434
                </li>
                <li>
                  <i className="far fa-envelope-open"></i>
                  P.O.Box: 9885
                </li>
                <li>
                  <i className="icon-envelope1"></i>
                  info@matedinstitute.com, matedtcplc@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>Copyright ©2023 MATED Management & Research Institute. All rights reserved. Powered By BBM Tech</p>
            <div className="footer-social">
              <a href="https://facebook.com"><i className="icon-facebook"></i></a>
              <a href="https://twitter.com"><i className="icon-twitter"></i></a>
              <a href="https://linkedin.com"><i className="icon-linkedin"></i></a>
              <a href="https://t.me/mated2022"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;