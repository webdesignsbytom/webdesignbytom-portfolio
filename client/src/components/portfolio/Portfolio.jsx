import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/portfolio2.jpg';
import Portfolio3 from '../../assets/portfolio3.jpg';
import Portfolio4 from '../../assets/portfolio4.jpg';
import Portfolio5 from '../../assets/portfolio5.png';

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: 'this thing i did once',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: Portfolio2,
    title: 'this thing i did once',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: Portfolio3,
    title: 'this thing i did once',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: Portfolio4,
    title: 'this thing i did once',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: Portfolio5,
    title: 'this thing i did once',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: Portfolio5,
    title: 'this thing i did once',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="portfolio item" />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
