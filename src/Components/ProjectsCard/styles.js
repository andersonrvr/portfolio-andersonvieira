import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid white;
  min-width: 290px;
  width: 290px;
  margin-top: 15px;
  padding: 5px;
  height: 365px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 3px 8px;
  img {
    border-radius: 5px;
    width: 100%;
    height: 130px;
  }
  h3 {
    margin: 6px 0;
    font-size: 20px;
    text-decoration: underline;
  }
  .cardLink {
    margin: 15px 3px;
    width: 111px;
    height: 39px;
    border: none;
    border-radius: 10px;
    background-color: #f1ede0;
    color: #000;
    font-size: 15px;
    min-width: 44%;
  }
  .cardLink:hover {
    background-color: #fff;
  }
  a {
    color: black;
    width: 100px;
  }

  @media (min-width: 900px) {
    min-width: 400px;
    width: 400px;
    height: 400px;
    img {
      height: 200px;
    }
  }
`;
