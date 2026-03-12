import React from 'react';
import './Staff.css';

const Staff = () => {
  return (
    <section className="staff">
      <div className="container">
        <div className="staff-grid">
          <div className="staff-left">
            <h2>Our Staff <span>Profile</span></h2>
            <p>The institute's staff is composed of professional in various fields of experience to support the operation on consultancy and trainings required by our prospective customers. They have a team spirit of professional and most of them have strong credential in Asset Valuation, IFRS for SMEs, IFRS implementation on various industries at different senior level professional experts.</p>
            <a href="#more" className="btn">Read More</a>
          </div>

          <div className="staff-right">
            <h6>Get In Touch</h6>
            <h2>Free <span>Consultation</span></h2>
            
            <form className="consultation-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows="4"></textarea>
              <button type="submit" className="btn">Get Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;