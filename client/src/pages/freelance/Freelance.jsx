import React from 'react';
// Images
import CodeImg from '../../assets/images/codeImage.png';
import MYEA from '../../assets/images/myecoapp.png';
// Styles
import './freelance.css';

function Freelance() {
  return (
    <>
      <section id='freelance' className='container freelance__container'>
        <section className='freelance__section__one'>
          <div className='freelance__titles'>
            <h1>Freelance Web Design </h1>
            <h4>Have your dream site built professionally</h4>
          </div>
          <article className='splash__container'>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                dolor ut voluptatem dicta ipsum? Voluptate porro labore sit
                deleniti ducimus nostrum maxime ipsum dolores sint. Quam
                obcaecati suscipit, officia laboriosam aliquid possimus ex modi
                cupiditate sed hic quibusdam porro nisi sit fugiat neque
                placeat, iure a eveniet debitis, dignissimos consequuntur
                excepturi aliquam aperiam dicta! Nemo nulla quia sapiente
                repellendus repudiandae illo maiores placeat, consequuntur
                labore architecto dolor natus, voluptatum suscipit ut, sed
                praesentium magnam? Esse eligendi, magnam nisi dolorem
                architecto consectetur placeat dolorum a aut modi recusandae
                deleniti consequatur? Facilis quos optio minus dignissimos quas
                perspiciatis iusto eius quia! Repellendus.
              </p>
            </div>
            <div className='splash__images'>
              <div>
                <img src={CodeImg} alt='Code' />
              </div>
              <div>
                <img src={MYEA} alt='LiveSite' />
              </div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default Freelance;
