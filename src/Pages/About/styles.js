import styled from "styled-components";

export const Container = styled.div`
  animation: fadeIn 2s;

  .infos {
    text-align: center;
  }
  img {
    width: 150px;
    height: 150px;

    margin: 20px auto;
    border-radius: 5px;
  }
  figcaption {
    font-size: 25px;
    font-weight: bold;
  }
  .aboutMe {
    padding: 15px 20px;
    font-size: 14px;

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
  .Techs {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 10px;
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
        width: 300px;
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
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
