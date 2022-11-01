import styled from "styled-components";

export const Container = styled.span`
  border: 1px solid #fff;
  border-radius: 3px;
  display: flex;
  /* max-width: 100px; */
  padding: 5px;
  gap: 5px;
  align-items: center;
  /* justify-content: space-evenly; */
  span {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    padding: 8px;
  }
  span {
    font-size: 16px;
  }
`;
