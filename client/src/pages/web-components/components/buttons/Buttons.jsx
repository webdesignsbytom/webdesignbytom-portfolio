import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import './buttons.css';

function Buttons() {
  const [numberOfButtons, setNumberOfButtons] = useState(10)

  return (

    <div className='buttons__container'>
      <div className='btn__title__container'>
        <h2>Hall of Buttons</h2>
        <p>Click any button to add to your design selection</p>
        <p>add are you sure box confirm</p>
      </div>

      <section className='buttons'>
        <div className="btn__container btn__container1">
          <button className="btns btn-1">CLICK</button>
          <h4 className="title">Classic Button</h4>
          <div>LIKE ICON</div>
        </div>
        <div className="btn__container btn__container2">
          <button className="btns btn-2">CLICK</button>
          <h4 className="title">Curved Edges</h4>
        </div>
        <div className="btn__container btn__container3">
          <button className="btns btn-3">CLICK</button>
          <h4 className="title">Curved Side</h4>
        </div>
        <div className="btn__container btn__container4">
          <button className="btns btn-4">CLICK</button>
          <h4 className="title">Coloured Border</h4>
        </div>
        <div className="btn__container btn__container5">
          <button className="btns btn-5">CLICK</button>
          <h4 className="title">Alt Colours</h4>
        </div>
        <div className="btn__container btn__container6">
          <button className="btns btn-6">CLICK</button>
          <h4 className="title">Disabled - shaded</h4>
        </div>
        <div className="btn__container btn__container7">
          <button className="btns btn-7">CLICK</button>
          <h4 className="title">Box shadows</h4>
        </div>
        <div className="btn__container btn__container8">
          <button className="btns btn-8">CLICK</button>
          <h4 className="title">Hover Shadows</h4>
        </div>
        <div className="btn__container btn__container9">
          <button className="btns btn-9">CLICK</button>
          <h4 className="title">Enlarging</h4>
        </div>
        <div className="btn__container btn__container10">
          <button className="btns btn-10">CLICK</button>
          <h4 className="title">Colour change</h4>
        </div>
        <div className="btn__container btn__container11">
          <button className="btns btn-11">CLICK</button>
          <h4 className="title">No Background</h4>
        </div>
        <div className="btn__container btn__container12">
          <button className="btns btn-12">CLICK</button>
          <h4 className="title">Eliptical</h4>
        </div>
        <div className="btn__container btn__container13">
          <button className="btns btn-13">CLICK</button>
          <h4 className="title">Blurred Out</h4>
        </div>
        <div className="btn__container btn__container14">
          <button className="btns btn-14">CLICK</button>
          <h4 className="title">Font and Underline</h4>
        </div>
        <div className="btn__container btn__container15">
          <button className="btns btn-15">CLICK</button>
          <h4 className="title">Glowing Neon</h4>
        </div>
        <div className="btn__container btn__container16">
          <button className="btns btn-16">CLICK</button>
          <h4 className="title">Colour, size, font</h4>
        </div>
        <div className="btn__container btn__container17">
          <button className="btns btn-17">CLICK</button>
          <h4 className="title">Bright Ripple on Click</h4>
        </div>
        <div className="btn__container btn__container18">
          <button className="btns btn-18">CLICK</button>
          <h4 className="title">Hover to animate</h4>
        </div>
        <div className="btn__container btn__container19">
          <button className="btns btn-19"><div><span>CLICK</span></div></button>
          <h4 className="title">Colour, size, font</h4>
        </div>
        <div className="btn__container btn__container20">
          <button className="btns btn-20">CLICK</button>
          <h4 className="title">Colour, size, font</h4>
        </div>
        <div className="btn__container btn__container21">
          <button className="btns btn-21">
            <span className='btn__text'>Save Changes</span>
          </button>
          <h4 className="title">Colour, size, font</h4>
        </div>
      </section>
    </div>
  );
}

export default Buttons;
