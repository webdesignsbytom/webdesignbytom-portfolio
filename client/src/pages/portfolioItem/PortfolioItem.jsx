import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './portfolioItem.css';

function PortfolioItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolioItem, setPortfolioItem] = useState({
    id: 1,
    image: '',
    title: '',
    github: '',
    demo: '',
    icons: ['', ''],
    images: ['', '', ''],
    skills: ['', '', ''],
    desc: '',
    featuredComponent: '',
  });

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

  const returnHome = () => {
    navigate('/', {
      replace: true,
    });
  };

  return (
    <>
      <div className='item__page'>
        {/* NAV */}
        <nav className='portfolio__nav'>
          <div className='returnBtn__container'>
            <button onClick={returnHome}>Return</button>
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

                <div className='listOSkills'>
                  <ul>
                    {portfolioItem.skills.map((skill, index) => {
                      return <li key={index}>{skill}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <div className='featuredComponent__container'>
                <div className='skills__title'>
                  <h3>Feature Component</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='right__container'>

            <div className='items__icons'>
              <ul className='icons__ul'>
                {portfolioItem.icons.map((icon, index) => {
                  return (
                    <li className='icon__item__list'>
                      <img src={icon} alt='icon' />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="responsive__display__container">
              
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
