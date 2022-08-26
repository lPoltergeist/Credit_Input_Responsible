import React from 'react'
import { FrontCreditCard, BackCreditCard } from './styles'
import CardLogo from '../../images/card-logo.svg';
import FrontCredit from '../../images/bg-card-front.png'
import BackCredit from '../../images/bg-card-back.png';

const CreditCard = (props) => {
  return (
   <>
    <FrontCreditCard>
        <img src={CardLogo} className="logocard" />
      
        <img src={FrontCredit} className="frontcredit" />
        <span className="number">
          {props.number}
        </span>
        <span className="name">
          {props.name}
        </span>
        <span className="date">
          {props.mm}/{props.yy}
        </span>
      </FrontCreditCard>

      <BackCreditCard>
        <img src={BackCredit} className="backcredit" alt="credit card" />
        <span className="cvc">
          {props.cvc}
        </span>
      </BackCreditCard>
      </>
  )
}

export default CreditCard