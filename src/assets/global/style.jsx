import { createGlobalStyle } from "styled-components";
import BgImage  from "../images/Bg.png";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;  
    }
    body, html{
        font-family: "Archivo", sans-serif;
        overflow-y: hidden;
        overflow-x: hidden;
        background: url(${BgImage});
        background-repeat: no-repeat;
        height: 100vh;
        background-position:center;
        background-size: cover;
    }
`;
