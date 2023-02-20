import React from 'react';
import './portfolio.css';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../../utils/PortfolioData';

function Portfolio() {
  console.log('products', portfolioData);
  const navigate = useNavigate();

  const displayInfo = (item) => {
    console.log('itemsssss', item);
    navigate('/portfolioItem', {
      state: item,
    });
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {portfolioData.map((item, index) => {
          return (
            <article className='portfolio__item' key={index}>
              <div className='portfolioImg__container'>
                <img
                  className='portfolio__displayImg'
                  src={item.image}
                  onClick={() => displayInfo(item)}
                  alt='portfolio item'
                />

                <div className='icon__container'>
                  {item.icons.map((icon, index) => {
                    return (
                      <img className='icon' key={index} src={icon} alt='icon' />
                    );
                  })}
                </div>
              </div>

              <h3 className='item__title'>{item.title}</h3>
              <div className='protfolio__item-cta'>
                <a href={item.github} className='btn'>
                  Github
                </a>
                <a href={item.demo} className='btn btn-primary'>
                  Live Demo
                </a>
                <a
                  onClick={() => displayInfo(item)}
                  className='btn btn-primary'
                >
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
