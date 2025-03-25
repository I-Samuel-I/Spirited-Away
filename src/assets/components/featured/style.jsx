import styled from "styled-components";

export const Featured = styled.section`
  color: white;
  margin-top: 5%;
  margin-left: 10%;

  @media (max-height: 700px) {
    margin-top: 3%;
    
    font-size: 0.8em;
    
  }
  @media (width <= 1199px) {
    width: 100%;
    margin-top: 4%;
  }
  @media (width <= 991px) {
    margin-top: 0%;
    margin-left: 0%;
  }
  section {
    display: flex;
    @media (width <= 991px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }
  h1 {
    font-size: 4.5em;
    margin-top: 2%;
  }
  h6 {
    font-size: 1.5em;
    font-family: "Andada Pro", serif;
    font-weight: 900;
  }
  p {
    white-space: normal;
    font-size: 1.5em;
    line-height: 1.5;
    margin-top: 6%;
  }
  img {
    display: flex;
    flex-direction: row;
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (992px < width <= 1199px) {
    h1 {
      font-size: 3.1em;
    }
    h6 {
      font-size: 1.2em;
    }
    p {
      font-size: 1.15em;
      margin-top: 4%;
    }
  }
  @media (width <= 991px) {
    position: relative;
    bottom: 90px;
    width: 70%;

    h1 {
      font-size: 2.5em;
    }
    h6 {
      font-size: 1.5em;
    }
    p {
      font-size: 1.2em;
    }
    p br {
      display: none;
    }
    @media (width <= 600px) {
      width: 90%;

      h1 {
        font-size: 2.3em;
      }
      h6 {
        font-size: 1.1em;
      }
      p {
        font-size: 0.9em;
      }
    }
  }
`;

export const GhostAnimation = styled.div`
  img {
    position: relative;
    bottom: 50px;
    width: 650px;
    animation: backgroundScroll 4s infinite;
    margin-left: 25%;
  }
  @media (max-height: 700px) {
      img{
        width: 550px;
      }
  }

  @media (width <= 1300px) {
    img {
      margin-left: 10%;
      width: 600px;
    }
  }
  @media (992px < width <= 1199px) {
    img {
      margin-left: 0%;
      width: 535px;
    }
  }
  @media (width <= 991px) {
    img {
      margin-left: 0%;
      width: 375px;
    }
  }
  @media (width <= 600px) {
    img {
      margin-left: 0%;
      width: 300px;
    }
  }
  @media (width <= 399px) {
    img {
      width: 250px;
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
