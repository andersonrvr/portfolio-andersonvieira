import styled, { keyframes } from "styled-components";
import { wobble } from "react-animations";
const wobbleAnimation = keyframes`${wobble}`;

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  animation: 5s ${wobbleAnimation} infinite;

  svg {
    width: 50px;
    height: 50px;
  }
  .node {
    color: #90c53f;
  }
  .django {
    color: #3776ab;
  }
  .js {
    width: 35px;
    color: #e6c62f;
  }
  .react {
    color: #61dbfb;
  }
  @media (min-width: 1100px) {
    svg {
      width: 90px;
      height: 90px;
    }
    .js {
      width: 65px;
    }
  }
`;
