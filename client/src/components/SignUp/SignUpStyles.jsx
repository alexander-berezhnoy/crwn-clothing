import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;

  @media screen and (max-width: 576px) {
    width: 60vw;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
