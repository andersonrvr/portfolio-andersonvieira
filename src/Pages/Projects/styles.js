import styled from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  text-align: center;
  animation: fadeIn 2s;

  .mainProjects {
    padding-top: 20px;
    padding-bottom: 40px;
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
