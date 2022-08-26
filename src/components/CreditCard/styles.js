import styled from "styled-components";


export const FrontCreditCard = styled.div`
position: absolute;
left: 10rem;
top: 11rem;
color: #fff;
transition: ease-out 1s;
z-index: 99;

@media screen and (max-width: 1400px) {
    left: 5rem;
}

@media screen and (max-width: 1000px) {
    left: 3rem;
    top: 19rem;
}

@media screen and (max-width: 700px) {
    left: -5rem;
}

@media screen and (max-width: 500px) {
    left: -11rem;
    top: 16rem;
    z-index: 99;

    .frontcredit {
        width: 370px;
    }

}


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

    @media (max-width: 500px) {
        top: 7.5rem;
        font-size: 1.5rem;
    }

    @media (max-width: 500px) {
        top: 6.5rem;
        font-size: 1.2rem;
    }
}

.name {
    position: absolute;
    left: 3rem;
    top: 12.6rem;
    font-size: 0.8rem;

    @media (max-width: 500px) {
        top: 10.3rem;
        font-size: 0.8rem;
    }

    @media (max-width: 400px) {
        top: 8.5rem;
        font-size: 0.8rem;
    }
}

.date {
    position: absolute;
    left: 22rem;
    top: 12.6rem;
    font-size: 0.8rem;

    @media (max-width: 500px) {
        top: 10.3rem;
        left: 18rem;
        font-size: 0.8rem;

    }

    @media (max-width: 400px) {
        top: 8.5rem;
        left: 14rem;
        font-size: 0.8rem;

    }
}

@media screen and (max-width: 400px) {
    left: -10rem;
    top: 20rem;


    .frontcredit {
        width: 300px;
    }

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

    @media screen and (max-width: 500px) {
        left: 18rem;
        top: 5.6rem;
    }

    @media screen and (max-width: 400px) {
        left: 14.5rem;
        top: 4.4rem;
    }


}

@media screen and (max-width: 1400px) {
    left: 5rem;
}

@media screen and (max-width: 1000px) {
    left: 7.5rem;
    top: 10rem;
}

@media screen and (max-width: 700px) {
    left: -2rem;
    top: 10rem;
}

@media screen and (max-width: 500px) {
    left: -7rem;
    top: 8.8rem;

    .backcredit {
        width: 370px;
    }
}

@media screen and (max-width: 400px) {
    left: -7.4rem;
    top: 14rem;

    margin: auto;

    .backcredit {
        width: 300px;
    }
}
`