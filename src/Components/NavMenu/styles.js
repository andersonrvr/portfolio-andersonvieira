import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: appearFromRight 0.5s;

  display: flex;
  align-items: center;
  justify-content: right;

  .modalContainer {
    width: 100%;
    background-color: #20201f;

    height: 100%;
  }
  .navHeader {
  }
  button {
    background-color: #20201f;
    color: #fff;
    padding: 10px;
    border: none;
  }
  button > svg {
    width: 20px;
    height: 20px;
  }
  .menuFeatures {
    padding: 30px 20px;
    text-align: center;
    font-size: 20px;
  }
  .menuFeatures > p {
    padding: 5px;
  }
  @keyframes appearFromRight {
    from {
      transform: translateX(200px);
    }
    to {
      transform: translateX(0px);
    }
  }
  @keyframes appearFromLeft {
    from {
      transform: translateX(-200px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
