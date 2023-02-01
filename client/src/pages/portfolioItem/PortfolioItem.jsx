import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './portfolioItem.css';

function PortfolioItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolioItem, setPortfolioItem] = useState({});

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
        <main className='port__item__page'>
          <section className='left__container'>
            <div className='item__title'>
              <h1>Portfolio Item {portfolioItem.id}</h1>
            </div>
            <article className='item__desc'>{portfolioItem.desc}</article>
          </section>
          <section className='right__container'>
            <div className="item__icons">
              {/* {portfolioItem.iconsmap((icon, index) => {
                return (
                  <img className='icon' key={index} src={icon} alt='icon' />
                );
              })} */}
            </div>
            <div className="responsive__images__container">
              <h6>PHONE - TABLET - LAPTOP - MONITOR</h6>
              <h3>Fully Responsive Design</h3>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default PortfolioItem;
