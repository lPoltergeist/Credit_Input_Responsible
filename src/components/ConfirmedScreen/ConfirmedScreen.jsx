import React from 'react'
import CompletedIcon from '../../images/icon-complete.svg';
import { Completed } from './styles';

const ConfirmedScreen = () => {
  return (
    <Completed>
   <div className="screen">
   <img src={CompletedIcon} />
        <h2>Thank You!</h2>
        <p>We've added your card details</p>
   </div>
    </Completed>
  )
}

export default ConfirmedScreen