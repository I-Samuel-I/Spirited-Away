import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        font-family: "Archivo";
        overflow-y: hidden;
        overflow-x: hidden;
        background-color: black;
        height: 100%;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;

        img {
            position: relative;
            bottom: 10%;
        }
        h1 {
            color: white;
            font-size: 4.5em;
            display: flex;
            align-items: center;
        }

        .dots {
            display: flex;
            margin-left: 10px;
            margin-top: 30px;
        }

        .dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
            margin: 0 5px;
            animation: dotAnimation 1.5s infinite ;
        }

        .dot:nth-child(1) {
            animation-delay: 0s;
        }

        .dot:nth-child(2) {
            animation-delay: 0.3s;
        }

        .dot:nth-child(3) {
            animation-delay: 0.6s;
        }
    }

    @keyframes dotAnimation {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px); 
        }
    }
`;
