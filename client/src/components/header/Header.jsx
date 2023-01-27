import React from 'react'
import CTA from './CTA'
import './header.css'
import me from '../../assets/images/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i am</h5>
        <h1>Tom Brockington</h1>
        <h5 className="text-light">FullStack Developer and Electrical Engineer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={me} alt='myself'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    )
}

export default Header