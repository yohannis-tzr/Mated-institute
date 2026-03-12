import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h6>Our Services</h6>
        <h2><span>Product</span> and Service</h2>
        
        <div className="services-description">
          <p>MATED Management and Research Institute (MMRI) provide industry-focused services specializing in training, business advisory and consulting for public and private clients in order to build public trust and enhance value through the application of our committed approach and methodology. Our services will target individual, small and medium sized businesses and government and non-Government organizations.</p>
          <p>Whatever the size of the organization, our service approach is to be guided towards client satisfaction and our commitment towards excellence and perfection. Our services, which have been provided by the institute, are consulting, research, training & development; viz,</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="card-front">
              <i className="icon icon-chart2"></i>
              <h3>Consultancy Service</h3>
              <p>Business advisory, tax advisory, human resources, performance improvement</p>
            </div>
            <div className="card-back">
              <h3>Consultancy Service</h3>
              <p>Business advisory, tax advisory, human resources, performance improvement</p>
              <a href="#read" className="btn-small">Read More</a>
            </div>
          </div>

          <div className="service-card">
            <div className="card-front">
              <i className="icon icon-brain"></i>
              <h3>Training and Capacity development</h3>
              <p>Leadership, financial management, HR, international trade, marketing</p>
            </div>
            <div className="card-back">
              <h3>Training and Capacity development</h3>
              <p>Leadership, financial management, HR, international trade, marketing</p>
              <a href="#read" className="btn-small">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;