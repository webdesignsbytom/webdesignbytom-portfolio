import React from 'react';
import './orbitAnimation.css';
import GitHubIcon from '../../assets/images/github-black.svg'
import HTML5Icon from '../../assets/images/html5.svg'
import NodeIcon from '../../assets/images/nodejs.svg'
import CSSIcon from '../../assets/images/css3.svg'
import ExpressJS from '../../assets/images/expressjs.svg'
import ReactJSIcon from '../../assets/images/reactjs-icon.svg';
import TailwindIcon from '../../assets/images/tailwindcss-icon.svg';
import Prisma from '../../assets/images/file_type_light_prisma.svg';


function OrbitAnimation() {
  return (
    <div className='orbit__container'>
      <div className='boundry__container'>
        <div className='circle'></div>
        <div className='satellite satellite1'><img src={ReactJSIcon} alt="react icon" /></div>
        <div className='satellite satellite2'><img src={GitHubIcon} alt="github icon" /></div>
        <div className='satellite satellite3'><img src={HTML5Icon} alt="html5 icon" /></div>
        <div className='satellite satellite4'><img src={NodeIcon} alt="node js icon" /></div>
        <div className='satellite satellite5'><img src={ExpressJS} alt="node js icon" /></div>
        <div className='satellite satellite6'><img src={TailwindIcon} alt="node js icon" /></div>
        <div className='satellite satellite7'><img src={Prisma} alt="node js icon" /></div>
        
      </div>
    </div>
  );
}

export default OrbitAnimation;
