import styled from "styled-components";

export const Links = styled.nav`
    display:flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    margin-right:12.5%;
    ul{
        display: flex;
        align-items: center;
        list-style:none;
        gap: 30px;
    }
    li:hover{
        background-color: #677275;
        transform: scale(1.1);
        transition: 0.5s;
    }
    li{
        border: solid 1px white;
        border-radius: 50px;
        background-color: #ffffff3b;
        padding: 5px;
        padding-top: 7px;
        padding-left: 7px;
        padding-right: 7px;
    }
    img{
        width:25px; 
    }
    @media ( width <= 991px) {
        margin-right: 5%;
        transform: scale(0.9);
    }
    @media (width <= 600px) {
            display: none;
        
        
    }
`;