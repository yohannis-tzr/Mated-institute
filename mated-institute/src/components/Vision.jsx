import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section className="vision">
      <div className="container">
        <div className="vision-content">
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>To be the first choice advisor and consultant for all small and medium-sized businesses across Ethiopia by the year 2030.</p>
          </div>
          <div className="vision-card">
            <h3>Our Mission</h3>
            <p>To commit our ethics, integrity and quality in profession and to back advice with performance, building public trust and enhancing value.</p>
          </div>
          <div className="vision-card">
            <h3>Our Values</h3>
            <ul>
              <li>✓ Integrity & Ethics</li>
              <li>✓ Excellence in Service</li>
              <li>✓ Client Partnership</li>
              <li>✓ Continuous Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;