import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 10px;
  }

  @media screen and (max-width: 576px) {
    height: 50px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 376px) {
    height: 40px;
    padding: 5px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 768px) {
    width: 60px;
    padding: 0px;
  }

  @media screen and (max-width: 576px) {
    width: 50px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 5px 10px;
  }
`;
