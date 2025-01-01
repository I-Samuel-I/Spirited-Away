import styled from "styled-components";

export const Featured = styled.section`
   
    color: white;
    margin-left: 10%;
    margin-top:5%;
    width: 90%;
    @media (991px < width <= 1199px) {

        margin-left: 0%;
        width: 100%;
    }

    section{
        display:flex;
        border: solid 1px blue;
        
        @media (767px < width <= 991px) {
         display: flex;
         flex-direction: column;   
         align-items: center;
         justify-content:center;
        }
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
    border: solid 1px;
    @media (991px < width <= 1199px) {
        h1{
            font-size: 3.5em;
        }
        h6{
            font-size: 1.5em;
        }
        p{
            font-size: 1.em;
        }
    }
`;

export const GhostAnimation = styled.div`
    img{
        margin-left: 40%;
        width: 700px;
        animation: backgroundScroll 4s infinite;
    }
    @media (991px < width <= 1499px) {
        img{
           margin-left: 0%;
           width: 600px;  
        }    
    }
    @media (767px < width <= 991px) {
        img{

            margin-left: 0%; 
            width:  400px;
            

        }
       

    }
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
`;