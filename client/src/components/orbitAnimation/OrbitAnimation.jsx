import React from 'react';
import './orbitAnimation.css';
import GitHubIcon from '../../assets/images/github-black.svg'
import HTML5Icon from '../../assets/images/html5.svg'
import ReactIcon from '../../assets/images/react.svg'
import NodeIcon from '../../assets/images/nodejs.svg'
import CSSIcon from '../../assets/images/css3.svg'
import ExpressJS from '../../assets/images/expressjs.svg'
import ReactJSIcon from '../../assets/images/reactjs-icon.svg';


function OrbitAnimation() {
  return (
    <div className='orbit__container'>
      <div className='boundry__container'>
        <div className='circle'></div>
        <div class='satellite satellite1'><img src={ReactJSIcon} alt="react icon" /></div>
        <div class='satellite satellite2'><img src={GitHubIcon} alt="github icon" /></div>
        <div class='satellite satellite3'><img src={HTML5Icon} alt="html5 icon" /></div>
        <div class='satellite satellite4'><img src={NodeIcon} alt="node js icon" /></div>
      </div>
    </div>
  );
}

export default OrbitAnimation;
