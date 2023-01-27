import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/images/portfolio1.jpg';
import Portfolio2 from '../../assets/images/portfolio2.jpg';
import Portfolio3 from '../../assets/images/portfolio3.jpg';
import Portfolio4 from '../../assets/images/portfolio4.jpg';
import Portfolio5 from '../../assets/images/portfolio5.png';
import ReactIcon from '../../assets/images/react.svg';
import HTML5Icon from '../../assets/images/html5.svg';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: 'TavyEpoxy Furniture Sales',
    github: 'https://github.com',
    demo: 'https://github.com',
    icons: [ReactIcon]
  },
  {
    id: 2,
    image: Portfolio2,
    title: 'Matched Betting information and training game',
    github: 'https://github.com',
    demo: 'https://github.com',
    icons: [ReactIcon]
  },
  {
    id: 3,
    image: Portfolio3,
    title: 'Idle-Clicker game',
    github: 'https://github.com',
    demo: 'https://github.com',
    icons: [ReactIcon]
  },
  {
    id: 4,
    image: Portfolio4,
    title: 'Luxury Casino',
    github: 'https://github.com',
    demo: 'https://github.com',
    icons: [HTML5Icon]
  }
];

function Portfolio() {

  const navigate = useNavigate()

  const displayInfo = (event) => {
    console.log('ji');

    navigate('/example', {
      replace: true,
    });

  }
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, icons }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="portfolio item" />
                <img className='icon__container' src={icons[0]} alt="icon" />
              </div>

              <h3 className='item__title'>{title}</h3>
              <div className="protfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
                <a onClick={displayInfo} className="btn btn-primary">
                  More Info
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
