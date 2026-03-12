import React from 'react';
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      title: "IFRS for SMEs consultancy Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      title: "Training- IFRS, IPSAS, Asset Valuation & Others",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      title: "IPSAS Consultancy Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      title: "Consultancy Services Offered",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      title: "Asset Valuation & Revaluation Consultancy Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    },
    {
      title: "More",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }
  ];

  return (
    <section id="experiences" className="experiences">
      <div className="container">
        <h5>Experiences</h5>
        <h2>Our Experiences</h2>
        
        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h4>{exp.title}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;