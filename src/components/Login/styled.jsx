
import styled from "styled-components";

export const ContainerLogin = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 823px) {
    width: 100%;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 368px;
  padding-bottom: 15px;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const LogoImg = styled.img`
  margin-right: 10px;
  width: 104.4px;
  height: 36px;
`;

export const TextBook = styled.h5`
  color: #ffffff;
  font-size: 1.75rem;
  font-family: "Heebo";
  margin-top: 5px;
`;
