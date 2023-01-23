import React from 'react';
import './buttons.css';

function Buttons() {
  return (
    <div className='buttons__container'>
      <div className='btn__title__container'>
        <h2>Hall of Buttons</h2>
      </div>

      <section className='buttons'>
        <div className='btn__container'>
          <button className='btn-1'>CLICK</button>
          <h4 className='title'>Classic Button</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-2'>CLICK</button>
          <h4 className='title'>Curved Edges</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-3'>CLICK</button>
          <h4 className='title'>Button 3</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-4'>CLICK</button>
          <h4 className='title'>Button 4</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-5'>CLICK</button>
          <h4 className='title'>Button 5</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-6'>CLICK</button>
          <h4 className='title'>Button 6</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-7'>CLICK</button>
          <h4 className='title'>Button 7</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-8'>CLICK</button>
          <h4 className='title'>Button 8</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-9'>CLICK</button>
          <h4 className='title'>Button 9</h4>
        </div>
        <div className='btn__container'>
          <button className='btn-10'>CLICK</button>
          <h4 className='title'>Button 10</h4>
        </div>
      </section>
    </div>
  );
}

export default Buttons;
