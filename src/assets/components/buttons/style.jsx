import styled from "styled-components";

export const Button = styled.div `
    display:flex;
    margin-top: 10%;
    gap: 10px;
       
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
            border: solid 3px #f1a5b1;
        }
       }
       img{
        display: flex;
        width: 20px;
        margin: 0px;
        margin-right: 5%;
       }
`;