import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './portfolioItem.css';

function PortfolioItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolioItem, setPortfolioItem] = useState({});
console.log('item', portfolioItem);
  // Set the item to be displayed
  useEffect(() => {
    if (location.state) {
      setPortfolioItem(location.state);
    } else {
      navigate('/error', {
        replace: true,
      });
    }
  }, []);

  return (
    <>
      <div className='item__page'>
        {/* NAV */}
        <nav className='portfolio__nav'>
          <div className='returnBtn__container'>
            <button>Return</button>
          </div>
          <div className='portfolioItemBtns__container'>
            <div className='previous'>
              <button>Prev</button>
            </div>
            <div className='next'>
              <button>Next</button>
            </div>
          </div>
        </nav>
        {/* MAIN PAGE */}
        <div className='port__item__page'>
          <div className='left__container'>
            <div className='port__items__title'>
              <h1>{portfolioItem.title}</h1>
            </div>

            <article className='item__desc'>{portfolioItem.desc}</article>

            <div className='specs__containers'>
              <div className='skillsList__container'>
                <div className='skills__title'>
                  <h3>Skills</h3>
                </div>

                {/* <div className='listOSkills'>
                  {portfolioItem.skills[1]}
                </div> */}
              </div>

              <div className='featuredComponent__container'></div>
            </div>
          </div>

          <div className='right__container'>
            <div className='items__icons'>
              {/* {portfolioItem.iconsmap((icon, index) => {
                return (
                  <img className='icon' key={index} src={icon} alt='icon' />
                );
              })} */}
            </div>
            <div className='responsive__images__container'>
              <h6>PHONE - TABLET - LAPTOP - MONITOR</h6>
              <h3>Fully Responsive Design</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
