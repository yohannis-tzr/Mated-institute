import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Staff.css';

const Staff = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    
    try {
      const res = await fetch('http://localhost:4002/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'consultation',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="staff">
      <div className="container">
        <div className="staff-grid">
          <div className="staff-left">
            <h2>Our Staff <span>Profile</span></h2>
            <p>The institute's staff is composed of professional in various fields of experience to support the operation on consultancy and trainings required by our prospective customers. They have a team spirit of professional and most of them have strong credential in Asset Valuation, IFRS for SMEs, IFRS implementation on various industries at different senior level professional experts.</p>
            <Link to="/staff" className="btn">Read More</Link>
          </div>

          <div className="staff-right">
            <h6>Get In Touch</h6>
            <h2>Free <span>Consultation</span></h2>
            
            <form className="consultation-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email (Optional)" 
                value={formData.email}
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="message"
                placeholder="Message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn">Get Quote</button>
            </form>
            {status === 'success' && <p className="success-message">Consultation request submitted successfully!</p>}
            {status === 'error' && <p className="error-message">Something went wrong. Please try again.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;