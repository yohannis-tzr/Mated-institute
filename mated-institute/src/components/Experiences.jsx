import React from 'react';
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      icon: 'icon-chart2',
      title: 'IFRS for SMEs consultancy Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '/ifrs-for-smes-consultancy-services/'
    },
    {
      icon: 'icon-Computer',
      title: 'Training- IFRS, IPSAS, Asset Valuation & Others',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '/training-ifrs-ipsas-asset-valuation-others/'
    },
    {
      icon: 'icon-line-chart1',
      title: 'IPSAS Consultancy Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '/ipsas-consultancy-services/'
    },
    {
      icon: 'icon-pie-chart3',
      title: 'Consultancy Services Offered',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '/consultancy-services-offered/'
    },
    {
      icon: 'icon-like1',
      title: 'Asset Valuation & Revaluation Consultancy Services',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '/asset-valuation-revaluation-consultancy-services/'
    },
    {
      icon: 'icon-monitor1',
      title: 'More',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      link: '#'
    }
  ];

  return (
    <section id="experience" className="experiences">
      <div className="container">
        <div className="section-header">
          <h6>Experiences</h6>
          <h2>Our <span>Experiences</span></h2>
          <a href="#all" className="btn">View All Portfolios</a>
        </div>

        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <i className={exp.icon}></i>
              <h3>{exp.title}</h3>
              <p>{exp.desc}</p>
              <a href={exp.link} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;