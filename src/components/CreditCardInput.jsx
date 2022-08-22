import React, {useState} from 'react'
import {Container, CardDetails, CardInfo, FrontCreditCard, BackCreditCard} from './styles'
import FrontCredit from '../images/bg-card-front.png'
import BackCredit from '../images/bg-card-back.png'
import DesktopBG from '../images/bg-main-desktop.png'
import CardLogo from '../images/card-logo.svg'

const CreditCardInput = () => {
  const [number, setNumber] = useState('0000 0000 0000 0000')
  const [name, setName] = useState('')
  const [mm, setMM] = useState('00')
  const [yy, setYY] = useState('00')
  const [cvc, setCVC] = useState('000')

  let width = window.screen.width;

  console.log(width);


  console.log(name)
  return (
    <Container>
      <aside>
          
      </aside>

      <FrontCreditCard>
        <img src={CardLogo} className="logocard" />
        
        <img src={FrontCredit} alt="credit card"/>
        <span className="number">
          {number}
        </span>
        <span className="name">
          {name}
        </span>
        <span className="date">
          {mm}/{yy}
        </span>
      </FrontCreditCard>

      <BackCreditCard>
        <img src={BackCredit} alt="credit card" />
        <span className="cvc">
          {cvc}
        </span>
      </BackCreditCard>

        <CardDetails>
            <CardInfo>
            <span>Cardholder name</span>
        <input type="text" maxLength="35" placeholder="e.g. Jane Appleseed" onChange={(e) => setName(e.target.value)}/>

        <span>card number</span>
        <input id="ccn" type="tel" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" onChange={(e) => setNumber(e.target.value)}/>
        
        
        <div className="dateCVC">
        <div className="Date">
        <span>exp. date (MM/YY)</span>
        <div>
        <input type="text" className="date" maxLength="2" placeholder="MM" onChange={(e) => setMM(e.target.value)}/>
        <input type="text" className="date" maxLength="2" placeholder="YY" onChange={(e) => setYY(e.target.value)}/>
        </div>
        </div>

       <div className="cvc" >
       <span>CVC</span>
        <div>
        <input type="text" className="CVC" maxLength="3" placeholder="e.g. 123" onChange={(e) => setCVC(e.target.value)}/> 
        </div> 
        </div>   
        </div>
        
        </CardInfo>
        <button type="submit">Confirm</button>  
        </CardDetails>
    </Container>
  )
}

export default CreditCardInput