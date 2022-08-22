import styled from "styled-components";
import DesktopBG from '../images/bg-main-desktop.png'

export const Container = styled.div`
align-items: stretch;
display: flex;
height: 100vh;
text-transform: uppercase;
font-size: 0.8rem;
font-weight: 600;

@media screen and (max-width: 1000px) {
    flex-direction: column;
    display: flex;
}

aside {
    width: 483px;
    background-image: url(bg-main-desktop.png);

    @media screen and (max-width: 1000px) {
        background-image: url(bg-main-mobile.png);
        height: 400px;
    }
}

input {
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #a8a8b3;
    height: 30px;
    padding-left: 20px;

    &::placeholder {
        color: gray;
        font-size: 1rem;
        
    }  
}

button {
    background-color: #2d0056;
    border-radius: 8px;
    width: 26.5rem;
    height: 3rem;
    margin-top: 2rem;
    color: #fff;
    font-size: 1rem;
}`

export const FrontCreditCard = styled.div`
position: absolute;
left: 10rem;
top: 11rem;
color: #fff;
transition: ease-out 1s;

.logocard {
    position: absolute;
    left: 3rem;
    top: 1.5rem;
    
}

.number {
    position: absolute;
    left: 3rem;
    top: 9rem;
    font-size: 2rem;
}

.name {
    position: absolute;
    left: 3rem;
    top: 12.6rem;
    font-size: 0.8rem;
}

.date {
    position: absolute;
    left: 22rem;
    top: 12.6rem;
    font-size: 0.8rem;
}

@media screen and (max-width: 1400px) {
    left: 5rem;
}


`
export const BackCreditCard = styled.div`
position: absolute;
left: 17rem;
top: 28rem;
transition: ease-out 1s;

.cvc {
    position: absolute;
    left: 22rem;
    top: 7rem;
    font-size: 1rem;
    color: #fff;
}

@media screen and (max-width: 1400px) {
    left: 5rem;
}
`

export const CardDetails= styled.main`
padding: 0 32px;
margin: auto;
`
export const CardInfo = styled.div`
display: flex;
flex-direction: column;

span {
    margin: 20px 0 4px 0;
}

input {
max-width: 25rem;

}

.dateCVC {
    display: flex;
    font-size: 0.8rem;
    margin-top: 20px;

    .Date {
    input {
        width: 65px;
    }
    input:nth-child(2) {
        margin: 0 7px 0 7px;
    }
}

.cvc{
    input { 
        width: 13rem;
    }
}
}
`
