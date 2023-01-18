import React from 'react'
import './about.css'
import ME from '../../assets/images/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='my picture' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>My interests</small>
            </article>



          </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati officiis blanditiis natus et! Eligendi dolorem que nam nisi aut veniam repellat provident aperiam nostrum aliquam incidunt. Natus inventore asperiores itaque totam! que nam nisi aut veniam repellat provident aperiam nostrum aliquam incidunt. Natus inventore asperiores itaque totam!

            </p>
            <a href='#contact' className='btn btn-primary'>Lets talk!</a>
        </div>
      </div>
    </section>
    )
}

export default About