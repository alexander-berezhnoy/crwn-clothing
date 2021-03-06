import styled from "styled-components";

export const PreviewCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
