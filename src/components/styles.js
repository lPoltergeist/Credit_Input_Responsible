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
        background: linear-gradient(126deg, rgba(52,0,78,1) 20%, 
        rgba(93,2,98,1) 41%, rgba(48,3,94,1) 100%);
        height: 300px;
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        background-image: url(bg-main-mobile.png);
        height: 240px;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

button {
    background-color: #2d0056;
    border-radius: 8px;
    width: 26.5rem;
    height: 3rem;
    margin-top: 2rem;
    color: #fff;
    font-size: 1rem;

    transition: ease-in-out 0.5s;

    @media screen and (max-width: 400px) {
        width: 20rem;
}

&:hover {
    background: rgba(93,2,98,1);
}
}`

export const CreditCardStyle = styled.div`
@media screen and (max-width: 1000px) {
    position: absolute;
    bottom: 65rem;
    left: 12rem;
}

`

export const CardDetails= styled.main`
padding: 0 32px;
margin: auto;

@media screen and (max-width: 1000px) {
    margin-top: 16rem;
}

@media screen and (max-width: 500px) {
    margin-top: 10rem;
}


`
export const CardInfo = styled.form`
display: flex;
flex-direction: column;

@media screen and (max-width: 400px) {
   
}

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

        @media screen and (max-width: 400px) {
            width: 6.5rem;
}
    }
}
}
`
