import React from 'react';
import './News.css';

const News = () => {
  const news = [
    {
      title: 'አዋጭ የገንዘብ ቁጠባና ብድር የህብረት ስራ ማህበር ዓለም አቀፍ የፋይናንስ ሪፖርት ደረጃዎች (IFRS) ከተለያዩ ክፍል ለተውጣጡ ሰራተኞቹ ስልጠና ሰጠ፡፡',
      date: 'June 11, 2023',
      image: '../photos/news/news-image.jpg'
    },
    {
      title: 'አዋጭ የገንዘብ ቁጠባና ብድር የህብረት ስራ ማህበር ዓለም አቀፍ የፋይናንስ ሪፖርት ደረጃዎች (IFRS) ከተለያዩ ክፍል ለተውጣጡ ሰራተኞቹ ስልጠና ሰጠ፡፡',
      date: 'June 11, 2023',
      image: '../photos/news/news-image.jpg'
    },
    {
      title: 'አዋጭ የገንዘብ ቁጠባና ብድር የህብረት ስራ ማህበር ዓለም አቀፍ የፋይናንስ ሪፖርት ደረጃዎች (IFRS) ከተለያዩ ክፍል ለተውጣጡ ሰራተኞቹ ስልጠና ሰጠ፡፡',
      date: 'March 10, 2019',
      image: '../photos/news/news-image.jpg'
    }
  ];

  return (
    <section id="news" className="news">
      <div className="container">
        <h6>News & Blogs</h6>
        <h2>Our Latest <span>News & Blogs</span></h2>

        <div className="news-grid">
          {news.map((item, index) => (
            <article key={index} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <a href="#read" className="read-more">Read More »</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;