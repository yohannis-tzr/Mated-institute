import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <h4>Meet Our Partners</h4>
        <h2>Our Staff Profile</h2>
        
        <p className="team-description">
          The institute's staff is composed of professional in various fields of experience to support 
          the operation on consultancy and trainings required by our prospective customers. They have 
          a team spirit of professional and most of them have strong credential in Asset Valuation, 
          IFRS for SMEs, IFRS implementation on various industries at different senior level professional experts.
        </p>

        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">TE</div>
            </div>
            <h4>Tewodros Endale</h4>
            <p className="member-role">CEO</p>
            <p className="member-expertise">Strategic Management, IFRS</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">WW</div>
            </div>
            <h4>Wogayehu W/yesus</h4>
            <p className="member-role">Deputy CEO</p>
            <p className="member-expertise">Financial Management, Auditing</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">AG</div>
            </div>
            <h4>Alemayehu Geda</h4>
            <p className="member-role">Senior Consultant</p>
            <p className="member-expertise">Economics, Research</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">TH</div>
            </div>
            <h4>Tigist Haile</h4>
            <p className="member-role">Training Director</p>
            <p className="member-expertise">Professional Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;