import React from 'react';
import './orbitAnimation.css';
import GitHubIcon from '../../assets/images/github-black.svg'
import HTML5Icon from '../../assets/images/html5.svg'
import ReactIcon from '../../assets/images/react.svg'

function OrbitAnimation() {
  return (
    <div className='orbit__container'>
      <div className='boundry__container'>
        <div className='circle'></div>
        <div class='satellite satellite1'><img src={ReactIcon} alt="react" /></div>
        <div class='satellite satellite2'><img src={GitHubIcon} alt="github" /></div>
        <div class='satellite satellite3'><img src={HTML5Icon} alt="html5" /></div>
        <div class='satellite satellite4'>☄️</div>
      </div>
    </div>
  );
}

export default OrbitAnimation;
