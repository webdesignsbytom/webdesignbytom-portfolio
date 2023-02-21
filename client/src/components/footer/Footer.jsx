import React from 'react'
// Icons
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
// Styles
import './footer.css'


function Footer() {
  return (
    <footer>
      <a href='/' className='footer__logo'>LOGO</a>

      <ul className="permalinks">
        <li><a href='/'>Top</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/webdesignsbytom/'><BsInstagram/></a>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/tom-brockington-b011b8230/'><BsLinkedin/></a>
        <a target='_blank' rel='noreferrer' href='https://github.com/webdesignbytom'><FaGithub/></a>
        <a target='_blank' rel='noreferrer' href='https://twitter.com/webdesignsbytom'><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>
          Built by webdesignsbytom. All rights reserved 2023 ©. 
        </small>
      </div>
    </footer>
    )
}

export default Footer