import styled from "styled-components";

export const Featured = styled.section`
    color: white;
    margin-left: 10%;
    margin-top:5%;
    section{
        display:flex;
        border: solid 1px blue;
    }
    h1{
        font-size: 4.5em;
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
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;