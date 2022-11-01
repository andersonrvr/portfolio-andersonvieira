import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  text-align: center;
  color: #fff;
  background-color: #1e1e1f;
  padding-bottom: 100px;

  h5 {
    font-size: 25px;
    margin: 15px;
    color: var(--color-highlight);
  }
  .mediaDiv {
    display: flex;
    justify-content: center;
  }
  .mediaDiv > h5 {
    display: none;
  }
  .iconsDiv {
    display: flex;
    padding-top: 10px;
  }
  a > span > svg {
    font-size: 21px;
  }
  a {
    color: #fff;
    display: flex;
    padding: 3px 20px;
  }
  .footerInfo {
    font-size: 16px;
    font-weight: bold;
  }
  .mediaName {
    display: none;
  }
  p {
    margin: 10px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 60px;
    text-align: left;
    .mediaDiv > h5 {
      display: block;
    }
    .iconsDiv,
    .mediaDiv {
      flex-direction: column;
    }
    .mediaName {
      display: block;
    }
    .mediaDivs > div {
      padding: 3px 20px;
      display: flex;
      align-items: center;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
    }
    a > span > svg {
      font-size: 16px;
    }
    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
