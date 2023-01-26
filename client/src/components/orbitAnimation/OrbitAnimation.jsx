import React from 'react';
import './orbitAnimation.css';

function OrbitAnimation() {
  return (
    <div className='orbit__container'>
      <div className='outer__circle'>
        <div className='circle'></div>
      </div>
      <div class='satellite1'>🛰️</div>
      <div class='satellite2'>🚀</div>
      <div class='satellite3'>👽</div>
      <div class='satellite4'>☄️</div>
    </div>
  );
}

export default OrbitAnimation;
