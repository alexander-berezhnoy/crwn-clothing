import styled from "styled-components";

export const SignPageContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;
