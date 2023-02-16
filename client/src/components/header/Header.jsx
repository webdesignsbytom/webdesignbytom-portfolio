import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I am</h4>
        <h1>Tom Brockington</h1>
        <h5 className="text-light">FullStack Developer and Electrical Engineer</h5>
        <h5 className="text-light">Available to hire for private or full-time dev work</h5>
        <CTA />
        <HeaderSocials />
        
        <a href='#contact' className='scroll__down'>Contact Me</a>
      </div>
    </header>
    )
}

export default Header