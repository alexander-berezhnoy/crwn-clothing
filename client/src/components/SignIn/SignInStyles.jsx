import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    width: 50vw;
    margin-bottom: 20px;
  }
`;

export const SignInTitle = styled.h2`
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
