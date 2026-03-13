import React from 'react';
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      icon: 'icon-chart2',
      title: 'IFRS for SMEs consultancy Services',
      desc: 'Specialized International Financial Reporting Standards implementation for small and medium enterprises. Our experts guide you through seamless transition to IFRS compliance, ensuring accurate financial reporting and enhanced stakeholder confidence.',
      link: '/ifrs-for-smes-consultancy-services/'
    },
    {
      icon: 'icon-Computer',
      title: 'Training- IFRS, IPSAS, Asset Valuation & Others',
      desc: 'Comprehensive professional training programs designed to build expertise in financial reporting standards. Our hands-on workshops and certification courses empower finance professionals with practical skills and industry knowledge.',
      link: '/training-ifrs-ipsas-asset-valuation-others/'
    },
    {
      icon: 'icon-line-chart1',
      title: 'IPSAS Consultancy Services',
      desc: 'Expert International Public Sector Accounting Standards implementation for government entities and public sector organizations. We ensure compliance, improve transparency, and enhance public financial management through our specialized consultancy services.',
      link: '/ipsas-consultancy-services/'
    },
    {
      icon: 'icon-pie-chart3',
      title: 'Consultancy Services Offered',
      desc: 'Strategic business advisory services covering financial management, operational efficiency, and organizational development. Our tailored solutions address unique challenges and drive sustainable growth for your organization.',
      link: '/consultancy-services-offered/'
    },
    {
      icon: 'icon-like1',
      title: 'Asset Valuation & Revaluation Consultancy Services',
      desc: 'Professional asset valuation services providing accurate assessment of tangible and intangible assets. Our certified experts deliver reliable valuations for financial reporting, mergers & acquisitions, and strategic decision-making.',
      link: '/asset-valuation-revaluation-consultancy-services/'
    },
    {
      icon: 'icon-monitor1',
      title: 'More',
      desc: 'Discover our full range of specialized consulting and training services. From risk management to internal audit, we offer comprehensive solutions to meet all your professional development and organizational needs.',
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