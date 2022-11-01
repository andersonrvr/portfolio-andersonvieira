import styled from "styled-components";

export const Container = styled.div`
  .barMobile {
    position: fixed;
    bottom: 0;
    height: 60px;
    display: flex;
    justify-content: space-around;
    left: 0;
    right: 0;
    box-shadow: 0 1px 3px rgb(0 0 0 / 24%);
    z-index: 10000;
    background-color: #20201f;
  }
  .iconName {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 8px 0;
    flex-direction: column;
  }
  .iconName > span {
    font-size: 21px;
  }

  .iconName > p {
    font-size: 12px;
  }

  .HeaderDesktop {
    display: flex;

    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: ${(props) => props.boxshadow};
    background-color: ${(props) => props.background};
  }
  p {
    cursor: pointer;
  }
  .sessionsLinks {
    display: none;
  }
  p:hover {
    text-decoration: underline;
    transform: scale(1.08);
  }

  @media (min-width: 768px) {
    .barMobile {
      display: none;
    }
    .HeaderDesktop {
      padding: 15px 60px;
    }
    p {
      margin: 0 30px;
    }
    .sessionsLinks {
      display: flex;
    }
  }
`;
