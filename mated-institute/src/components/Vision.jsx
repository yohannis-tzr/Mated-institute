import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section className="vision">
      <div className="container">
        <div className="vision-grid">
          <div className="vision-item">
            <i className="icon-checked"></i>
            <h3>Delivering Professional Excellence</h3>
            <p>To be a preferred Advisor or consultant to all small and medium sized businesses across Ethiopia by the year January 1, 2030 G.C.</p>
          </div>

          <div className="vision-item">
            <i className="icon-checked"></i>
            <h3>Ethical & High-Quality Performers</h3>
            <p>To commit our ethics, integrity and quality in profession and to back advice with performance</p>
          </div>

          <div className="vision-item">
            <i className="icon-checked"></i>
            <h3>Our Vision</h3>
            <p>The first choice of the country's most popular talent…. drawn by the company's reputation, culture, and diversity.</p>
          </div>
        </div>

        <div className="vision-image">
          <img src="../photos/vision/team-photo.jpg" alt="Team" />
        </div>
      </div>
    </section>
  );
};

export default Vision;