import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2019/03/Addis-ababa-chambers.jpg',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2019/03/Untitled-1.jpg',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/05/Ethiopian-paper-and-pulp__4_-removebg-preview.png',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2019/03/Tirett.jpg',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2019/03/Ethiopian-family.jpg',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2019/03/Ethiopian-airports.jpg',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2019/03/Elili-hotel.jpg',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/11/header.jpg',
    'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/11/cropped-Chamber-Logoweb-1.png'
  ];

  return (
    <section className="partners">
      <div className="container">
        <h4>Meet Our Partners</h4>
        <div className="partners-slider">
          <div className="partners-track">
            {partners.map((partner, index) => (
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