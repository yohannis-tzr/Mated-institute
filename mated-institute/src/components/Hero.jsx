import React from 'react';
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      bg: 'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/11/photo_2023-11-13_08-53-18.jpg',
      title: 'Training and Capacity Development',
      subtitle: 'We provide training and capacity development for individual, small and medium sized businesses and government and non-Government organizations.',
      cta: 'Contact Us',
      link: '#contact'
    },
    {
      bg: 'https://i0.wp.com/matedinstitute.com/wp-content/uploads/2023/11/photo_2023-11-13_08-53-18.jpg',
      title: 'Consultancy Service',
      subtitle: 'Industry-focused consulting for accounting, auditing, taxation, IT and more.',
      cta: 'Read More',
      link: '/consultancy-services-offered/'
    }
  ];
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, idx) => (
          <div key={idx} className={`slide ${idx === current ? 'active' : ''}`} style={{
            backgroundImage: `url(${slide.bg})`
          }}>
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a href={slide.link} className="btn">{slide.cta}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-services">
        <a href="/consultancy-services-offered/" className="service-box red">
          Consultancy Service
        </a>
        <a href="/training-and-capacity-development/" className="service-box orange">
          Training & Capacity Development
        </a>
      </div>
    </section>
  );
};

export default Hero;