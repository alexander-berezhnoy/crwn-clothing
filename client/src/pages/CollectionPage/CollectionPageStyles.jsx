import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;

  @media screen and (max-width: 768px) {
    font-size: 34px;
    margin: 0 auto 20px;
  }

  @media screen and (max-width: 576px) {
    font-size: 30px;
    margin: 0 auto 20px;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
    justify-self: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
