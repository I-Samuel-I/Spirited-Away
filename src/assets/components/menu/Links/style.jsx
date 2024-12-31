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
        gap: 40px;
        border: solid 1px;
    }
    li{
        border: solid 2px white;
        border-radius: 50px;
        background-color: #ffffff3b;
    }
    img{
        width:25px;
        
    }
`;