import styled from "styled-components";

export const Logo = styled.div`
    display:flex;
    align-items: center;
    justify-content: end;
    margin-left: 10%;
    img{
        width: 205px;
    }
    @media ( width <= 991px) {
        width: 175px;
        margin-left: 5%;
    }
    @media (width <= 600px) {
        display: flex;
        margin: auto;
        
            width: 150px;
    }
`;