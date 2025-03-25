import styled from "styled-components";

export const Logo = styled.div`
    display:flex;
    align-items: center;
    justify-content: end;
    margin-left: 10%;
    img{
        width: 205px;
    }
    @media ( width <= 1199px) {
        width: 180px;
        
    }
    @media ( width <= 991px) {
        width: 175px;
        margin-left: 5%;
    }
    @media (width <= 600px) {
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
        img{
            width: 150px;
        }
    }
    @media (width <= 399px) {
        img{
            width: 125px;
        }
    }
    @media (max-height: 700px) {
        img{
            width: 175px;
        }
  }
`;