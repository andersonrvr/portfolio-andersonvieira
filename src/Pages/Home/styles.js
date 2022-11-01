import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  z-index: -99999;
  .mySelf {
    margin-top: 60px;
  }
  h1,
  h2 {
    text-align: center;
    padding: 10px;
  }
  h1 {
  }
  h2 {
    font-size: 15px;
  }
  .contacts {
    margin-top: 90px;
    text-align: center;

    a {
      margin: 5px;
      padding: 10px;
      border: none;
      border-radius: 10px;
      background-color: #f1ede0;
      color: #000;
      font-size: 15px;
    }
  }

  @media (min-width: 768px) {
    .mainHome {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60vh;
    }
    .mySelf {
      h1 {
        font-size: 50px;
      }
      h2 {
        font-size: 20px;
        text-align: start;
      }
    }
    .aside {
      align-self: flex-end;
    }
    .contacts {
      height: 10vh;
      a {
        padding: 10px 30px;
      }
      a:hover {
        background-color: #fff;
      }
    }
  }
`;
