import React from 'react';
import './Hero.css';

import hero1 from '../photos/hero/photo_2026-03-13_18-08-42.jpg';
import hero2 from '../photos/hero/photo_2026-03-13_18-08-45.jpg';
import hero3 from '../photos/hero/photo_2026-03-13_18-08-49.jpg';
import hero4 from '../photos/hero/photo_2026-03-13_18-09-00.jpg';
import hero5 from '../photos/hero/photo_2026-03-13_18-09-34.jpg';
import hero6 from '../photos/hero/photo_2026-03-13_18-09-48.jpg';

const Hero = () => {
  const slides = [
    {
      bg: hero1,
      title: 'Training and Capacity Development',
      subtitle: 'We provide training and capacity development for individual, small and medium sized businesses and government and non-Government organizations.',
      ctaPrimary: 'Contact Us',
      ctaSecondary: 'Read More',
      linkPrimary: '#contact',
      linkSecondary: '/consultancy-services-offered/'
    },
    {
      bg: hero2,
      title: 'Consultancy Service',
      subtitle: 'Industry-focused consulting for accounting, auditing, taxation, IT and more.',
      ctaPrimary: 'Read More',
      ctaSecondary: '',
      linkPrimary: '/consultancy-services-offered/',
      linkSecondary: ''
    },
    {
      bg: hero3,
      title: 'Tailored Training',
      subtitle: 'Customized programs designed to meet your organization’s needs.',
      ctaPrimary: 'Learn More',
      ctaSecondary: '',
      linkPrimary: '/training-and-capacity-development/',
      linkSecondary: ''
    },
    {
      bg: hero4,
      title: 'Professional Consultancy',
      subtitle: 'Expert advice across finance, IT, and compliance.',
      ctaPrimary: 'See Services',
      ctaSecondary: '',
      linkPrimary: '/consultancy-services-offered/',
      linkSecondary: ''
    },
    {
      bg: hero5,
      title: 'Empowering Teams',
      subtitle: 'Build skills and confidence through hands-on learning.',
      ctaPrimary: 'Get Started',
      ctaSecondary: '',
      linkPrimary: '#contact',
      linkSecondary: ''
    },
    {
      bg: hero6,
      title: 'Strategic Support',
      subtitle: 'Partner with us for lasting organizational growth.',
      ctaPrimary: 'Contact Us',
      ctaSecondary: '',
      linkPrimary: '#contact',
      linkSecondary: ''
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
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-left">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
              <div className="hero-right">
                {slide.ctaPrimary && (
                  <a href={slide.linkPrimary} className="btn btn-primary">{slide.ctaPrimary}</a>
                )}
                {slide.ctaSecondary && (
                  <a href={slide.linkSecondary} className="btn btn-secondary">{slide.ctaSecondary}</a>
                )}
              </div>
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