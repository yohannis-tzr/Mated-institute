import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "📊",
      title: "Consultancy Services",
      description: "Strategic business advisory, management consulting, and organizational development solutions tailored to your needs."
    },
    {
      icon: "🎓",
      title: "Training & Development",
      description: "Professional development programs in IFRS, IPSAS, Asset Valuation, Taxation, and leadership skills."
    },
    {
      icon: "🔍",
      title: "Research Services",
      description: "Market research, feasibility studies, and data analysis to support informed decision-making."
    },
    {
      icon: "💰",
      title: "Financial Advisory",
      description: "Expert guidance in accounting, auditing, taxation, and financial management."
    },
    {
      icon: "💻",
      title: "IT Consulting",
      description: "Technology solutions and digital transformation strategies for modern businesses."
    },
    {
      icon: "📈",
      title: "Asset Valuation",
      description: "Professional valuation services for businesses, properties, and intangible assets."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions for your business needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;