import React from 'react'
import CV from '../../assets/files/TomBrockingtonResume2023.pdf'
let x = 1

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Lets Chat</a>
    </div>
  )
}

export default CTA