import { createGlobalStyle } from "styled-components";
import BgImage  from "../images/Bg.png";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;  
    }
    body, html{
        font-family: "Archivo";
        overflow-y: hidden;
        overflow-x: hidden;
        background-image: linear-gradient(rgba(77, 75, 75, 0.137), rgba(77, 75, 75, 0.137));
        background-repeat: no-repeat;
        height: 100vh;
        background-position:center;
        background-size: cover;
    }
    h1,h2,h3,h4,h5,h6 {
  font-family: "Andada Pro", serif;
}
`;
