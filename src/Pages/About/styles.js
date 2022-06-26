import styled from "styled-components";

export const Container = styled.div`
  .infos {
    text-align: center;
    animation: appearFromLeft 1.5s;
  }
  img {
    width: 150px;
    height: 150px;

    margin: 20px auto;
    border-radius: 100%;
  }
  figcaption {
    font-size: 25px;
    font-weight: bold;
  }
  .aboutMe {
    padding: 15px 20px;
    font-size: 14px;
    animation: appearFromRight 1.5s;

    h2 {
      margin-top: 14px;
      margin-bottom: 2px;
    }
  }
  .curricullum {
    margin: 15px;
    /* height: 0px; */
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #f1ede0;
    color: #000;
    font-size: 15px;
  }
  a {
    color: #000;
  }
  @media (min-width: 768px) {
    padding-bottom: 40px;
    .mainAbout {
      display: flex;
      justify-content: space-around;
      padding: 40px 60px;
      align-items: center;
      height: 90vh;
    }
    .infos {
      width: 40%;

      img {
        width: 80%;
        max-width: 400px;
        height: 290px;
      }
    }
    .aboutMe {
      width: 55%;
      max-width: 650px;
      h2 {
        font-size: 35px;
      }
      p {
        font-size: 17px;
      }
    }
    button {
      padding: 10px 30px;
    }
    button:hover {
      background-color: #fff;
    }
  }
  @keyframes appearFromRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes appearFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
