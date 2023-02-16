import React from 'react';
import './about.css';
import ME from '../../assets/images/me.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Junior Developer</small>
              <br />
              <small>Electrical Engineer</small>
              <br />
              <small>Renewable energy installer</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Services</h5>
              <small>Experienced Product Designer</small>
              <br />
              <small>MERN Stack Design</small>
              <br />
              <small>Advice and information</small>
            </article>

            <article
              className='about__card projects__card'
            >
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>My Personal Projects</small>
              <br />
              <small>Web and circuit design</small>
              <br />
              <small>See what I'm building</small>
            </article>
          </div>
          <p>
            After years of electrical engineering and renewable energy
            installation, I have started developing websites for you! I have
            always worked in a design and engineering capacity, I even built the desk I work from. <br /> Completing jobs
            that have logic puzzles or require solving problems has always made
            me happy. My personal projects combine circuits and web design for
            developing products I hope to achieve success with. 
          </p>
          <p>I am also an artist, carpenter, master scuba diver, syrup maker and entrepreneur.</p>
          <div className='button__container'>
            <a href='#contact' className='btn btn-primary'>
              Lets talk!
            </a>
            <a href='#portfolio' className='btn'>
              Show Me Some Skills!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
