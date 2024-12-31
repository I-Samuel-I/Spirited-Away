import styled from "styled-components";

export const Featured = styled.section`
    @keyframes backgroundScroll {
        0% {
        transform: translateY(0); 
        }
        50% {
        transform: translateY(20px); 
        }
        100% {
        transform: translateY(0); 
        }
        
        }
    color: white;
    margin-left: 10%;
    margin-top:5%;
    section{
        display:flex;
        border: solid 1px blue;
    }
    h1{
        font-size: 4.5em;
        margin-top: 2%;
    }
    h6{
        font-size: 1.5em;
    }
    p{
        font-size: 1.5em;
        line-height: 1.5;
        margin-top: 5%;
    }
    img{
        display: flex;
        flex-direction: row;
       
        transform: scale(1.1);
        
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;
export const GhostAnimation = styled.div`
    img{
        width: 720px;
        margin-left: 50%;
        animation: backgroundScroll 4s infinite linear;
    }
`;