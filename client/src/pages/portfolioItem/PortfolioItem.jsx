import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { portfolioData, initialData } from '../../utils/portfolioData';

import './portfolioItem.css';

function PortfolioItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolioItem, setPortfolioItem] = useState(initialData);

  // Set the item to be displayed
  useEffect(() => {
    console.log('location: ', location);
    if (location.state) {
      setPortfolioItem(location.state);
    } else {
      setPortfolioItem(portfolioData[0]);
    }
  }, []);

  const returnHome = () => {
    navigate('../', {});
  };

  const nextPage = () => {
    const currentId = portfolioItem.id;
    const newPageItem = portfolioData[currentId];

    if (currentId === portfolioData.length) {
      setPortfolioItem(portfolioData[0]);
    } else {
      setPortfolioItem(newPageItem);
    }
  };
  const prevPage = () => {
    const currentId = portfolioItem.id;
    const newPageItem = portfolioData[currentId];

    if (currentId === portfolioData.length) {
      setPortfolioItem(portfolioData[0]);
    } else {
      setPortfolioItem(newPageItem);
    }
  };

  console.log('XXXX', portfolioItem);

  return (
    <>
      <div className='item__page'>
        {/* NAV */}
        <nav className='portfolio__nav'>
          <div className='returnBtn__container'>
            <Link className='btn' to='/'>
              Return
            </Link>
          </div>
          <div className='portfolioItemBtns__container'>
            <div className='previous'>
              <Link className='btn' onClick={prevPage}>
                Prev
              </Link>
            </div>
            <div className='next'>
              <Link className='btn' onClick={nextPage}>
                Next
              </Link>
            </div>
          </div>
        </nav>
        {/* MAIN PAGE */}
        <div className='port__item__page'>
          <div className='left__container'>
            <div className='port__items__title'>
              <h1>{portfolioItem.title}</h1>
            </div>

            <div className='headlines'>
              App Purpose: {portfolioItem.headline}
            </div>

            <article className='item__desc'>{portfolioItem.desc}</article>

            <div className='specs__containers'>
              <div className='skillsList__container'>
                <div className='skills__title'>
                  <h3>Skills Used</h3>
                </div>

                <div className='listOSkills'>
                  <ul>
                    {portfolioItem.skills.map((skill, index) => {
                      return <li key={index}>{skill}</li>;
                    })}
                  </ul>
                </div>
              </div>

              
            </div>
          </div>

          <div className='right__container'>
            <div className='css__brag'>
              <h3>
                {' '}
                ALL <br /> MADE <br /> WITH <br /> CSS
              </h3>{' '}
            </div>
            <div className='items__icons'>
              <ul className='icons__ul'>
                {portfolioItem.icons.map((icon, index) => {
                  return (
                    <li key={index} className='icon__item__list'>
                      <img src={icon} alt='icon' />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='responsive__display__container'>
              <div className='phone'>
                <div className='outer__phone'>
                  <div className='phone__screen'>
                    <img src={portfolioItem.images[0]} alt='phone display' />
                  </div>
                  <div className='menu__circle__container'>
                    <div className='menu__circle'></div>
                  </div>
                </div>
              </div>

              <div className='laptop'>
                <div className='laptop__screen__container'>
                  <div className='laptop__screen'>
                    <div className='inner__border'>
                      <img src={portfolioItem.images[1]} alt='laptop display' />
                    </div>
                  </div>
                </div>
                <div className='laptop__keyboard'>
                  <div className='plug__container'>
                    <div className='plug__jack'></div>
                    <div className='plug__jack'></div>
                  </div>
                  <div className='drive__container'></div>
                </div>
              </div>

              <div className='monitor__container'>
                <div className='screen__container'>
                  <div className='screen'>
                    <img src={portfolioItem.images[2]} alt='phone display' />
                  </div>
                  <div className='buttons__row'>
                    <div className='buttonX'></div>
                    <div className='buttonX'></div>
                    <div className='buttonX'></div>
                    <div className='buttonX'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='responsive__images__container'>
              <div className='resp__titles'>
                <h6>PHONE - TABLET - LAPTOP - MONITOR</h6>
                <h3>Fully Responsive Design</h3>
              </div>
              <div className='link__btn'>
                <a
                  target='_blank'
                  className='btn__alt'
                  href={portfolioItem.liveSite}
                >
                  LIVE SITE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
