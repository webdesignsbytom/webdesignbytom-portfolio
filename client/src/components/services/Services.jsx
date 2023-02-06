import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframe and figma designs using the latest design tools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Faster streamlined services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User friendly layouts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing and collecting user experience data</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Colour and style options. Hue matching and pallet building tools. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Root set styles for speedy changes througout project.</p>
            </li>
            

          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Fullstack web design and development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database and user services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Game and animation Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reactive and mobile friendly or mobile first design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social medias supporting post/sharing dynamic </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video, webcam and chat communication services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Restful API services</p>
            </li>

          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ISO 9001 documentation and auditing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Arduino development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customer relations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Teams and Safety management</p>
            </li>
    
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
