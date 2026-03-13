import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    '../photos/partners/addis-ababa-chambers.jpg',
    '../photos/partners/untitled-1.jpg',
    '../photos/partners/ethiopian-paper-pulp.png',
    '../photos/partners/tirett.jpg',
    '../photos/partners/ethiopian-family.jpg',
    '../photos/partners/ethiopian-airports.jpg',
    '../photos/partners/elili-hotel.jpg',
    '../photos/partners/chamber-logo.png'
  ];

  // Duplicate the partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="partners">
      <div className="container">
        <h4>Meet Our Partners</h4>
        <div className="partners-slider">
          <div className="partners-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-item">
                <img src={partner} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;