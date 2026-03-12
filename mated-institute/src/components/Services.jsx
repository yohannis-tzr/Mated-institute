import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    'Management Consulting',
    'Accounting & Finance',
    'Auditing Services',
    'Taxation Advisory',
    'IT Consulting',
    'Business Research'
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;