import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: ${(props) => props.boxshadow};
  background-color: ${(props) => props.background};
  p {
    cursor: pointer;
  }
  .sessionsLinks {
    display: none;

    p:hover {
      border-bottom: 1px solid #fff;
    }
  }
  svg {
    width: 30px;
    height: 20px;
  }
  @media (min-width: 768px) {
    padding: 15px 60px;
    p {
      margin: 0 30px;
    }
    .sessionsLinks {
      display: flex;
    }
    .menu {
      display: none;
    }
  }
`;
