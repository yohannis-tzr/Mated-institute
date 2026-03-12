import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info-section">
            <h3>Get in Touch</h3>
            <p><strong>📞 Phone:</strong> +251-118-333536</p>
            <p><strong>✉️ Email:</strong> info@matedinstitute.com</p>
            <p><strong>📍 Address:</strong> P.O.Box: 9885, Addis Ababa, Ethiopia</p>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;