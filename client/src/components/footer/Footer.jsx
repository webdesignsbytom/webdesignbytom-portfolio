import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'



function Footer() {
  return (
    <footer>
      <a href='/' className='footer__logo'>LOGO</a>

      <ul className="permalinks">
        <li><a href='/'>Top</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* TODO: ADD LINKS */}
        <a target='_blank' rel='noreferrer' href='https://facebook.com'><FaFacebookF/></a>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/tom-brockington-b011b8230/'><BsLinkedin/></a>
        <a target='_blank' rel='noreferrer' href='https://github.com/webdesignbytom'><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>
          Build by webdesignbytom. All rights reserved ©. 
        </small>
      </div>
    </footer>
    )
}

export default Footer