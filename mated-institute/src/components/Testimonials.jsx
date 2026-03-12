import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Abel T.',
      role: 'IT Consultant',
      text: '"MATED Management and Research Institute has been an invaluable partner in helping us develop our team\'s leadership skills. Their training programs are practical, engaging, and tailored to our specific needs. We have seen a significant improvement in our team\'s performance since working with MATED."',
      rating: 5
    },
    {
      name: 'Solomon G.',
      role: 'Bank Branch manager',
      text: '"MATED Management and Research Institute provided us with excellent training on project management. The trainer was knowledgeable, engaging, and provided us with practical tools that we could immediately apply in our work. We highly recommend MATED to anyone looking for quality training programs."',
      rating: 5
    },
    {
      name: 'Netsanet Y.',
      role: 'NGO',
      text: '"MATED Management and Research Institute is a top-notch training and consultancy firm. Their trainers are knowledgeable, experienced, and provide practical solutions that have helped us improve our business operations."',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-grid">
          <div className="testimonials-left">
            <h6>Our Testimonials</h6>
            <h2>What they are <span>talking about</span></h2>
            <p>Whatever the size of the organization, our service approach is to be guided toward client satisfaction and our commitment to excellence and perfection.</p>
            <a href="#more" className="btn">Read More</a>
          </div>

          <div className="testimonials-right">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-content">
                  <i className="icon-quote"></i>
                  <p>{testimonial.text}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="eicon-star active"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;