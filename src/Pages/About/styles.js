import styled from "styled-components";

export const Container = styled.div`
  animation: fadeIn 2s;
  h1 {
    margin: 15px 20px;
    font-size: 1.6rem;
    border-bottom: 1px solid #fff;
  }
  .infos {
    text-align: center;
  }
  .detailsDesktop {
    display: none;
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
      margin-top: 20px;
      margin-bottom: 2px;
      border-bottom: 1px solid #fff;
    }
  }
  .curricullum {
    margin: 15px;
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
  h3 {
    font-size: 20px;
    margin-top: 10px;
    /* border-bottom: 1px solid #fff; */
  }
  .Education > span {
    font-size: 11px;
  }
  .Education > p {
    margin: 5px 0;
  }
  .courseTitle {
    font-weight: 600;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    padding-bottom: 40px;
    h1 {
      margin: 30px 0px 0px 0px;
      max-width: 200px;
      font-size: 30px;
    }
    .detailsDesktop {
      max-width: 230px;
      margin-top: 15px;
      display: block;
    }
    .detailsMobile {
      display: none;
    }
    .mainAbout {
      display: flex;
      justify-content: space-around;
      padding: 40px 75px;
      align-items: flex-start;
      height: 90vh;
    }
    .infos {
      width: 40%;

      img {
        width: 300px;
        max-width: 400px;
        height: 290px;
        margin-top: 30px;
      }
    }
    .aboutMe {
      width: 55%;
      max-width: 650px;
      padding: 0;
      h2 {
        margin-top: 20px;
        font-size: 30px;
      }
      p {
        font-size: 17px;
      }
    }
    .Education {
      margin-top: 50px;
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
