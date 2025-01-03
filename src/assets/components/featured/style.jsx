import styled from "styled-components";

export const Featured = styled.section`
   
    color: white;
    margin-left: 10%;
    margin-top:7%;
    width: 90%;
    @media ( width <= 1199px) {
        width: 100%;
        margin-left: 0%;
        margin-top: 10%
    }
    @media (width <= 991px) {
        margin-top: 0%;
    }
    section{
        display:flex;
        
        @media ( width <= 991px) {
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
        white-space: normal;
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
    
    @media (992px < width <= 1199px) {
        h1{
            font-size: 3.5em;
        }
        h6{
            font-size: 1.5em;
        }
        p{
            font-size: 1.35em;
            white-space: nowrap; 
        }
    }
    @media (width <= 991px) {
        h1{
            font-size: 2.5em;
        }
        h6{
            font-size: 1.5em;
        }
        p{
            font-size: 1.2em;
        }
        p br{
            display: none;
        }
        width: 70%;
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
           width: 550px;  
        }    
    }
    @media (width <= 991px) {
        img{

            margin-left: 0%; 
            width:  350px;
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