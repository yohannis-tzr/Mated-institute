import React from 'react';
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      title: "IFRS for SMEs Consultancy",
      description: "Successfully implemented IFRS standards for over 50 SMEs across Ethiopia, ensuring compliance and financial transparency.",
      year: "2015-2024"
    },
    {
      title: "IPSAS Implementation",
      description: "Led IPSAS adoption projects for multiple government agencies, improving public sector financial reporting.",
      year: "2018-2024"
    },
    {
      title: "Asset Valuation Services",
      description: "Completed comprehensive asset valuations for major corporations, financial institutions, and government entities.",
      year: "2010-2024"
    },
    {
      title: "Professional Training Programs",
      description: "Trained over 5,000 professionals in IFRS, IPSAS, auditing, and financial management.",
      year: "2010-2024"
    },
    {
      title: "Taxation Advisory",
      description: "Provided strategic tax planning and compliance services to diverse clients across industries.",
      year: "2012-2024"
    },
    {
      title: "Organizational Development",
      description: "Helped organizations restructure and optimize operations for improved efficiency and growth.",
      year: "2010-2024"
    }
  ];

  return (
    <section id="experiences" className="experiences">
      <div className="container">
        <h2>Our Experience</h2>
        <p className="section-subtitle">10+ years of excellence in consulting and training</p>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <span className="experience-year">{exp.year}</span>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;