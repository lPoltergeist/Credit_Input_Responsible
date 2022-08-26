import React, {useState} from 'react'
import {Container, CardDetails, CardInfo, CreditCardStyle} from './styles'

import CreditCard from './CreditCard/CreditCard'
import ConfirmedScreen from './ConfirmedScreen/ConfirmedScreen'

const CreditCardInput = () => {
  const [number, setNumber] = useState('0000 0000 0000 0000')
  const [name, setName] = useState('')
  const [mm, setMM] = useState('00')
  const [yy, setYY] = useState('00')
  const [cvc, setCVC] = useState('000')
  const [confirmed, setConfirmed] = useState(true);

 const formattedNumber = number.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 ").trim();

  function HandleConfirmed() {
      if (number.length < 16 || mm.length < 2 || yy.length < 2 || cvc < 3) {
        return null;
      } else {
        setConfirmed(!confirmed)
      }
  }

  return (
    <Container>
      <aside>
          
      </aside>

      <CreditCardStyle>
      <CreditCard name={name} number={formattedNumber} mm={mm} yy={yy} cvc={cvc}/>
      </CreditCardStyle>

        <CardDetails>
      {confirmed ? <CardInfo>
            <span>Cardholder name</span>
        <input type="text" maxLength="35"  id="name" required placeholder="e.g. Jane Appleseed" onChange={(e) => setName(e.target.value)}/>

        <span>card number</span>
        <input id="ccn" type="tell" onDrop="return false" required maxLength="16" minLength="16" placeholder="xxxx xxxx xxxx xxxx" onChange={(e) => setNumber(e.target.value)}/>
        
        
        <div className="dateCVC">
        <div className="Date">
        <span>exp. date (MM/YY)</span>
        <div>
        <input type="tel" required id="MM" className="date" maxLength="2" minLength="2" placeholder="MM" onChange={(e) => setMM(e.target.value)}/>
        <input type="tel" required id="YY" className="date" maxLength="2" minLength="2" placeholder="YY" onChange={(e) => setYY(e.target.value)}/>
        </div>
        </div>

       <div className="cvc" >
       <span>CVC</span>
        <div>
        <input type="tel" required id="CVC" className="CVC" minLength="3" maxLength="3" placeholder="e.g. 123" onChange={(e) => setCVC(e.target.value)}/> 
        </div> 
        </div>   
        </div>
        <button onClick={HandleConfirmed}>Confirm</button>
        </CardInfo> 
         : <ConfirmedScreen/>}
         
        </CardDetails>
    </Container>
  )
}

export default CreditCardInput