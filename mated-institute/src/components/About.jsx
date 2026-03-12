import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="service-badge">
              <img src="https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/06/photo_2023-06-09_00-04-43.jpg" alt="Consultancy" />
              <h3>Consultancy Service</h3>
            </div>
            <div className="service-badge">
              <img src="https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/06/photo_2023-06-10_15-07-55.jpg" alt="Training" />
              <h3>Training & Capacity Development</h3>
            </div>
          </div>
          
          <div className="about-center">
            <div className="stats-box">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Experiences</span>
              </div>
            </div>
            <div className="ceo-section">
              <img src="https://i0.wp.com/matedinstitute.com/wp-content/uploads/2019/03/MATED-consultancy-Tewodros-1.jpg" alt="Tewodros Endale" />
              <div>
                <h4>Tewodros Endale</h4>
                <p>CEO</p>
              </div>
            </div>
            <a href="#more" className="btn">Discover More</a>
          </div>

          <div className="about-right">
            <h5>Delivering Value!</h5>
            <h2>MATED Management and Research Institute <span>(MMRI)</span></h2>
            <p><strong>MATED Management and Research Institute (MMRI)</strong> is a business training and consulting firm. We focus on strategic solutions for management, accounting, finance, auditing, taxation, IT and other business-related services. We strongly believe that the main drivers of organizations are people, which are the most complex, but also the most interesting subarea of business.</p>
            <p>Each of our consultants has a long experience as a consultant. Honesty, commitment, dedication and integrity combined with the highest professional and personal standards form the cornerstone of all activities of the firm.</p>
            
            <div className="deputy-section">
              <img src="https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/11/Wogayehu.jpg" alt="Wogayehu W/yesus" />
              <div>
                <h4>Wogayehu W/yesus</h4>
                <p>Deputy CEO</p>
              </div>
            </div>
            <a href="#more" className="btn btn-outline">Discover More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;