import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="gallery-item">
              <div className="gallery-placeholder">
                <span>Image {item}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="#more" className="btn btn-outline">View More</a>
      </div>
    </section>
  );
};

export default Gallery;