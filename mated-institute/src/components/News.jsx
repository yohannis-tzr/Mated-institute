import React from 'react';
import './News.css';

const News = () => {
  const news = [
    {
      title: 'New Training Program Launch',
      date: 'March 12, 2026',
      excerpt: 'MATED Institute launches new professional development program...'
    },
    {
      title: 'IFRS Workshop Success',
      date: 'March 10, 2026',
      excerpt: 'Successful completion of IFRS workshop with 50+ participants...'
    },
    {
      title: 'Partnership Announcement',
      date: 'March 8, 2026',
      excerpt: 'Strategic partnership announced with international consulting firm...'
    }
  ];

  return (
    <section id="news" className="news">
      <div className="container">
        <h2>News & Blogs</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="news-card">
              <h3>{item.title}</h3>
              <p className="news-date">{item.date}</p>
              <p className="news-excerpt">{item.excerpt}</p>
              <a href="#read" className="read-more">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;