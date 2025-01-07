import styled from "styled-components";

export const Featured = styled.section`
   
    color: white;
    margin-top:10%;
    width: 90%;
    @media ( width <= 1199px) {
        width: 100%;
        margin-top: 10%
    }
    @media (width <= 991px) {
        margin-top: 0%;
    }
   
    section{
        display:flex;
        flex-direction: row-reverse;
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
        font-family: "Andada Pro", serif;
        font-weight: 900;
    }
    p{
        white-space: normal;
        font-size: 1.5em;
        line-height: 1.5;
        margin-top: 6%;
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
    margin-right: 20%;
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
        @media (width <= 600px) {
            width: 90%;
            
            h1{
                font-size: 3em;
            }
            h6{
                font-size: 1.3em;
            }
    }
        width: 70%;
    }
   
`;

export const GhostAnimation = styled.div`
    img{
        position: relative;
        bottom: 100px;
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