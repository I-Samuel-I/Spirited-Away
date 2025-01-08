import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    margin-top: 10%;
    gap: 20px;

    @media (width <= 991px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 8%;
    }
    @media ( width <= 600px){
        gap: 25px;
    }
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative; 
        width: 50%;
        height: 5.5vh;
        border-radius: 5px;
        font-size: 1.1em;
        text-decoration: none;
        font-weight: bolder;
        color: white;   
        overflow: hidden; 
        &.primary {
            background-color: #f1a5b1;
            color: black;
        }

        &.secondary {
            color: white;
            border: solid 2px #f1a5b1;
        }

        @media (width <= 991px) {
            width: 100%;
        }
        @media ( width <= 600px){
            height: 6vh   
        }
        @media (width <= 399px) {
            height: 6.5vh;
        }
        &:after {
            content: "";
            position: absolute;
            top: -3.125rem;
            left: -10rem;
            width: 3.125rem;
            height: 10rem;
            background: #f1a5b1;
            opacity: 0.4;
            transform: rotate(35deg);
            transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        }
        &:hover {
            background-color: #2D1607;
            border: none;
            color: white;
            &:after {
                left: 120%;
                transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
            }
            img {
                filter: invert(1);
            }
        }
    }

    img {
        display: flex;
        width: 22px;
        margin: 0px;
        margin-right: 5%;
    }
    
    @media (width <= 1199px) {
        a {
            font-size: 1em;
        }
        img {
            margin-right: 2%;
        }
    }
`;
