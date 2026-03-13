import React from 'react';
import './Gallery.css';

import av from '../photos/meta/av.jpg';
import av2 from '../photos/meta/av2.jpg';
import av3 from '../photos/meta/av3.jpg';
import av4 from '../photos/meta/av4.jpg';
import av5 from '../photos/meta/av5.jpg';
import photo1 from '../photos/meta/photo_2026-03-13_18-08-15.jpg';
import photo2 from '../photos/meta/photo_2026-03-13_18-08-19.jpg';
import photo3 from '../photos/meta/photo_2026-03-13_18-08-23.jpg';
import photo4 from '../photos/meta/photo_2026-03-13_18-08-27.jpg';

const Gallery = () => {
  const images = [av, av2, av3, av4, av5, photo1, photo2, photo3, photo4];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-meta">
          <p><strong>Asset Verification &amp; Tagging Services</strong></p>
          <p>By: <strong>MATED Consulting PLC</strong></p>
          <p>Client: <strong>Dashen Breweries SC</strong></p>
        </div>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery item ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <a href="#more" className="btn btn-outline">View More</a>
      </div>
    </section>
  );
};

export default Gallery;