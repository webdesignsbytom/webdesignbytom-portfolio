import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine, RiContactsLine } from 'react-icons/ri';
import { IoMdCodeWorking } from 'react-icons/io';

// TODO: Fix phone size nav movement

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className='main__nav'>
      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
        <span className='tooltip__container'>Home</span>
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <IoMdCodeWorking />
        <span className='tooltip__container'>Portfolio</span>
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
        <span className='tooltip__container'>About</span>
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
        <span className='tooltip__container'>Experience</span>
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
        <span className='tooltip__container'>Services</span>
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <RiContactsLine />
        <span className='tooltip__container'>Contact</span>
      </a>
    </nav>
  );
}

export default Nav;
