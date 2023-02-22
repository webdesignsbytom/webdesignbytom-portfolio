import React from 'react'
// Data
import { PricingData } from '../../utils/PricingData'
// Icons
import { BsCheckLg } from 'react-icons/bs';
// Styles 
import './pricingGuide.css'



function PricingGuide() {
  return (
    <div>
        {PricingData.map((item, index) => {
          return (
            <tr className='table__row'>
              <th>{item.title}</th>
              <td>{item.basic && <BsCheckLg />}</td>
              <td>{item.fullstack && <BsCheckLg />}</td>
              <td>{item.premium && <BsCheckLg />}</td>
            </tr>
          )
        })}
    </div>
  )
}

export default PricingGuide