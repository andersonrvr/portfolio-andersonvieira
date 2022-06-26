import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 20px;
  display: flex;
  max-width: 1300px;
  overflow: scroll;
  @media (min-width: 900px) {
    overflow: auto;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
  }
`;
