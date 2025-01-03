import styled from "styled-components";

export const Button = styled.div `
    display:flex;
    margin-top: 10%;
    gap: 10px;
    @media (width <= 991px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 7%;
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 5.5vh;
        border-radius: 5px;
        font-size: 1.1em;
        text-decoration: none;
        font-weight: bolder;
        color: white;
        &.primary {
            background-color:#f1a5b1;
            color: black;
        }
        &.secondary {
            color: white;
            border: solid 2px #f1a5b1;
        }
        @media (width <= 991px) {
            width: 100%;
        }
       }
       img{
        display: flex;
        width: 20px;
        margin: 0px;
        margin-right: 5%;
       }
       
    @media (width <= 1199px) {
        a{
            font-size: 1em;
        }
        img{
            margin-right: 2%;
        }
       }
`;